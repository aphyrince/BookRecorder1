import { app, BrowserWindow, ipcMain } from "electron";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { readCSV } from "./api/readCSV.js";
import { raw2Record } from "./api/raw2Record.js";
import { record2Raw } from "./api/record2Raw.js";
import { writeCSV } from "./api/writeCSV.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataFilePath = path.join(app.getPath("userData"), "BookRecords.csv");
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    win.loadFile(path.join(__dirname, "..", "front_code", "build", "index.html"));
    // win.webContents.openDevTools();
};
app.whenReady().then(() => {
    // 초기 CSV 파일이 없으면 생성
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, "title,author,date,source,count\n", "utf-8");
    }
    ipcMain.handle("getRecords", () => {
        const rawString = readCSV(dataFilePath);
        const recordList = rawString.split("\n").map(raw2Record);
        return recordList;
    });
    ipcMain.handle("setRecords", (_, newRecordList) => {
        const newRawString = newRecordList.map(record2Raw);
        writeCSV(dataFilePath, newRawString.join("\n"));
    });
    createWindow();
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});
console.log("main");
//# sourceMappingURL=main.js.map