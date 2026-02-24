import { WeeklyStreak } from "./WeeklyStreak";

const DashboardPage = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-200 p-4 text-white/90">
            <WeeklyStreak />
            <div className="p-2 bg-amber-400 rounded-2xl">block2</div>
            <div className="p-2 bg-amber-400 rounded-2xl">block3</div>
            <div className="p-2 bg-amber-400 rounded-2xl">block4</div>
        </div>
    );
};

export default DashboardPage;
