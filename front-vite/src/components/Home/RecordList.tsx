import type { RECORD_TYPE } from "../../zustand/useRecordStore";

const RecordList = ({ list }: { list: RECORD_TYPE[] }) => {
    return (
        <ul className="flex flex-col flex-1 w-full p-4 text-white">
            <li className="grid grid-cols-4 w-full py-4 mb-4 text-2xl text-lime-500 border-b-4">
                <p>Title</p>
                <p>Author</p>
                <p>Count</p>
                <p>Dates</p>
            </li>
            {list.map((item) => (
                <li className="grid grid-cols-4 w-full py-2 mb-2 border-b-2 border-lime-400">
                    <p className="text-ellipsis">{item.title}</p>
                    <p>{item.author}</p>
                    <p>{item.count}</p>
                    <ul className="flex flex-col gap-2">
                        {item.dates.map((date) => (
                            <li className="not-last:border-b not-last:pb-2 border-lime-200">
                                {date}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default RecordList;
