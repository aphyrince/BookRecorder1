interface Record {
    title: string;
    author: string;
    date: string;
    source: string;
    count: number;
}

export function raw2Record(raw: string) {
    const parsedRaw: string[] = raw.split(",");

    const record: Record = {
        title: parsedRaw[0] as string,
        author: parsedRaw[1] as string,
        date: parsedRaw[2] as string,
        source: parsedRaw[3] as string,
        count: Number(parsedRaw[4]),
    };

    return record;
}
