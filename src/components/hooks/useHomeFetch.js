import {useState, useEffect} from 'react'
import {POPULAR_BASE_URL } from '../../config'

export default () => {
    const [state, setState] = useState({ movies: [] })
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    const fetchMovies = async endpoint => {
        setErr(false)
        setLoading(true)

        const isLoadMore = endpoint.search('page')

        try {
            const result = await (await fetch(endpoint)).json()
            setState(prev => ({
                ...prev,
                movies: 
                    isLoadMore !== -1
                    ? [...prev.movies, ...result.results]
                    : [...result.results],
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
        fetchMovies(POPULAR_BASE_URL)
    }, [])

    return [{state, loading, err}, fetchMovies] 
}