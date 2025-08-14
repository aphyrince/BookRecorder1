//const { contextBridge, ipcRenderer  } = require("electron");
import { contextBridge, ipcRenderer } from "electron";

interface Record {
    title: string;
    author: string;
    date: string;
    source: string;
    count: number;
}

const dummyList: Record[] = [
    {
        title: "빅토리",
        author: "~!",
        date: "2025-05-25",
        source: "지구",
        count: 1,
    },
    {
        title: "아마데우스",
        author: "최",
        date: "2025-07-2",
        source: "한국",
        count: 2,
    },
];

contextBridge.exposeInMainWorld("preloadRecord", {
    // getRecords: () => dummyList,
    // setRecords: (newRecord: Record[]) => {
    //     console.log(newRecord);
    // },
    getRecords: (): Promise<Record[]> => ipcRenderer.invoke("getRecords"),
    setRecords: (newRecord: Record[]) => {
        ipcRenderer.invoke("setRecords", newRecord);
    },
});
