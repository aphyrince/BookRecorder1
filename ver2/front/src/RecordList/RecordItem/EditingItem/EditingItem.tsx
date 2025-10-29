import { Record } from "../../../global";
import "./EditingItem.css";

const EditingItem = ({
    tempRecord,
    handleChange,
    handleKeyDown,
    handleSave,
    onDelete,
}: {
    tempRecord: Record;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    onDelete: () => void;
}) => {
    return (
        <div className="editing-item">
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
                    name="count"
                    type="number"
                    value={tempRecord.count}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="controls">
                <button className="save" onClick={handleSave}>
                    저장
                </button>
                <button className="delete" onClick={onDelete}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default EditingItem;
