import RecordList from "./components/Home/RecordList";
import Hero from "./components/Home/Hero";
import { dummyRecords } from "./tmpDatas/recordList";
import { useState } from "react";
import Sidebar from "./components/sidebars/Sidebar";

const App = () => {
    const [recordCount] = useState(dummyRecords.length);
    const [recordList] = useState(dummyRecords);

    return (
        <div className="flex w-280 h-200 p-0 m-0 bg-black/85">
            <Sidebar />
            <div className="flex flex-col flex-1 h-full ml-auto ">
                <Hero recordCount={recordCount} />
                <RecordList list={recordList} />
            </div>
        </div>
    );
};

export default App;
