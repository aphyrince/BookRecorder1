import type { RECORD_TYPE } from "../zustand/useRecordStore";

export function createRecordObj(
    id: string,
    title: string,
    author: string,
    count: number,
    dates: string[],
): RECORD_TYPE {
    return { id, title, author, count, dates };
}

export const dummyRecords: RECORD_TYPE[] = [
    createRecordObj("111", "책1", "저자1", 1, [new Date().toString()]),
    createRecordObj("222", "책2", "저자2", 3, [
        new Date(3123).toString(),
        new Date(223).toString(),
        new Date(12).toString(),
    ]),
    createRecordObj("333", "책3", "저자3", 1, [
        new Date(3214453543).toString(),
    ]),
    createRecordObj("444", "책4", "저자4", 1, [new Date(76865).toString()]),
];
