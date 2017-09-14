import React from 'react';
import PropTypes from 'prop-types';

const MoviesGrid = ({ movies }) => (
  <div>
    <ul>
      {movies.map(item => {
        return (
          <li key={item.id}>{ item.title} </li>
        );
      })}
    </ul>
  </div>
);

MoviesGrid.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesGrid;
