import { useCallback, useState } from "react";
import { Record } from "./global";
import "./style/RecordListStyle.css";

const RecordItem = ({
    record,
    onEdit,
    onDelete,
}: {
    record: Record;
    onEdit: (editedRecord: Record) => void;
    onDelete: () => void;
}) => {
    const [isOption, setOption] = useState(false);
    const { title, author, date, source, count } = record;
    const onClick = useCallback(() => {
        setOption((prev) => !prev);
    }, []);
    const onEditBtnClick = useCallback(() => {
        const editedRecord: Record = {
            title: title + "+",
            author: author + "+",
            date: date + "1",
            source: source + "+",
            count: count + 1,
        };
        onEdit(editedRecord);
    }, []);

    return (
        <li className="record-item" onClick={onClick}>
            <span>{title}</span>
            <span>{author}</span>
            <span>{date}</span>
            <span>{source}</span>
            <span>{count}</span>
            <div className={`record-item-controls ${isOption ? "option" : ""}`}>
                <button className="edit-btn" onClick={onEditBtnClick}>
                    ···
                </button>
                <button className="delete-btn" onClick={onDelete}>
                    X
                </button>
            </div>
        </li>
    );
};

const RecordList = ({
    recordList,
    onEdit,
    onDelete,
}: {
    recordList: Record[];
    onEdit: (newRecordList: Record[]) => void;
    onDelete: (newRecordList: Record[]) => void;
}) => {
    return (
        <section id="record-list">
            <ul className="record-list-columns">
                <li>제목</li>
                <li>저자</li>
                <li>날짜</li>
                <li>출처</li>
                <li>읽은 횟수</li>
            </ul>
            <ul className="list-body">
                {recordList.map((record, idx) => (
                    <RecordItem
                        key={idx}
                        record={record}
                        onEdit={(editedRecord: Record) => {
                            recordList[idx] = editedRecord;
                            const newRecordList = [...recordList];
                            onEdit(newRecordList);
                        }}
                        onDelete={() => {
                            const newRecordList = [...recordList.splice(idx)];
                            onDelete(newRecordList);
                        }}
                    />
                ))}
            </ul>
        </section>
    );
};

export default RecordList;
