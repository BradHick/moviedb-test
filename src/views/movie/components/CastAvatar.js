import React, { Fragment } from 'react';
import styled from 'styled-components';


const CastAvatarImg = styled.img`
  width: 50px;
  height: 65px;
`;

const CastAvatar = props => (
  <Fragment>
    <CastAvatarImg src={props.src} />
  </Fragment>
);

export default CastAvatar;