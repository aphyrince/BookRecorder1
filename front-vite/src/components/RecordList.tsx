import type { RECORD_TYPE } from "../types/recordType";

const RecordList = ({ list }: { list: RECORD_TYPE[] }) => {
    return (
        <ul className="flex flex-col w-full bg-lime-200">
            {list.map((item) => (
                <li className="flex items-center justify-between">
                    <p>{item.title}</p>
                    <p>{item.author}</p>
                    <p>{item.count}</p>
                    <ul>
                        {item.dates.map((date) => (
                            <li>{date}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default RecordList;
