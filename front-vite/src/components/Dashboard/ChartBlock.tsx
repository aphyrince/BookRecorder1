import { useCallback } from "react";
import { useRecordStore } from "../../zustand/useRecordStore";

const ChartBlock = () => {
    const { records } = useRecordStore();

    const CalcChartData = useCallback(() => {
        const dates = records.map((item) => item.dates);
        const chartData = dates.reduce((prev, dates) => [...prev, ...dates]);
        return chartData;
    }, [records]);

    return <div className="p-2 bg-white/10 rounded-2xl"></div>;
};

export default ChartBlock;
