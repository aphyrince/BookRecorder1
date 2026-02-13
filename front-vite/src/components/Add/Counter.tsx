import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);
    const [dates, setDates] = useState<Date[]>([new Date()]);

    const handleCountUp = useCallback(() => {
        setCount((prev) => prev + 1);
        setDates((prev) => [...prev, new Date()]);
    }, []);

    const handleCountDown = useCallback(() => {
        if (count <= 1) return;
        setCount((prev) => prev - 1);
        setDates((prev) => [...prev.slice(0, prev.length - 1)]);
    }, [count]);

    return (
        <div className="flex items-start h-60 px-4 gap-8">
            <div className="flex flex-col justify-center items-center gap-4  bg-lime-600 rounded-xl overflow-hidden">
                <ChevronUp
                    size={48}
                    strokeWidth={3}
                    className="text-white/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-lime-300/50 duration-200"
                    onClick={handleCountUp}
                />
                <p className="flex justify-center items-center w-5 text-3xl select-none">
                    {count}
                </p>
                <ChevronDown
                    size={48}
                    strokeWidth={3}
                    onClick={handleCountDown}
                    className="text-white/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-lime-300/50 duration-200"
                />
            </div>
            <div className="flex-1 flex flex-col justify-start gap-2 h-40 overflow-scroll">
                {dates.map((elem, index) => (
                    <input
                        key={elem.toString()}
                        className="flex justify-center items-center text-white/80 text-2xl border-l-4 border-lime-400"
                        type="date"
                        value={`${elem.getFullYear()}-${(elem.getMonth() + 1).toString().padStart(2, "0")}-${elem.getDate().toString().padStart(2, "0")}`}
                        onChange={(e) => {
                            const newDates = dates.map((date, dateIdx) =>
                                dateIdx !== index
                                    ? date
                                    : new Date(e.target.value),
                            );
                            setDates(newDates);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Counter;
