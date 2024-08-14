import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';


export default function useFetch(api: string) {
    const [data, setData] = useState<[] | null>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<String | null>(null);

    async function fetchApi() {
        try {
            const res = await axios.get(api, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            if (res.status === 200) {
                setData(res.data)
            }
            else {
                setError(res.statusText)
            }
        }
        catch (err: any) {
            if (err.response) {
                setError(err.response.data);
            } else if (err.request) {
                setError(err.request);
            } else {
                setError(err.message);
            }
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [api])
    return { data, loading, error };
}


