import { useState, useEffect } from 'react'
import { POPULAR_BASE_URL } from '../../config'

interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
interface IMovies extends Array<IMovie> {}

interface IState {
  movies: IMovies
  currentPage: number
  heroImage: {
    backdrop_path: string
    original_title: string
    overview: string
  }
  totalPages: number
}

const initialState = {
  movies: [],
  currentPage: 0,
  heroImage: {
    backdrop_path: '',
    original_title: '',
    overview: '',
  },
  totalPages: 0,
}

interface IObj {
  loading: boolean
  state: any
  err: boolean
}

export default (searchTerm: string): [IObj,any] => {
  const [state, setState] = useState<IState>(initialState)
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
        totalPages: result.total_pages,
      }))
    } catch (error) {
      setErr(true)
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
      sessionStorage.setItem('homeState', JSON.stringify(state))
    }
  }, [searchTerm, state])

  return [{ loading, state, err },  {fetchMovies} ]
}
