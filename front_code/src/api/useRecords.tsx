import { useCallback, useEffect, useState } from "react";
import { Record } from "../global";

export function useRecords() {
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

    const postData = (newRecordList: Record[]) => {
        window.preloadRecord.setRecords(newRecordList);
    };

    const addRecord = useCallback((newRecord: Record) => {
        setRecordList((prev) => {
            const updatedList = [newRecord, ...prev];
            postData(updatedList);
            return updatedList;
        });
    }, []);

    const editRecord = useCallback((newRecordList: Record[]) => {
        setRecordList(() => {
            postData(newRecordList);
            return newRecordList;
        });
    }, []);

    const deleteRecord = useCallback((newRecordList: Record[]) => {
        setRecordList(() => {
            postData(newRecordList);
            return newRecordList;
        });
    }, []);

    return {
        recordList,
        loading,
        error,
        addRecord,
        editRecord,
        deleteRecord,
    };
}
