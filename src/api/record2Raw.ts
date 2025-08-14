interface Record {
    title: string;
    author: string;
    date: string;
    source: string;
    count: number;
}

export function record2Raw(record: Record) {
    const raw: string = [
        record.title,
        record.author,
        record.date,
        record.source,
        record.count + "",
    ].join(",");

    return raw;
}
