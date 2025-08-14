import { writeFileSync } from "fs";

export function writeCSV(filename: string, data: string) {
    writeFileSync("./data/" + filename, data);
}
