import React, { useState, useEffect } from 'react'
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config'

import HeroImage from './elements/HeroImage'
import Spinner from './elements/Spinner'
import SearchBar from "./elements/SearchBar"
import Grid from "./elements/Grid"
import LoadMoreBtn from "./elements/LoadMoreBtn"
import MovieThumb from './elements/MovieThumb'
import useHomeFetch from './hooks/useHomeFetch'

export default () => {
    const [{state, loading, err}, fetchMovies] = useHomeFetch()

    return (
    <>
        <div>{API_KEY}</div>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
    )
}