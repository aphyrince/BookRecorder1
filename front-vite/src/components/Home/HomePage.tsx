import Hero from "./Hero";
import RecordList from "./RecordList";
import { useRecordStore } from "../../zustand/useRecordStore";

const HomePage = () => {
    const { records } = useRecordStore();

    return (
        <div className="flex flex-col h-200 w-full overflow-y-scroll ">
            <Hero recordCount={records.length} />
            <RecordList list={records} />
        </div>
    );
};

export default HomePage;
