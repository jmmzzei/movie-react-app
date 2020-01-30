import React from 'react'

import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import useMovieFetch from './hooks/useMovieFetch'

export default ({ movieId }) => {
    const [movie, loading, err] = useMovieFetch(movieId)
    console.log(movie);
    if(err) return <div>Something went wrong</div>
    if (loading) return <Spinner />

    const {runtime, budget, revenue} = movie

    return(
    <>
        <Navigation movie={movie.original_title}/>
        <MovieInfo movie={movie}/>
        <MovieInfoBar time={runtime} budget={budget} revenue={revenue} />
        <Grid header="Actors">
            {
                movie.actiors.map(e => (
                    <Actor key={e.credit_id} actor={e}/>
                ))
            }
        </Grid>
    </>
)}