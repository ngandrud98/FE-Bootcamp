import React from 'react';
import styled from 'styled-components';

const ItemPriceEl = styled.div`
  display: inline-block;
  margin: 0 0 8px 8%;
  text-align: right;
  width: 24%;
`;

const ItemPrice = (props) => {
  return (
    <ItemPriceEl>
      {'$' + props.children}
    </ItemPriceEl>
  );
};

export default ItemPrice;
