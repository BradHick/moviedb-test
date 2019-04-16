import React, { Component } from 'react';
import moment from 'moment';
import container from './container';
import { URL_IMG, IMG_SIZE_LARGE, IMG_SIZE_SMALL } from '../../const';
import { CastAvatar, Poster, ErrorMessage } from './components';
import { Page, Navbar, Preloader, BlockTitle, List, ListItem, Icon, Row, Col } from 'framework7-react';
import styled from 'styled-components';



/**
|--------------------------------------------------
| Styled
|--------------------------------------------------
*/

const Title = styled.h1`
  text-align: left;
`;

const Overview = styled.h3`
  text-align: left;
  font-weight: 300px;
  color: #707070;
`;

const MovieInfoWrapper = styled.div`
  margin: 10px;
`;
const MovieWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Vote = styled.h3`
  font-size: 25px;
  color: #D0D0D0;
  font-weight: bold;
  margin-right: 5px;
`;

const Release = styled.h3`
  color: #D1D1D1;
  margin: 0;
  text-align: left;
`;

const AdultBadge = styled.div`
  background-color: #EF53504F;
  padding: 3px;
  margin-top: 10px;
  border-radius: 5px;
  width: 30px;
  color: #B71C1C;
  font-weight: bold;
`;




/**
|--------------------------------------------------
| Main
|--------------------------------------------------
*/

class Movie extends Component{

  componentWillMount(){
    const { id, fetchMovie, fetchCast, resetCast } = this.props;
    resetCast();
    fetchMovie(id);
    fetchCast(id);
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
      <Page>
        <Navbar
          backLink
          title={movie.title}
          style={{ backgroundColor: '#673AB7', color: '#FFF' }}
        />
        {movieLoading && <Preloader />}
        {!movieLoading && movieError.data && <ErrorMessage error={movieError.data} />}
        <MovieWrapper>
        <Row>
          <Col width='100' tabletWidth='50'>
            <MovieWrapper>
            <Poster
              alt='poster'
              src={`${URL_IMG}${IMG_SIZE_LARGE}${movie.poster_path}`}
            />
            <MovieInfoWrapper>
              <Title>{movie.title}</Title>
              <Overview>{movie.overview}</Overview>
            </MovieInfoWrapper>
            </MovieWrapper>
            
          </Col>
          <Col width='100' tabletWidth='50'>
            <MovieInfoWrapper>
              <InfoWrapper>
                <Icon
                  f7='star_fill'
                  color='yellow'
                />
                <Vote>{movie.vote_average}</Vote>
              </InfoWrapper>
              <Release>Data de lançamaneto: {moment(movie.release_date).format('DD/MM/YYYY')}</Release>
              {movie.adult && (
                <AdultBadge>
                  +18
                </AdultBadge>
              )}
            </MovieInfoWrapper>
          
          </Col>
        </Row>
        </MovieWrapper>
          
        <BlockTitle>Elenco</BlockTitle>
        {!castLoading && castError.data && <ErrorMessage error={castError.data} />}
        
          <List mediaList>
          <Row>
            {castList.map((cast, index) => (
              <Col width='100' tabletWidth='50'>
                <ListItem 
                  title={cast.name}
                  subtitle={cast.character}
                  key={index}
                > 
                  <CastAvatar
                    slot="media"
                    alt='cast'
                    src={`${URL_IMG}${IMG_SIZE_SMALL}${cast.profile_path}`}
                  />
                </ListItem>
              </Col>
            ))}
            </Row>
          </List>
        
      </Page>
    );
  }

}

export default container(Movie);