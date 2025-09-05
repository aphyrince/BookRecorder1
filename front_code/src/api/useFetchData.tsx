import { useEffect, useState } from "react";
import type { Record } from "../global";

export function useFetchData() {
    const [recordList, setRecordList] = useState<Record[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await window.preloadRecord.getRecords();
                setRecordList(records);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { recordList, loading, error };
}
