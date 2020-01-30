import React from 'react'
import { StyledMovieThumb } from '../styles/StyledMovieThumb'


export default ({image, movieId, clickable}) => (
    <StyledMovieThumb>
        {clickable ? (
            <img className="clickable" src={image} alt="movie-thumb"></img>
        )
        :   <img src={image} alt="movie-thumb"></img>
        }
    </StyledMovieThumb>
    )
