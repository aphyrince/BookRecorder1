import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
import fs from "fs";
import { readCSV } from "./api/readCSV";
import { raw2Record } from "./api/raw2Record";
import { record2Raw } from "./api/record2Raw";
import { Record } from "./api/global";
import { writeCSV } from "./api/writeCSV";
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
    app.quit();
}
const dataFilePath = path.join(app.getPath("userData"), "BookRecords.csv");
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadFile(
            path.join(__dirname, "../../../front/build/index.html"),
        );
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(
            path.join(process.resourcesPath, "build/index.html"),
        );
    }
};

app.whenReady().then(() => {
    // 초기 CSV 파일이 없으면 생성
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(
            dataFilePath,
            "title,author,date,source,count\n",
            "utf-8",
        );
    }
    ipcMain.handle("getRecords", () => {
        const rawString = readCSV(dataFilePath);
        const recordList = rawString.split("\n").map(raw2Record);
        return recordList;
    });
    ipcMain.handle("setRecords", (_, newRecordList: Record[]) => {
        const newRawString = newRecordList.map(record2Raw);
        writeCSV(dataFilePath, newRawString.join("\n"));
    });
    createWindow();
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
