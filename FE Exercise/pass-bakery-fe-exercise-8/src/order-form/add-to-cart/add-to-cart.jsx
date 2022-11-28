import React from 'react';
import styled from 'styled-components';
import PageH3 from '../../common/page-h3/page-h3';

const AddToCart = styled.button`
  background-color: transparent;
  border: 2px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;
  text-align: left;
  width: 100%;
  
  :hover,
  :focus {
    background-color: #f0f0f0;
    border-color: darkolivegreen;
  }
`;
const ItemPrice = styled.div`
  color: #666;
  font-style: italic;
  margin-top: 8px;
`;

const MenuOffering = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.addToCartAction(props);
  };

  return (
    <AddToCart onClick={handleOnClick}>
      <PageH3>{props.name}</PageH3>
      <ItemPrice>{props.price}</ItemPrice>
    </AddToCart>
  );
};

export default MenuOffering;
