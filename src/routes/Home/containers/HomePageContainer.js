import React, { Component } from 'react';
import axios from 'axios';
import SearchMovieAPI from '../../../api';
import MoviesGrid from '../components/MoviesGrid';
import { moviesGridWrapper } from './HomePageContainer.css';

class HomePageContainer extends Component {
  state = {
    movies: [],
    genres: []
  };

  componentDidMount() {
    SearchMovieAPI.getGridMovies()
      .then(
        axios.spread((movies, genres) => {
          let data = Object.assign({}, movies.data, genres.data);
          this.setState({
            movies: data.results,
            genres: data.genres
          });
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { movies, genres } = this.state;
    return (
      <div className={moviesGridWrapper}>
        <MoviesGrid movies={movies} genres={genres} />
      </div>
    );
  }
}

export default HomePageContainer;
