import React from 'react';
import styled from 'styled-components';

const PosterWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const PosterImg = styled.img`

`;

const Poster = props => (
  <PosterWrapper>
    <PosterImg src={props.src} />
  </PosterWrapper>
);

export default Poster;