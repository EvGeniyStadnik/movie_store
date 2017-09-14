import React, { Component } from 'react';
import SearchGidAPI from '../../../api';
import MoviesGrid from '../components/MoviesGrid';

class HomePageContainer extends Component {
  state = {
    movies: []
  };

  componentWillMount(){
    SearchGidAPI.getGridMovies().then(movies => {
      console.log(movies);
      this.setState({ movies });
    });
  }

  render() {
    const movies = this.state.movies;
    return (
      <div>
        <MoviesGrid movies={movies} />
      </div>
    );
  }
}

export default HomePageContainer;