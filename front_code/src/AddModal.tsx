import React, { useCallback, useState } from "react";
import type { Record } from "./global";
import "./style/AddModalStyle.css";

const AddModal = ({
    onAddRecord,
}: {
    onAddRecord: (newRecord: Record) => void;
}) => {
    const [isModalActive, setModalActive] = useState(false);
    const [form, setForm] = useState<Record>({
        id: "",
        title: "",
        author: "",
        date: "",
        source: "",
        count: 1,
    });

    const onFormChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setForm((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleCancel = () => {
        setModalActive(false);
        cleanForm();
    };

    const handleSubmit = () => {
        onAddRecord(form);
        cleanForm();
    };

    const cleanForm = () => {
        setModalActive(false);
        setForm({
            id: Date.now().toString(),
            title: "",
            author: "",
            date: "",
            source: "",
            count: 1,
        });
    };

    return (
        <section className="add_section">
            {isModalActive ? (
                <div className="modal">
                    <input
                        name="title"
                        type="text"
                        placeholder="제목"
                        value={form.title}
                        onChange={onFormChange}
                    />
                    <input
                        name="author"
                        type="text"
                        placeholder="저자"
                        value={form.author}
                        onChange={onFormChange}
                    />
                    <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={onFormChange}
                    />
                    <input
                        name="source"
                        type="text"
                        placeholder="출처"
                        value={form.source}
                        onChange={onFormChange}
                    />
                    <input
                        name="count"
                        type="number"
                        placeholder="1"
                        value={form.count}
                        onChange={onFormChange}
                    />
                    <button className="canceler" onClick={handleCancel}>
                        취소
                    </button>
                    <button className="adder" onClick={handleSubmit}>
                        추가
                    </button>
                </div>
            ) : (
                <button
                    className="activator"
                    onClick={() => setModalActive(true)}
                >
                    +
                </button>
            )}
        </section>
    );
};

export default AddModal;
