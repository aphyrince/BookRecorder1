import { create } from "zustand";
import { dummyRecords } from "../tmpDatas/dummyRecordList";

export interface RECORD_NO_ID_TYPE {
    title: string;
    author: string;
    count: number;
    comment: string;
    dates: Date[];
}

export interface RECORD_TYPE extends RECORD_NO_ID_TYPE {
    id: string;
}

export const RECORD_KEYS = ["title", "author", "count", "dates"];

interface RECORD_STORE {
    records: RECORD_TYPE[];
    addRecord: (record: RECORD_NO_ID_TYPE) => void;
    editRecord: (record: RECORD_TYPE) => void;
    removeRecord: (record: RECORD_TYPE) => void;
}

export const useRecordStore = create<RECORD_STORE>((set) => ({
    records: dummyRecords,
    addRecord: (record: RECORD_NO_ID_TYPE) => {
        set((state) => addSetter(state, record));
    },
    editRecord: (record: RECORD_TYPE) => {
        set((state) => editSetter(state, record));
    },
    removeRecord: (record: RECORD_TYPE) => {
        set((state) => removeSetter(state, record));
    },
}));

function addSetter(state: RECORD_STORE, record: RECORD_NO_ID_TYPE) {
    const id = new Date().toString();
    return { records: [...state.records, { id, ...record }] };
}

function editSetter(state: RECORD_STORE, record: RECORD_TYPE) {
    return {
        records: [
            ...state.records.map((elem) =>
                elem.id === record.id ? record : elem,
            ),
        ],
    };
}

function removeSetter(state: RECORD_STORE, record: RECORD_TYPE) {
    return {
        records: [...state.records.filter((elem) => elem.id !== record.id)],
    };
}
