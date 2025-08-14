export function record2Raw(record) {
    const raw = [
        record.title,
        record.author,
        record.date,
        record.source,
        record.count + "",
    ].join(",");
    return raw;
}
//# sourceMappingURL=record2Raw.js.map