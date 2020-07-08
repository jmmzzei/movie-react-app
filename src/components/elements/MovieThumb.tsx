import React, { FC } from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";

type MovieThumbProps = {
  image: any;
  movieId?: any;
  movieName?: string;
  clickable: boolean;
};

export const MovieThumb: FC<MovieThumbProps> = ({
  image,
  movieId,
  clickable,
  movieName,
}) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="movie-thumb"></img>
      </Link>
    ) : (
      <img src={image} alt="movie-thumb"></img>
    )}
  </StyledMovieThumb>
);
