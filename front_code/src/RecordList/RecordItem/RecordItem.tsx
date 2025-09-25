import { useState } from "react";
import { Record } from "../../global";
import "./RecordItemStyle.css";
import ShowingItem from "./ShowingItem/ShowingItem";
import EditingItem from "./EditingItem/EditingItem";

export const RecordItem = ({
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
        <li className="record-item">
            {isEditing ? (
                <EditingItem
                    tempRecord={tempRecord}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                    handleSave={handleSave}
                    onDelete={onDelete}
                />
            ) : (
                <ShowingItem
                    record={record}
                    onStartEdit={onStartEdit}
                    onDelete={onDelete}
                />
            )}
        </li>
    );
};
