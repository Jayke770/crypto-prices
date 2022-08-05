import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Crypto() {
    const { data, error } = useSWR('/api/crypto', fetcher, {
        shouldRetryOnError: true,
        refreshWhenOffline: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateOnMount: true,
        refreshInterval: 5000
    })
    return {
        data: data,
        dataLoading: !error && !data,
        dataError: error
    }
}