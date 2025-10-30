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
                sortRecord(records);
                setRecordList(records);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // setLoading(false);
    }, []);

    const postData = (newRecordList: Record[]) => {
        window.preloadRecord.setRecords(newRecordList);
    };

    const addRecord = useCallback((newRecord: Record) => {
        setRecordList((prev) => {
            const updatedList = [newRecord, ...prev];
            sortRecord(updatedList);
            postData(updatedList);
            return updatedList;
        });
    }, []);

    const editRecord = useCallback((newRecordList: Record[]) => {
        setRecordList(() => {
            sortRecord(newRecordList);
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

    const sortRecord = useCallback((unSortedRecordList: Record[]) => {
        unSortedRecordList.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
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
