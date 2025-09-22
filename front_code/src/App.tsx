import "./AppStyle.css";
import AddModal from "./AddModal/AddModal";
import RecordList from "./RecordList/RecordList";
import { useRecords } from "./api/useRecords";

function App() {
    const { recordList, loading, error, addRecord, editRecord, deleteRecord } =
        useRecords();

    if (loading) return <p>로딩 중...</p>;
    // if (error) return <p>에러 발생!</p>;

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
                    <li>읽은 횟수</li>
                </ul>
                <AddModal onAddRecord={addRecord} />
                <RecordList
                    recordList={recordList}
                    onDelete={deleteRecord}
                    onEdit={editRecord}
                />
            </main>
        </div>
    );
}

export default App;
