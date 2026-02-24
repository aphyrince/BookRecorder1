export type WeeklyCount = {
    [startDate: string]: number;
};

// Date[]를 받아서 해당 주의 일요일 날짜를 키로 하는 객체로 변환
export const getWeeklyData = (dates: Date[]): WeeklyCount => {
    return dates.reduce((acc: WeeklyCount, date: Date) => {
        const d = new Date(date);
        const day = d.getDay(); // 0(일) ~ 6(토)

        // 해당 날짜에서 요일만큼 빼서 '이번 주 일요일' 구하기
        const diff = d.getDate() - day;
        const sunday = new Date(d.setDate(diff));

        // YYYY-MM-DD 형식의 키 생성
        const dateKey = sunday.toISOString().split("T")[0];

        acc[dateKey] = (acc[dateKey] || 0) + 1;
        return acc;
    }, {});
};
