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
    createRecordObj("454", "책5", "저자4", 1, [new Date(76865).toString()]),
    createRecordObj("464", "책6", "저자4", 1, [new Date(76865).toString()]),
    createRecordObj("474", "책7", "저자4", 1, [new Date(76865).toString()]),
    createRecordObj("484", "책8", "저자4", 1, [new Date(76865).toString()]),
    createRecordObj("44409", "책9", "저자4", 1, [new Date(76865).toString()]),
    createRecordObj("1231", "책10", "저자4", 1, [new Date(76865).toString()]),
];
