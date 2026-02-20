import type { RECORD_TYPE } from "../zustand/useRecordStore";

export function createRecordObj(
    id: string,
    title: string,
    author: string,
    count: number,
    dates: Date[],
): RECORD_TYPE {
    return { id, title, author, count, dates };
}

export const dummyRecords: RECORD_TYPE[] = [
    createRecordObj("111", "책1", "저자1", 1, [new Date()]),
    createRecordObj("222", "책2", "저자2", 3, [
        new Date(3123),
        new Date(223),
        new Date(12),
    ]),
    createRecordObj("333", "책3", "저자3", 1, [new Date(3214453543)]),
    createRecordObj("444", "책4", "저자4", 1, [new Date(76865)]),
    createRecordObj("454", "책5", "저자4", 1, [new Date(76865)]),
    createRecordObj("464", "책6", "저자4", 1, [new Date(76865)]),
    createRecordObj("474", "책7", "저자4", 1, [new Date(76865)]),
    createRecordObj("484", "책8", "저자4", 1, [new Date(76865)]),
    createRecordObj("44409", "책9", "저자4", 1, [new Date(76865)]),
    createRecordObj("1231", "책10", "저자4", 1, [new Date(76865)]),
];
