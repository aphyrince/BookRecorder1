const { contextBridge, ipcRenderer } = require("electron");
// import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("preloadRecord", {
    getRecords: () => ipcRenderer.invoke("getRecords"),
    setRecords: (newRecord) => {
        ipcRenderer.invoke("setRecords", newRecord);
    },
});
//# sourceMappingURL=preload.js.map
