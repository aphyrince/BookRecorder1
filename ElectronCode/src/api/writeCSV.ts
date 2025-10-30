import { writeFileSync } from "fs";

export function writeCSV(filename: string, data: string) {
    writeFileSync(filename, data);
}
