import React, { useState, FC } from 'react'
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../config'
import { RouteComponentProps } from '@reach/router'
import { HeroImage } from './elements/HeroImage'
import Spinner from './elements/Spinner'
import SearchBar from './elements/SearchBar'
import { Grid } from './elements/Grid'
import LoadMoreBtn from './elements/LoadMoreBtn'
import { MovieThumb } from './elements/MovieThumb'
import useHomeFetch from './hooks/useHomeFetch'
import NoImage from './images/no_image.jpg'

export const Home: FC<RouteComponentProps<{}>> = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [
    {
      loading,
      state: { movies, currentPage, totalPages, heroImage },
      err,
    },
     {fetchMovies} ,
  ] = useHomeFetch(searchTerm)

  if (err) return <div>Something went wrong</div>

  if (!movies[0]) return <Spinner />

  const searchMovies = (search: string) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL
    setSearchTerm(search)
    fetchMovies(endpoint)
  }

  const loadMoreMovies = () => {
    const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`
    const popularEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`

    const endpoint = searchTerm ? searchEndPoint : popularEndPoint
    fetchMovies(endpoint)
  }

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={IMAGE_BASE_URL + BACKDROP_SIZE + heroImage.backdrop_path}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}

      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}></MovieThumb>
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  )
}
