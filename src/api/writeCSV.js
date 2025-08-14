import { writeFileSync } from "fs";
export function writeCSV(filename, data) {
    writeFileSync("./data/" + filename, data);
}
//# sourceMappingURL=writeCSV.js.map