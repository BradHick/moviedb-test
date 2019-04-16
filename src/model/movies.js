import Immutable from 'seamless-immutable';
import { URL_LIST, URL_SEARCH, API_KEY, API_KEY_ALT } from '../const';

const initialState = new Immutable({
  loading: false,
  items:[],
  page: 1,
  previusQuery: '',
  totalPages: 2,
  error:{}
});

const movies = {
  state: initialState,
  reducers: {
    fetchMoviesFulfiled: (state, payload) => {
      return state.merge({
        loading: false,
        previusQuery: '',
        items: state.items.concat(payload.results),
        page: payload.page + 1,
        totalPages: payload.total_pages,
        error: {}
      });
    },
    searchMoviesFulfiled: (state, payload) => {
      if(payload.increment){
        return state.merge({
          loading: false,
          items: state.items.concat(payload.results),
          page: payload.page + 1,
          totalPages: payload.total_pages,
          error: {}
        });
      }
      return state.merge({
        loading: false,
        items: payload.results,
        previusQuery: payload.previusQuery,
        page: payload.page + 1,
        totalPages: payload.total_pages,
        error: {}
      });
    },
    fetchMoviesPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetMovies: (state) => {
      return state.merge({
        ...initialState
      });
    },
    fetchMoviesRejected: (state, payload) => {
      return state.merge({
        loading: false,
        error: payload
      });
    },
    
  },
  effects: (dispatch) => ({
    fetchMovies: (option, state) =>{
      let url;
      const { page, totalPages } = state.movies;
      if(option) url = `${URL_LIST}${API_KEY}&with_cast=${option}option&sort_by=vote_average.desc&page=${page}`;
      else url = `${URL_LIST}${API_KEY}&page=${page}`;
      if(page <= totalPages){
        dispatch.movies.fetchMoviesPending();
        return fetch(url)
          .then(response => response.json())
          .then(data => dispatch.movies.fetchMoviesFulfiled(data))
          .catch(error => dispatch.movies.fetchMoviesRejected(error));
      }
    },
    searchMovie: (keyword, state) => {
      const { page, totalPages, previusQuery } = state.movies;
      if(keyword !== previusQuery){
        let url = `${URL_SEARCH}${keyword}${API_KEY_ALT}&sort_by=vote_average.desc&page=${1}`;
        if(page <= totalPages){
          dispatch.movies.fetchMoviesPending();
          return fetch(url)
            .then(response => response.json())
            .then(data => dispatch.movies.searchMoviesFulfiled({...data, increment: false, previusQuery: keyword}))
            .catch(error => dispatch.movies.fetchMoviesRejected(error));
        }
      }
      let url = `${URL_SEARCH}${keyword}${API_KEY_ALT}&sort_by=vote_average.desc&page=${page}`;
      if(page <= totalPages){
        dispatch.movies.fetchMoviesPending();
        return fetch(url)
          .then(response => response.json())
          .then(data => dispatch.movies.searchMoviesFulfiled({...data, increment: true}))
          .catch(error => dispatch.movies.fetchMoviesRejected(error));
      }

    }
  })
};

export default movies;