import React from 'react'
import { StyledMovieThumb } from '../styles/StyledMovieThumb'
import { Link } from '@reach/router'

export default ({image, movieId, clickable}) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="movie-thumb"></img>
            </Link>
        )
        :   <img src={image} alt="movie-thumb"></img>
        }
    </StyledMovieThumb>
    )
