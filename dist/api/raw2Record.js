export function raw2Record(raw) {
    const parsedRaw = raw.split(",");
    const record = {
        title: parsedRaw[0],
        author: parsedRaw[1],
        date: parsedRaw[2],
        source: parsedRaw[3],
        count: Number(parsedRaw[4]),
    };
    return record;
}
//# sourceMappingURL=raw2Record.js.map