import { useState, useEffect, useCallback } from "react"
import { API_URL, API_KEY } from "../../config"
import { MovieProps } from "../elements/MovieInfo"

interface IReturned {
  loading: boolean
  err: boolean
  movie: any
}

export const useMovieFetch = (movieId: string): IReturned => {
  const [movie, setState] = useState({})
  const [loading, setLoading] = useState(true)
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
        (member) => member.job === "Director"
      )

      setState({
        ...moviesResult,
        actors: creditsResult.cast,
        directors,
      })
    } catch (error) {
      setErr(true)
    }
    setLoading(false)
  }, [movieId])

  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]))
      setLoading(false)
    } else {
      fetchData()
    }
  }, [fetchData, movieId])

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(movie))
  }, [movieId, movie])

  return { loading, err, movie }
}
