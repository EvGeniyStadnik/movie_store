import axios from 'axios';

const movieList =
  'https://api.themoviedb.org/3/movie/popular?api_key=0f04bbdc102bbd08c7caca24bb575d45&language=en-US&page=1';
//movies list coming without genres names only with genre id-s so we have to load genres names with id-s
const genreList =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=0f04bbdc102bbd08c7caca24bb575d45&language=en-US';

export default {
  getGridMovies() {
    return axios.all([axios.get(movieList), axios.get(genreList)]);
  }
};
