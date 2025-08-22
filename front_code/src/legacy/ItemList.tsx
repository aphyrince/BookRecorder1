import { useState } from "react";
import type { Record } from "../global";
import "./ItemListStyle.css";

const RecordItem = ({
    record,
    isSelected,
    onClick,
}: {
    record: Record;
    isSelected: boolean;
    onClick: () => void;
}) => {
    const { title, author, date, source, count } = record;

    return (
        <tr
            className={`item ${isSelected ? "selected" : ""}`}
            onClick={onClick}
        >
            <td>{title}</td>
            <td>{author}</td>
            <td>{date}</td>
            <td>{source}</td>
            <td>{count}</td>
            <div className={`actions ${isSelected ? "show" : ""}`}>
                <button className="edit-btn">수정</button>
                <button className="delete-btn">삭제</button>
            </div>
        </tr>
    );
};

const ItemList = ({ recordList }: { recordList: Record[] }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="list_section">
            <table>
                <thead id="list_section_head">
                    <th>제목</th>
                    <th>저자</th>
                    <th>날짜</th>
                    <th>출처</th>
                    <th>읽은 횟수</th>
                </thead>
                <tbody id="list_section_body">
                    {recordList.map((record, idx) => (
                        <RecordItem
                            key={idx}
                            record={record}
                            isSelected={selectedId === idx}
                            onClick={() =>
                                setSelectedId(selectedId === idx ? null : idx)
                            }
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ItemList;
