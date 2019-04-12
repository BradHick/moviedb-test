import Immutable from 'seamless-immutable';
import { API_KEY, URL_DETAIL } from '../const';

const initialState = new Immutable({
  loading: false,
  item:{},
  error:{}
});

const movie = {
  state: initialState,
  reducers: {
    fetchMovieFulfiled: (state, payload) => {
      return state.merge({
        loading: false,
        item: payload,
        error: {}
      });
    },
    fetchMoviePending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetMovie: (state) => {
      return state.merge({
        ...initialState
      });
    },
    fetchMovieRejected: (state, payload) => {
      return state.merge({
        loading: false,
        error: payload
      });
    }
    
  },
  effects: (dispatch) => ({
    fetchMovie: (id) =>{
      const url = `${URL_DETAIL}${id}${API_KEY}`;
      dispatch.movie.fetchMoviePending();
      return fetch(url)
        .then(response => response.json())
        .then(data => dispatch.movie.fetchMovieFulfiled(data))
        .catch(error => dispatch.movie.fetchMovieRejected(error));
    }
  })
};

export default movie;