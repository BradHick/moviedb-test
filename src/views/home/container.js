import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.items,
    loading: state.movies.loading,
    moviesPage: state.movies.page,
    moviesTotalPages: state.movies.totalPages,
    moviesError: state.movies.error
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: dispatch.movies.fetchMovies,
  searchMovie: dispatch.movies.searchMovie,
  resetMovies: dispatch.movies.resetMovies
});

export default component => 
  connect( mapStateToProps, mapDispatchToProps)(component);