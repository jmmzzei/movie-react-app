import { useState, useEffect } from "react"
import { POPULAR_BASE_URL } from "../../config"

interface IState {
  movies: any[],
  currentPage?: number,
  heroImage?: {
    backdrop_path: string,
    original_title: string,
    overview: string
  },
  totalPages?: any
}

export default (searchTerm) => {

  const [state, setState] = useState<IState>({ movies : [] })
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  const fetchMovies = async (endpoint) => {
    setErr(false)
    setLoading(true)

    const isLoadMore = endpoint.search("page")
  
    try {
      const result = await (await fetch(endpoint)).json()
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }))
    } catch (error) {
      setErr(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState))
      setLoading(false)
    } else {
      fetchMovies(POPULAR_BASE_URL)
    }
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state))
    }
  }, [searchTerm, state])

  return [{loading, state, err}, {fetchMovies}]
}

