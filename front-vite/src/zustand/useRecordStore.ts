import { create } from "zustand";
import { dummyRecords } from "../tmpDatas/recordList";

export interface RECORD_TYPE {
    id: string;
    title: string;
    author: string;
    count: number;
    dates: string[];
}

export const RECORD_KEYS = ["title", "author", "count", "dates"];

interface RECORD_STORE {
    records: RECORD_TYPE[];
    addRecord: (record: RECORD_TYPE) => void;
    modifyRecord: (record: RECORD_TYPE) => void;
    removeRecord: (record: RECORD_TYPE) => void;
}

export const useRecordStore = create<RECORD_STORE>((set) => ({
    records: dummyRecords,
    addRecord: (record: RECORD_TYPE) => {
        set((state) => ({ records: [...state.records, record] }));
    },
    modifyRecord: (record: RECORD_TYPE) => {
        set((state) => ({
            records: [
                ...state.records.map((elem) =>
                    elem.id === record.id ? record : elem,
                ),
            ],
        }));
    },
    removeRecord: (record: RECORD_TYPE) => {
        set((state) => ({
            records: [...state.records.filter((elem) => elem.id !== record.id)],
        }));
    },
}));
