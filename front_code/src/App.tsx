import { useCallback, useEffect, useState } from "react";
import "./style/style.css";
import AddModal from "./AddModal";
import type { Record } from "./global";
import RecordList from "./RecordList";

function App() {
    const [recordList, setRecordList] = useState<Record[]>([]);

    useEffect(() => {
        setRecordList([
            {
                id: "1",
                title: "title",
                author: "author1",
                date: "00-00-00",
                source: "source1",
                count: 1,
            },
            {
                id: "2",
                title: "title2",
                author: "author12",
                date: "00-00-1",
                source: "source2",
                count: 2,
            },
            {
                id: "3",
                title: "title3",
                author: "author13",
                date: "00-00-2",
                source: "source3",
                count: 2,
            },
            {
                id: "4",
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
                <ul className="record-list-columns">
                    <li>제목</li>
                    <li>저자</li>
                    <li>날짜</li>
                    <li>출처</li>
                    <li>읽은 횟수</li>
                </ul>
                <AddModal onAddRecord={onAddRecord} />
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
