// global.d.ts

export interface Record {
    title: string;
    author: string;
    date: string;
    source: string;
    count: number;
}

export interface PreloadRecordAPI {
    getRecords: () => Record[];
    setRecords: (newRecord: Record[]) => void;
}

declare global {
    interface Window {
        preloadRecord: PreloadRecordAPI; // 타입을 정확히 알면 any 대신 지정해도 좋아요
    }
}
