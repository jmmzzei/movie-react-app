import { useState, useEffect, useCallback } from 'react'
import {API_URL, API_KEY} from '../../config'

export default movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    const fetchData = useCallback(async () => {
        setErr(false)
        setLoading(true)
        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
            const moviesResult = await (await fetch(endpoint)).json() 
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
            const creditsResult = await (await fetch(creditsEndpoint)).json()

            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            )

            setState({
                ...moviesResult,
                actiors: creditsResult.cast,
                directors,
            })
            

        } catch (error) {
            setErr(true)
        }
        setLoading(false)

    }, [movieId])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return [state, loading, err]
}