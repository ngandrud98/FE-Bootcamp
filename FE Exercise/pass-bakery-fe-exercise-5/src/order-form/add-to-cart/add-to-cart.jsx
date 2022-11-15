import React from 'react';
import MenuSectionTitle from '../menu-section-title/menu-section-title';
import './add-to-cart.css';

const MenuOffering = (props) => {

  return (
    <button className="add-to-cart">
      <MenuSectionTitle>{props.name}</MenuSectionTitle>
      <div className="price">{props.price}</div>
    </button>
  );
}

export default MenuOffering;
