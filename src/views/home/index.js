import React, { Component, Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { URL_IMG, IMG_SIZE_LARGE } from '../../const';
import { If } from '../../component';

import { CardMovie } from './components';

import { Page, Navbar, Preloader, Searchbar, NavRight, Link as LinkF7 } from 'framework7-react';

import moment from 'moment';
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
      <Page style={{ backgroundColor: '#F5F5F5' }}>
        <Navbar
          title='Movies DB'
          style={{ backgroundColor: '#673AB7', color: '#FFF' }}
        >
          <NavRight>
            <LinkF7
              searchbarEnable=".searchbar"
              iconMd="f7:search"
              color='white'
            />
          </NavRight>
          <Searchbar
            className="searchbar"
            expandable
          />
        </Navbar>
        {loading && <Preloader />}
        <If condition={movies.length}>
          {movies.map(movie => (
            <Link key={movie.id} style={{ textDecoration: 'none' }} to={`movie/${movie.id}`}>
              <CardMovie
                image={`${URL_IMG}${IMG_SIZE_LARGE}${movie.poster_path}`}
                title={movie.title}
                release={moment(movie.release_date).format('DD/MM/YYYY')}
                description={movie.overview}
                vote={movie.vote_average}
                adult={movie.adult}
                expandable
              />
            </Link>
          ))}
          
        </If>
      </Page>
    );
  }

}

export default container(Home);