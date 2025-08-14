import { readFileSync } from "fs";
export function readCSV(filename) {
    const ret = readFileSync("./data/" + filename, "utf-8");
    return ret;
}
//# sourceMappingURL=readCSV.js.map