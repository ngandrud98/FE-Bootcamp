import React, { useState } from 'react';
import styled from 'styled-components';
import PageH2 from '../common/page-h2/page-h2';
import ItemInCart from './item-in-cart/item-in-cart';
import ItemName from './item-name/item-name';
import ItemPrice from './item-price/item-price';

const ShoppingCartWrapper = styled.div`
  background-color: #ffffcc;
  border-left: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-right: 2px solid #ccc;
  margin-top: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 320px;
  position:fixed;
  
`;

const ShoppingCartPadding = styled.div`
  margin: 0;
  padding: 16px 24px;
`;

const GoToCheckout = styled.button`
  background-color: darkolivegreen;
  border: 0;
  color: #fff;
  font-weight: bold;
  padding: 16px 24px;
  width: 100%;
  
  :focus,
  :hover {
    background-color: #023020;
  }
`;

const CartTotal = styled.div`
  margin-top: 128px; 
`;

const getCartTotal = (items) => {
  let total = 0;

  items.forEach((item) => {
    total += parseFloat(item.price);
  });

  return total.toFixed(2);
};

const ShoppingCart = (props) => {
  return (
    <ShoppingCartWrapper>
      <ShoppingCartPadding>
        <PageH2>Your Order</PageH2>

         <ul>
          {props.items.map( (item, i) =>
            <ItemInCart
                item={item}
                key={i}
                index={i}
                removeFromCartAction={props.removeFromCartAction}
            />
          )}
        </ul>

        <CartTotal>
          <ItemName>
            Your total is:
          </ItemName>
          <ItemPrice>
            {getCartTotal(props.items)}
          </ItemPrice>

        </CartTotal>
      </ShoppingCartPadding>
      <GoToCheckout>
        Checkout ({props.items.length})
      </GoToCheckout>
    </ShoppingCartWrapper>
  )
}

export default ShoppingCart;
