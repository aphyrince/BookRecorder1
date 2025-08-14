const { contextBridge, ipcRenderer } = require("electron");
// import { contextBridge, ipcRenderer } from "electron";
const dummyList = [
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
    getRecords: () => ipcRenderer.invoke("getRecords"),
    setRecords: (newRecord) => {
        ipcRenderer.invoke("setRecords", newRecord);
    },
});
//# sourceMappingURL=preload.js.map
