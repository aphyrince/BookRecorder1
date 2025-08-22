import React, { useCallback, useState } from "react";
import type { Record } from "./global";

const AddModal = ({
    onAddRecord,
}: {
    onAddRecord: (newRecord: Record) => void;
}) => {
    const [isModalActive, setModalActive] = useState(false);
    const [form, setForm] = useState<Record>({
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

    return (
        <section id="add_section">
            <button
                className={isModalActive ? "non_active" : ""}
                onClick={() => setModalActive(true)}
            >
                추가
            </button>
            <div
                className={isModalActive ? "" : "non_active"}
                id="add_section_modal"
            >
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
                <button
                    onClick={() => {
                        onAddRecord(form);
                        setModalActive(false);
                        setForm({
                            title: "",
                            author: "",
                            date: "",
                            source: "",
                            count: 1,
                        });
                    }}
                >
                    추가
                </button>
            </div>
        </section>
    );
};

export default AddModal;
