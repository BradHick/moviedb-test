import React from 'react';
import styled from 'styled-components';


const Message = styled.div`
  display: flex;
  background-color: #EF53504F;
  padding: 3px;
  margin-top: 10px;
  border-radius: 5px;
  width: 200px;
  color: #B71C1C;
  font-weight: bold;
`;

const ErrorMessage = props =>(
  <Message>
    {`Algo deu errado: ${props.error}`}
  </Message>
);

export default ErrorMessage;