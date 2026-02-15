import { useCallback, useState } from "react";
import Sidebar from "./components/sidebars/Sidebar";
import HomePage from "./components/Home/HomePage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import AddPage from "./components/Add/AddPage";
import SettingPage from "./components/Setting/SettingPage";

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageShift = useCallback((pageNum: number) => {
        setCurrentPage(pageNum);
    }, []);

    return (
        <div className="flex w-280 h-200 p-0 m-0 bg-black/85 overflow-hidden">
            <Sidebar pageHandler={pageShift} />
            <div
                className="flex-1 flex flex-col w-full h-800 duration-300 ease-in-out"
                style={{
                    transform: `translateY(${currentPage * -800}px)`,
                }}
            >
                <HomePage />
                <DashboardPage />
                <AddPage pageShift={() => pageShift(0)} />
                <SettingPage />
            </div>
        </div>
    );
};

export default App;
