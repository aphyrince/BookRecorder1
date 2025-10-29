import { useState } from "react";
import { Record } from "../global";
import "./RecordListStyle.css";
import { RecordItem } from "./RecordItem/RecordItem";

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
