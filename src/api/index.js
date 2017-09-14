const requestUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=0f04bbdc102bbd08c7caca24bb575d45&language=en-US&page=1';

export default {
  getGridMovies(){
    return fetch(requestUrl)
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('Server response wasn\'t OK');
        }
      }).then(json => json.results);
  },
};