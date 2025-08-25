import React, { useState } from "react";
import { Record } from "./global";
import "./style/RecordListStyle.css";

const RecordItem = ({
    record,
    isEditing,
    onSave,
    onStartEdit,
    onDelete,
}: {
    record: Record;
    isEditing: boolean;
    onStartEdit: () => void;
    onSave: (editedRecord: Record) => void;
    onDelete: () => void;
}) => {
    const [tempRecord, setTempRecord] = useState<Record>(record);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempRecord({
            ...tempRecord,
            [e.target.name]:
                e.target.name === "count"
                    ? Number(e.target.value)
                    : e.target.value,
        });
    };

    const handleSave = () => {
        onSave(tempRecord);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSave();
        } else if (e.key === "Escape") {
            setTempRecord(record); // 원래 값 복원
        }
    };

    return (
        <li
            className={`record-item ${isEditing ? "editing" : ""}`}
            onDoubleClick={onStartEdit}
        >
            {isEditing ? (
                <>
                    <div className="inputs">
                        <input
                            name="title"
                            value={tempRecord.title}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <input
                            name="author"
                            value={tempRecord.author}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <input
                            name="date"
                            type="date"
                            value={tempRecord.date}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <input
                            name="source"
                            value={tempRecord.source}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <input
                            name="count"
                            type="number"
                            value={tempRecord.count}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="edit-controls">
                        <button className="save-btn" onClick={handleSave}>
                            저장
                        </button>
                        <button className="delete-btn" onClick={onDelete}>
                            X
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span>{record.title}</span>
                    <span>{record.author}</span>
                    <span>{record.date}</span>
                    <span>{record.source}</span>
                    <span>{record.count}</span>
                </>
            )}
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
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    return (
        <section id="record-list">
            <ul className="list-body">
                {recordList.map((record, idx) => (
                    <RecordItem
                        key={record.id}
                        record={record}
                        isEditing={editingIndex === idx}
                        onStartEdit={() => setEditingIndex(idx)}
                        onSave={(editedRecord: Record) => {
                            const newRecordList = [...recordList];
                            newRecordList[idx] = editedRecord;
                            onEdit(newRecordList);
                            setEditingIndex(null); // 저장 후 수정 모드 해제
                        }}
                        onDelete={() => {
                            const newRecordList = recordList.filter(
                                (_, i) => i !== idx
                            );
                            onDelete(newRecordList);
                            setEditingIndex(null);
                        }}
                    />
                ))}
            </ul>
        </section>
    );
};

export default RecordList;
