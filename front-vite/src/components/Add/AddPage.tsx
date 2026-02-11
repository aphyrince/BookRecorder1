import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AddPage = () => {
    const [count, setCount] = useState(0);

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
                <div className="flex flex-col px-4 py-10 gap-20">
                    <input
                        className="flex justify-center items-center mx-auto px-8 py-4 bg-lime-500 text-black text-xl rounded-xl "
                        type="date"
                        defaultValue={new Date().toString()}
                    />
                    <div className="flex justify-center items-center gap-10 mx-auto bg-lime-600 rounded-xl overflow-hidden">
                        <ChevronDown
                            size={48}
                            strokeWidth={3}
                            onClick={() => {
                                setCount((prev) =>
                                    prev - 1 < 0 ? 0 : prev - 1,
                                );
                            }}
                            className="text-white/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-lime-300/50 duration-200"
                        />
                        <p className="flex justify-center items-center w-5 text-3xl select-none">
                            {count}
                        </p>
                        <ChevronUp
                            size={48}
                            strokeWidth={3}
                            className="text-white/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-lime-300/50 duration-200"
                            onClick={() => {
                                setCount((prev) => prev + 1);
                            }}
                        />
                    </div>
                    <div
                        className="size-80 mx-auto ring-2 ring-lime-400 rounded-4xl"
                        title="Rating"
                    >
                        rating
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center w-full h-25 px-20 border-t-2 border-lime-600">
                <button className="grid place-items-center w-30 p-2 bg-transparent hover:bg-lime-400/80 rounded-xl hover:rounded-md text-2xl hover:text-3xl text-white/70 hover:text-black duration-200 cursor-pointer">
                    submit
                </button>
            </div>
        </div>
    );
};

export default AddPage;
