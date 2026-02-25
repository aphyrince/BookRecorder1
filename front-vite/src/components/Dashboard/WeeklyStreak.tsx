import { useCallback, useEffect, useMemo, useState } from "react";
import { getWeeklyData } from "./utils/weeklyCount";
import { useRecordStore } from "../../zustand/useRecordStore";

export const WeeklyStreak = () => {
    const { records } = useRecordStore();
    const [dates, setDates] = useState<Date[]>([]);

    useEffect(() => {
        const calcDates = async () => {
            const rawDates = records.map((item) => item.dates);
            const renewDates = rawDates.reduce((acc, item) => {
                return [...acc, ...item];
            }, []);
            setDates(renewDates);
        };
        calcDates();
    }, [records]);

    // 데이터 가공 (메모이제이션으로 성능 최적화)
    const weeklyData = useMemo(() => getWeeklyData(dates), [dates]);

    const lastNWeeks = useCallback((N: number) => {
        const weeks = [];
        for (let i = N - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - (d.getDay() + i * 7));
            weeks.push(d.toISOString().split("T")[0]);
        }
        return weeks;
    }, []);

    // 카운트에 따른 색상 결정 로직
    const getColor = (count: number) => {
        if (!count) return "#ffffff11"; // 데이터 없음
        if (count < 2) return "#35530e";
        if (count < 5) return "	#5ea500";
        if (count < 8) return "#9ae600";
        return "#bbf451"; // 가장 진한 색
    };

    return (
        <div className="grid grid-flow-col grid-rows-4 p-4">
            {lastNWeeks(48).map((weekStr) => {
                const count = weeklyData[weekStr] || 0;
                return (
                    <div
                        key={weekStr}
                        title={`${weekStr}: ${count} items`}
                        className={`size-7 rounded-sm`}
                        style={{ backgroundColor: getColor(count) }}
                    />
                );
            })}
        </div>
    );
};
