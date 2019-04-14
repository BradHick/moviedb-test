import React, { Component, Fragment } from 'react';
import container from './container';
import { If } from '../../component';

class Movie extends Component{

  componentWillMount(){
    const { fetchMovie, match } = this.props;
    fetchMovie(match.params.movieId);
  };

  render(){
    
    return (
      <Fragment>
          <h1>Filme</h1>
      </Fragment>
    );
  }

}

export default container(Movie);