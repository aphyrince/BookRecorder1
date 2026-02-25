import type { RECORD_TYPE } from "../zustand/useRecordStore";

export function createRecordObj(
    id: string,
    title: string,
    author: string,
    count: number,
    dates: Date[],
    comment: string,
): RECORD_TYPE {
    return { id, title, author, count, dates, comment };
}

export const dummyRecords: RECORD_TYPE[] = [
    createRecordObj(
        "111",
        "책1",
        "저자1",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "222",
        "책2",
        "저자2",
        3,
        [new Date(), new Date(), new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "333",
        "책3",
        "저자3",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "444",
        "책4",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "454",
        "책5",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "464",
        "책6",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "474",
        "책7",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "484",
        "책8",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "44409",
        "책9",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
    createRecordObj(
        "1231",
        "책10",
        "저자4",
        1,
        [new Date()],
        "lorem ipsum....lorem ipsum....lorem ipsum....lorem ipsum....",
    ),
];
