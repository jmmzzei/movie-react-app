import React from 'react'

import HeroImage from './elements/HeroImage'
import Spinner from './elements/Spinner'
import SearchBar from "./elements/SearchBar"
import Grid from "./elements/Grid"
import LoadMoreBtn from "./elements/LoadMoreBtn"
import MovieThumb from './elements/MovieThumb'

export default () => (
    <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
)
