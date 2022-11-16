import React from 'react';
import styled from 'styled-components';

const PageH2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  text-align:${props => props.Menu ? "center": "left"};
`;

export default PageH2;
