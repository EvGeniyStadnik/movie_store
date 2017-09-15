import React from 'react';
import PropTypes from 'prop-types';
import StarRating from 'react-star-rating';
import { movieItem, movieItemTitle, movieItemGenre } from './MovieItem.css';

const MovieItem = ({ film, genresNames }) => {
  return (
    <div className={movieItem}>
      <img
        src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`}
        alt={film.title}
      />
      <div className={movieItemTitle}>{film.original_title}</div>
      <div className={movieItemGenre}>
        <ul>
          {genresNames.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <StarRating
        rating={film.vote_average}
        totalStars={10}
        disabled={false}
        editing={false}
        size={18}
      />
    </div>
  );
};

MovieItem.propTypes = {
  film: PropTypes.shape().isRequired,
  genresNames: PropTypes.array.isRequired
};

export default MovieItem;
