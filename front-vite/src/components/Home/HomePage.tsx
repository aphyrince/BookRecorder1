import { useState } from "react";
import { dummyRecords } from "../../tmpDatas/dummyRecordList";
import Hero from "./Hero";
import RecordList from "./RecordList";

const HomePage = () => {
    const [recordCount] = useState(dummyRecords.length);
    const [recordList] = useState(dummyRecords);
    return (
        <div className="flex flex-col h-200 w-full">
            <Hero recordCount={recordCount} />
            <RecordList list={recordList} />
        </div>
    );
};

export default HomePage;
