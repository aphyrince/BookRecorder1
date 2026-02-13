import { useState } from "react";
import Counter from "./Counter";

const AddPage = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [count, setCount] = useState(1);
    const [dates, setDates] = useState<Date[]>([]);

    return (
        <div className="w-full h-200">
            <div className="grid grid-cols-2 w-full h-175 text-white/90">
                <div className="flex flex-col px-4 py-10 gap-20 justify-center">
                    <input
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400"
                        type="text"
                        placeholder="title"
                    />
                    <input
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400"
                        type="text"
                        placeholder="author"
                    />
                    <textarea
                        className="w-full p-4 text-3xl rounded-xl ring-2 ring-lime-400"
                        placeholder="comment"
                        rows={8}
                    />
                </div>
                <div className="flex flex-col justify-between gap-10 px-4 py-10">
                    <Counter />
                    <div
                        className="grid place-items-center size-80 mx-auto ring-2 ring-lime-400 rounded-full"
                        title="Rating"
                    >
                        rating
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center w-full h-25 px-20 border-t-2 border-lime-600">
                <button className="grid place-items-center w-30 p-2 bg-transparent hover:bg-orange-600 rounded-xl hover:rounded-md text-2xl hover:text-3xl text-white/80 hover:text-black duration-200 cursor-pointer">
                    cancel
                </button>
                <button className="grid place-items-center w-30 p-2 bg-transparent hover:bg-lime-400/80 rounded-xl hover:rounded-md text-2xl hover:text-3xl text-lime-400 hover:text-black duration-200 cursor-pointer">
                    submit
                </button>
            </div>
        </div>
    );
};

export default AddPage;
