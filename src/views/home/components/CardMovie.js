import React from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'framework7-react';

const Poster = styled.img`
  height: 150px;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

const ContentWrapper = styled.div`
  padding-left: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  flex: 1px;
  margin: 0;
  color: #404040;
  text-align: left;
`;

const Vote = styled.span`
  font-size: 22px;
  color: #D0D0D0;
  font-weight: bold;
  margin-right: 5px;
`;

const Release = styled.p`
  color: #D1D1D1;
  margin: 0;
  text-align: left;
`;

const Description = styled.p`
  color: #919191;
  margin: 0;
  margin-top: 10px;
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

const CardMovie = props => (
  <Card>
    <CardWrapper onClick={props.onClick}>
      {props.image && <Poster src={props.image} />}
      <ContentWrapper>
        <InfoWrapper>
          <Title>{props.title}</Title>
        </InfoWrapper>
          <InfoWrapper>
            <Vote>{props.vote}</Vote>
            <Icon
              f7='star_fill'
              color='yellow'
            />
          </InfoWrapper>
        <Release>Data de lançamento: {props.release}</Release>
        {props.adult && (
          <AdultBadge>
            +18
          </AdultBadge>
        )}
      </ContentWrapper>
    </CardWrapper>
  </Card>
);

export default CardMovie;