import Immutable from 'seamless-immutable';
import { API_KEY, URL_DETAIL, URL_CAST } from '../const';

const initialState = new Immutable({
  loading: false,
  items:[],
  error:{}
});

const cast = {
  state: initialState,
  reducers: {
    fetchCastFulfiled: (state, payload) => {
      return state.merge({
        loading: false,
        items: state.items.concat(payload),
        error: {}
      });
    },
    fetchCastPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetCast: (state) => {
      return state.merge({
        ...initialState
      });
    },
    fetchCastRejected: (state, payload) => {
      return state.merge({
        loading: false,
        error: payload
      });
    },
  },
  effects: (dispatch) => ({
    fetchCast: (id) =>{
      const url = `${URL_DETAIL}${id}${URL_CAST}${API_KEY}`;
      dispatch.cast.fetchCastPending();
      return fetch(url)
        .then(response => response.json())
        .then(data => dispatch.cast.fetchCastFulfiled(data.cast))
        .catch(error => dispatch.cast.fetchCastRejected(error));
    }
  })
};

export default cast;