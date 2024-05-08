import { useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
 
    const fetchData = async () => {
        try {
            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setData(data)
            } else {
                setError(true)
                console.error('Error fetching data', res.status);
            }

        } catch (error) {
            console.error('Error de red:', error);
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, fetchData }

}