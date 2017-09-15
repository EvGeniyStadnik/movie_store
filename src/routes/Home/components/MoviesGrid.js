import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { moviesWrapper } from './MoviesGrid.css';

const MoviesGrid = ({ movies, genres }) => (
  <div className={moviesWrapper}>
    {movies.map(film => {
      let genresNames = film.genre_ids.map(genreId => {
        return genres.filter(genre => genre.id === genreId)[0];
      });
      return <MovieItem key={film.id} genresNames={genresNames} film={film} />;
    })}
  </div>
);

MoviesGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};

export default MoviesGrid;
