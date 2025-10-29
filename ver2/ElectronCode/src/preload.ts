//const { contextBridge, ipcRenderer  } = require("electron");
import { contextBridge, ipcRenderer } from "electron";

interface Record {
    title: string;
    author: string;
    date: string;
    source: string;
    count: number;
}

contextBridge.exposeInMainWorld("preloadRecord", {
    getRecords: (): Promise<Record[]> => ipcRenderer.invoke("getRecords"),
    setRecords: (newRecord: Record[]) => {
        ipcRenderer.invoke("setRecords", newRecord);
    },
});
