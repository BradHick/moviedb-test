import React, { Fragment } from 'react';
import styled from 'styled-components';


const PosterImg = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10px;
`;

const Poster = props => (
  <Fragment>
    <PosterImg src={props.src} />
  </Fragment>
);

export default Poster;