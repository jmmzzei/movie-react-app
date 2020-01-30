import React, { useState } from 'react'
import {
    API_URL,
    API_KEY,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config'

import HeroImage from './elements/HeroImage'
import Spinner from './elements/Spinner'
import SearchBar from "./elements/SearchBar"
import Grid from "./elements/Grid"
import LoadMoreBtn from "./elements/LoadMoreBtn"
import MovieThumb from './elements/MovieThumb'
import useHomeFetch from './hooks/useHomeFetch'
import NoImage from './images/no_image.jpg'


export default () => {
    const [
        {
        state: {movies, currentPage, totalPages, heroImage}, 
        loading, 
        err 
    }, fetchMovies] = useHomeFetch()
    const { searchTerm, setSearchTerm } = useState('')

    if (err) return <div>Something went wrong</div>
    if (!movies[0]) return <Spinner />

    const loadMoreMovies = () => {
        const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`
        const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`
        
        const endpoint = searchTerm ? searchEndPoint : popularEndPoint
        fetchMovies(endpoint)
    }

    return (
        <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            />

            <SearchBar />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}

                    ></MovieThumb>))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
            )}
        </>
    )
}