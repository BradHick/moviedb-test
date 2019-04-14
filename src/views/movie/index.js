import React, { Component, Fragment } from 'react';
import container from './container';
import { URL_IMG, IMG_SIZE_LARGE, IMG_SIZE_SMALL } from '../../const';
import { If } from '../../component';

class Movie extends Component{

  componentWillMount(){
    const { fetchMovie, match, fetchCast, resetCast } = this.props;
    resetCast();
    fetchMovie(match.params.movieId);
    fetchCast(match.params.movieId);
  };

  render(){
    const { 
      movie,
      movieLoading,
      movieError,
      castLoading,
      castError,
      castList
     } = this.props;
    return (
      <Fragment>
          {movieLoading && <h3>Carregando</h3>}
          <img alt='poster' src={`${URL_IMG}${IMG_SIZE_LARGE}${movie.poster_path}`}/>
          <h1>{movie.title}</h1>
          <h2>{movie.overview}</h2>
          {castList.map(cast => (
            <div key={cast.id}>
              <img alt='cast' src={`${URL_IMG}${IMG_SIZE_SMALL}${cast.profile_path}`} />
              <h3>{cast.character}</h3>
            </div>
          ))}
      </Fragment>
    );
  }

}

export default container(Movie);