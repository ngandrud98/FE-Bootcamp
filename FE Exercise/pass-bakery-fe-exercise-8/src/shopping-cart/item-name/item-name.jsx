import React from 'react';
import styled from 'styled-components';

const ItemNameEl = styled.div`
  display: inline-block;
  font-weight: bold;
  margin: 0 0 8px;
  width: 64%;
`;

const ItemName = (props) => {
  return (
    <ItemNameEl>
      {props.children}
    </ItemNameEl>
  );
};

export default ItemName;
