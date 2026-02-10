import RecordList from "./components/RecordList";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { dummyRecords } from "./tmpDatas/recordList";
import { useState } from "react";
import Sidebar from "./components/sidebars/Sidebar";

const App = () => {
    const [recordCount] = useState(dummyRecords.length);
    const [recordList] = useState(dummyRecords);

    return (
        <div className="relative flex flex-col w-280 h-200 p-0 m-0 bg-lime-100">
            <Hero recordCount={recordCount} />
            <Sidebar />
            <Nav />
            <RecordList list={recordList} />
        </div>
    );
};

export default App;
