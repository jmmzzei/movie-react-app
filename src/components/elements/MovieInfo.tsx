import React, { FC } from "react";
import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { MovieThumb } from "./MovieThumb";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import { IActor } from "./Actor";

export interface MovieProps {
  movie?: {
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average: string;
    poster_path: string;
    directors: [
      {
        credit_id: string;
        name: string;
      }
    ];
    original_title: string;
    runtime: string;
    budget: string;
    revenue: string;
    actors?: [IActor];
  };
  original_title?: string;
  runtime?: string;
  budget?: string;
  revenue?: string;
}

export const MovieInfo: FC<MovieProps> = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>DESCRIPTION</h3>
        <p>{movie.overview}</p>
        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map((e) => (
              <p key={e.credit_id}>{e.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);
