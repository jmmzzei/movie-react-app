import {useState, useEffect} from 'react'
import {API_URL, API_KEY} from '../../config'

export default () => {
    const [state, setState] = useState({ movies: [] })
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    const fetchMovies = async endpoint => {
        setErr(false)
        setLoading(true)

        try {
            const result = await (await fetch(endpoint)).json()
            setState(prev => ({
                ...prev,
                movies: [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))

        } catch (error) {
            setErr(true)
            console.log(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`)
    }, [])

    return [{state, loading, err}, fetchMovies] 
}