import { useState } from "react";
import { Record } from "../../../global";
import "./ShowingItem.css";

const ShowingItem = ({
    record,
    onStartEdit,
    onDelete,
}: {
    record: Record;
    onDelete: () => void;
    onStartEdit: () => void;
}) => {
    const [isClick, setIsClick] = useState<boolean>(true);
    const handleClick = () => {
        setIsClick((prev) => !prev);
    };

    return (
        <div className="showing-item">
            <div className="item" onClick={handleClick}>
                <span>{record.title}</span>
                <span>{record.author}</span>
                <span>{record.date}</span>
                <span>{record.count}</span>
            </div>
            <div className={`controls ${isClick || "active"}`}>
                <button className="edit" onClick={onStartEdit}>
                    수정
                </button>
                <button className="delete" onClick={onDelete}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default ShowingItem;
