import React, { Component, Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { If } from '../../component';

class Home extends Component{

  componentWillMount(){
    const { fetchMovies } = this.props;
    fetchMovies();
  };

  render(){
    const { 
      movies,
      loading,
      moviesPage,
      moviesTotalPages,
      moviesError,
      fetchMovies,
      searchMovie,
      resetMovies
    } = this.props;
    return (
      <Fragment>
        {loading && <h3>Carregando</h3>}
        <If condition={movies.length}>
          {movies.map(movie => (
            <Link style={{ textDecoration: 'none' }} to={`movie/${movie.id}`}>
              <h2 key={movie.id}>{movie.title}</h2>
            </Link>
          ))}

        </If>
      </Fragment>
    );
  }

}

export default container(Home);