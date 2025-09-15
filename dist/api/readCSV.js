import { readFileSync } from "fs";
export function readCSV(filename) {
    const ret = readFileSync(filename, "utf-8");
    return ret;
}
//# sourceMappingURL=readCSV.js.map