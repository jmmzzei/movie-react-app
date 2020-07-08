import React, { FC } from "react";
import { Navigation } from "./elements/Navigation";
import { MovieInfo } from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import { Actor } from "./elements/Actor";
import { Grid } from "./elements/Grid";
import Spinner from "./elements/Spinner";
import { useMovieFetch } from "./hooks/useMovieFetch";

interface ITest {
  movie: object;
  loading: boolean;
  err: boolean;
}

export const Movie: React.FC<any> = ({ movieId }) => {
  let { loading, err, movie } = useMovieFetch(movieId);
  console.log(movie);
  if (err) return <div>Something went wrong</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((e) => (
          <Actor key={e.credit_id} actor={e} />
        ))}
      </Grid>
    </>
  );
};
