import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from '../../configureStore';
import { IAction, IMovie } from '../../interfaces';
import { GET_A_MOVIE } from '../../actions/actionTypes';

export default function Movie(props: any) {
  const { match, location } = props;
  const movieId: number = match.params.movieId;
  const { state, dispatch } = useContext(Store);
  let loading: boolean = true;
  let movie: IMovie | any = state.movie;

  useEffect(() => {
    getOneMovie(movieId);
  }, [movieId]);

  const getOneMovie = (id: number): IAction => {
    let movies: Array<IMovie>;
    let slicedMovie: IMovie | any;
    if (state.movies) {
      movies = state.movies;
      slicedMovie = movies.find((movie: IMovie) => movie.id === Number(id));
      loading = false;
    }
    return dispatch({
      type: GET_A_MOVIE,
      payload: slicedMovie,
    });
  };

  return (
    <Fragment>
      <h2>Movie Details</h2>
      {state.movie ? (
        <Fragment>
          <h3>{movie.name}</h3>
          <img src={movie.image.medium} alt={movie.name} />
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
}
