import React, { Component } from 'react';
import container from './container';
import debounce from 'lodash/debounce';
import moment from 'moment';
import { URL_IMG, IMG_SIZE_LARGE } from '../../const';
import { If } from '../../component';

import { CardMovie, ErrorMessage } from './components';

import { 
  Page,
  Navbar,
  Preloader,
  Col,
  Row,
  Searchbar,
  NavRight,
  Link as LinkF7
} from 'framework7-react';

class Home extends Component{

  state ={
    searchText: ''
  };

  componentWillMount(){
    const { fetchMovies } = this.props;
    fetchMovies();
  };

  changeSearch = $search => {
    const { searchMovie, fetchMovies, resetMovies } = this.props;
    const { value } = $search.target;
    this.setState({ ...this.state, searchText: value });
    if(value === ''){
      resetMovies();
      debounce(() => fetchMovies(), 400)();
    }else{
      debounce(() => searchMovie(value), 400)();
    }
  }

  fetchMoreMovies = (moviesPage, moviesTotalPages, fetchMovies, searchMovie, resetMovies) => {
    if ((moviesPage - 1) >= moviesTotalPages){
      return;
    }
    if(this.state.searchText != ''){
      return searchMovie(this.state.searchText);
    }
    return fetchMovies();
  }

  navigateMovie = movieId => {
    this.$f7router.navigate(`/movie/${movieId}`);
  }

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
      <Page
        style={{ backgroundColor: '#F5F5F5' }}
        infinite
        infinitePreloader={(moviesPage >= moviesTotalPages)}
        onInfinite={() => this.fetchMoreMovies(moviesPage, moviesTotalPages, fetchMovies, searchMovie, resetMovies)}
      >
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
            onChange={this.changeSearch}
            clearButton={true}
            onClickClear={() => {this.setState({...this.state, searchText: ''}); resetMovies(); fetchMovies()}}
            expandable
          />
        </Navbar>
        {loading && <Preloader />}
        {!loading && moviesError.data && <ErrorMessage error={moviesError.data} />}
        <If condition={movies.length}>
        <Row>
          {movies.map((movie, index) => (
            <Col width='100' tabletWidth='33' desktopWidth={25} key={`${movie.title}-${movie.id}-${index}`}>
              <CardMovie
                image={`${URL_IMG}${IMG_SIZE_LARGE}${movie.poster_path}`}
                title={movie.title}
                id={movie.id}
                release={moment(movie.release_date).format('DD/MM/YYYY')}
                vote={movie.vote_average}
                adult={movie.adult}
                onClick={() => this.navigateMovie(movie.id)}
              />
            </Col>
          ))}
        </Row>
          
        </If>
      </Page>
    );
  }

}

export default container(Home);