import { useState } from "react";
import { useRecordStore, type RECORD_TYPE } from "../../zustand/useRecordStore";
import Swal from "sweetalert2";

const RecordList = ({ list }: { list: RECORD_TYPE[] }) => {
    const { removeRecord } = useRecordStore();

    const [optionNum, setOptionNum] = useState(-1);
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
            <li className="grid grid-cols-4 w-full py-4 mb-4 text-2xl text-lime-500 border-b-4">
                <p>Title</p>
                <p>Author</p>
                <p>Count</p>
                <p>Dates</p>
            </li>
            {list.map((item, index) => (
                <li
                    className="grid grid-cols-4 w-full py-2 mb-2 border-b-2 border-lime-400 duration-200"
                    onClick={() => {
                        if (optionNum == index) {
                            setOptionNum(-1);
                            return;
                        }
                        setOptionNum(index);
                    }}
                >
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
                    <div
                        className="col-span-4 grid w-full overflow-hidden duration-200"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        style={{
                            gridTemplateRows:
                                optionNum === index ? "1fr" : "0fr",
                        }}
                    >
                        <div className="grid grid-cols-4 overflow-hidden">
                            <div className="col-span-3 text-white/60">
                                <p className="text-lime-400/80">comment : </p>
                                <p>
                                    lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....lorem ipsum....lorem ipsum....lorem
                                    ipsum....
                                </p>
                            </div>
                            <div className="flex justify-evenly gap-4 p-2">
                                <button className="mb-auto py-2 px-4 text-lg hover:text-xl text-lime-400 hover:text-white/80 bg-transparent hover:bg-lime-600 duration-200 rounded-md cursor-pointer">
                                    modify
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
