import { useCallback, useState } from "react";
import { useRecordStore } from "../../zustand/useRecordStore";

const AddPage = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(1);
    const [date, setDate] = useState<Date>(new Date());
    const { addRecord } = useRecordStore();

    const handleAddBtn = useCallback(() => {
        addRecord({ title, author, count: 1, dates: [date.toString()] });
    }, [title, author, date, addRecord]);

    return (
        <div className="w-full h-200">
            <div className="grid grid-cols-2 w-full h-175 text-white/90">
                <div className="flex flex-col px-4 py-10 gap-20 justify-center">
                    <input
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400"
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400"
                        type="text"
                        placeholder="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <textarea
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400 resize-none"
                        placeholder="comment"
                        rows={8}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-start gap-40 px-4 py-10">
                    <div className="flex justify-center mx-auto mt-20 px-12 py-4 rounded-md bg-lime-400 text-black">
                        <input
                            className="text-3xl"
                            type="date"
                            value={`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
                            onChange={(e) => {
                                setDate(new Date(e.target.value));
                            }}
                        />
                    </div>
                    <div
                        className="flex flex-col justify-center items-center gap-4 mx-auto w-75 p-4 bg-lime-500 text-black text-2xl rounded-md"
                        title="Rating"
                    >
                        <p>{rating}</p>
                        <input
                            className="w-50 accent-amber-400"
                            type="range"
                            min={1}
                            max={5}
                            step={0.1}
                            value={rating}
                            onChange={(e) => {
                                setRating(Number(e.target.value));
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center w-full h-25 px-20 border-t-2 border-lime-600">
                <button className="grid place-items-center w-30 p-2 bg-transparent hover:bg-orange-600 rounded-xl hover:rounded-md text-2xl hover:text-3xl text-white/80 hover:text-black duration-200 cursor-pointer">
                    cancel
                </button>
                <button
                    className="grid place-items-center w-30 p-2 bg-transparent hover:bg-lime-400/80 rounded-xl hover:rounded-md text-2xl hover:text-3xl text-lime-400 hover:text-black duration-200 cursor-pointer"
                    onClick={handleAddBtn}
                >
                    submit
                </button>
            </div>
        </div>
    );
};

export default AddPage;
