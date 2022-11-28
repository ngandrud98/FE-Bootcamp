import React from 'react';
import ItemName from '../item-name/item-name';
import ItemPrice from '../item-price/item-price';
import RemoveItemButton from './remove-item-button/remove-item-button';

const ItemInCart = (props) => {
  console.log(props);
  return (
      <li>
        <div>
          <ItemName>
            {props.item.name}
          </ItemName>
          <ItemPrice>
            {props.item.price}
          </ItemPrice>
        </div>
        <RemoveItemButton
            index={props.index}
            removeFromCartAction={props.removeFromCartAction}>Remove</RemoveItemButton>
      </li>
  );
};

export default ItemInCart;
