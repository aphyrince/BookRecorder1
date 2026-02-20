import React, { useCallback, useState } from "react";
import { useRecordStore, type RECORD_TYPE } from "../../zustand/useRecordStore";
import Swal from "sweetalert2";
import { ChevronDown, ChevronUp } from "lucide-react";

const RecordList = ({ list }: { list: RECORD_TYPE[] }) => {
    const { removeRecord } = useRecordStore();
    const [optionNum, setOptionNum] = useState(-1);
    const [isEdit, setIsEdit] = useState(false);
    const [tempItem, setTempItem] = useState<RECORD_TYPE>({
        id: "-1",
        title: "",
        author: "",
        count: 1,
        dates: [],
    });

    const handleTempChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setTempItem((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        },
        [],
    );

    const handleEditClick = useCallback((item: RECORD_TYPE) => {
        setTempItem({ ...item });
        setIsEdit(true);
    }, []);

    const handleElemClick = useCallback(
        (index: number) => {
            if (optionNum === index && isEdit) {
                return;
            } else if (optionNum === index) {
                setOptionNum(-1);
                setIsEdit(false);
            } else {
                setOptionNum(index);
                setIsEdit(false);
            }
        },
        [optionNum, isEdit],
    );

    const handleCount = useCallback((addNum: number) => {
        setTempItem((prev) => ({ ...prev, count: prev.count + addNum }));
    }, []);

    const showAlert = (item: RECORD_TYPE) => {
        Swal.fire({
            title: "정말 삭제하시겠습니까?",
            text: "삭제 후에는 복구할 수 없습니다!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "삭제",
            cancelButtonText: "취소",
        }).then((result) => {
            if (result.isConfirmed) {
                removeRecord(item);
                setOptionNum(-1);
                // 확인 클릭 시 실행
                Swal.fire(
                    "삭제됨!",
                    "파일이 정상적으로 삭제되었습니다.",
                    "success",
                );
            }
        });
    };

    return (
        <ul className="flex flex-col flex-1 w-full p-4 text-white">
            <li className="grid grid-cols-4 w-full py-4 text-2xl text-lime-500 border-b-4">
                <p>Title</p>
                <p>Author</p>
                <p>Count</p>
                <p>Dates</p>
            </li>
            {list.map((item, index) => (
                <li
                    className="grid grid-cols-4 w-full py-4 pl-2 border-b-2 border-lime-400 duration-200"
                    style={{
                        background:
                            isEdit && optionNum === index
                                ? "rgb(245 158 11 / 0.8)"
                                : "transparent",
                    }}
                    onClick={() => handleElemClick(index)}
                >
                    {isEdit && optionNum === index ? (
                        <input
                            type="text"
                            name="title"
                            value={tempItem.title}
                            onChange={handleTempChange}
                        />
                    ) : (
                        <p className="text-ellipsis">{item.title}</p>
                    )}
                    {isEdit && optionNum === index ? (
                        <input
                            type="text"
                            name="author"
                            value={tempItem.author}
                            onChange={handleTempChange}
                        />
                    ) : (
                        <p className="text-ellipsis">{item.author}</p>
                    )}
                    {isEdit && optionNum === index ? (
                        <div className="flex justify-start items-center gap-4 mr-auto rounded-xl">
                            <ChevronDown
                                size={30}
                                strokeWidth={3}
                                onClick={() => handleCount(-1)}
                                className=" text-black/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-amber-700/50 duration-200 rounded-xl"
                            />
                            <p className="flex justify-center w-4 items-center select-none">
                                {tempItem.count}
                            </p>
                            <ChevronUp
                                size={30}
                                strokeWidth={3}
                                className=" text-black/60 hover:text-white/90 bg-transparent hover:bg-white/10 active:bg-amber-700/50 duration-200 rounded-xl"
                                onClick={() => handleCount(1)}
                            />
                        </div>
                    ) : (
                        <p>{item.count}</p>
                    )}

                    {isEdit && optionNum === index ? (
                        <ul>
                            {tempItem.dates.map((date) => (
                                <input
                                    type="date"
                                    value={`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
                                    onChange={handleTempChange}
                                />
                            ))}
                        </ul>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {item.dates.map((date) => (
                                <li className="not-last:border-b not-last:pb-2 border-lime-200">
                                    {`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div
                        className="col-span-4 grid w-full overflow-hidden duration-200"
                        style={{
                            gridTemplateRows:
                                optionNum === index ? "1fr" : "0fr",
                        }}
                    >
                        <div className="grid grid-cols-4 overflow-hidden">
                            <div className="col-span-3 text-white/60">
                                <p className="text-lime-400/80">comment : </p>
                                {isEdit && optionNum === index ? (
                                    <textarea className="w-full mt-2 resize-none" />
                                ) : (
                                    <p>
                                        lorem ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....lorem
                                        ipsum....lorem ipsum....
                                    </p>
                                )}
                            </div>
                            <div
                                className="flex justify-evenly gap-4 p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <button
                                    className="mb-auto py-2 px-4 text-lg hover:text-xl text-lime-400 hover:text-white/80 bg-transparent hover:bg-lime-600 duration-200 rounded-md cursor-pointer"
                                    onClick={() => {
                                        handleEditClick(item);
                                    }}
                                >
                                    edit
                                </button>
                                <button
                                    className="mb-auto py-2 px-4 text-lg hover:text-xl text-red-400 hover:text-white/80 bg-transparent hover:bg-red-600 duration-200 rounded-md cursor-pointer"
                                    onClick={() => showAlert(item)}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default RecordList;
