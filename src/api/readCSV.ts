import { readFileSync } from "fs";

export function readCSV(filename: string) {
    const ret = readFileSync("./data/" + filename, "utf-8");

    return ret;
}
