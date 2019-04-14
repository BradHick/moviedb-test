import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    movie: state.movie.item,
    movieLoading: state.movie.loading,
    movieError: state.movie.error,
    castLoading: state.cast.loading,
    castError: state.cast.error,
    castList: state.cast.items
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetMovie: dispatch.movie.resetMovie,
  fetchMovie: dispatch.movie.fetchMovie,
  searchMovie: dispatch.movies.searchMovie,
  fetchCast: dispatch.cast.fetchCast,
  resetCast: dispatch.cast.resetCast
});

export default component => 
  connect( mapStateToProps, mapDispatchToProps)(component);