import React from 'react';
import MenuSectionTitle from '../menu-section-title/menu-section-title';
import './add-to-cart.css';

/* 
props.name will be the name of the item in each category. 
i.e coffee:latte, drip..   breakfast: oatmeal, toast ...


*/
const MenuOffering = (props) => {

  return (
    <button className="add-to-cart">
      <MenuSectionTitle>{props.name}</MenuSectionTitle>
      <div className="price">{props.price}</div>
    </button>
  );
}

export default MenuOffering;
