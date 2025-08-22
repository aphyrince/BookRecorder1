import { useCallback, useEffect, useState } from "react";
import "./style/style.css";
import AddModal from "./AddModal";
import type { Record } from "./global";
import ItemList from "./legacy/ItemList";
import RecordList from "./RecordList";

function App() {
    const [recordList, setRecordList] = useState<Record[]>([]);

    useEffect(() => {
        setRecordList([
            {
                title: "title",
                author: "author1",
                date: "00-00-00",
                source: "source1",
                count: 1,
            },
            {
                title: "title2",
                author: "author12",
                date: "00-00-1",
                source: "source2",
                count: 2,
            },
            {
                title: "title3",
                author: "author13",
                date: "00-00-2",
                source: "source3",
                count: 2,
            },
            {
                title: "title4",
                author: "author14",
                date: "00-00-0330",
                source: "source4",
                count: 3,
            },
        ]);
        // const fetchData = async () => {
        //     const records = await window.preloadRecord.getRecords();
        //     setRecordList(records);
        // };
        // fetchData();
    }, []);

    const postData = (newRecordList: Record[]) => {
        // window.preloadRecord.setRecords(newRecordList);
        console.log("postData...!");
        console.log("payload : ", newRecordList);
    };

    const onAddRecord = useCallback((newRecord: Record) => {
        setRecordList((prev) => {
            const updatedList = [newRecord, ...prev];
            postData(updatedList);
            return updatedList;
        });
    }, []);
    const onEditRecord = useCallback((newRecordList: Record[]) => {
        setRecordList(() => {
            postData(newRecordList);
            return newRecordList;
        });
    }, []);
    const onDeleteRecord = useCallback((newRecordList: Record[]) => {
        setRecordList(() => {
            postData(newRecordList);
            return newRecordList;
        });
    }, []);

    return (
        <div>
            <header>
                <h1>독서 기록기</h1>
                <h3>읽은 권 수 : {recordList.length}</h3>
            </header>
            <main>
                <AddModal onAddRecord={onAddRecord} />
                {/* <ItemList recordList={recordList} /> */}
                <RecordList
                    recordList={recordList}
                    onDelete={onDeleteRecord}
                    onEdit={onEditRecord}
                />
            </main>
        </div>
    );
}

export default App;
