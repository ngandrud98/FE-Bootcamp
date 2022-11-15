import React from 'react';
import './menu-section.css';
import AddToCart from '../add-to-cart/add-to-cart';

const MenuSection = (props) => {


  return (
    <section>
      <h2>{props.name}</h2>
      <ul className="menu-options">
          { props.items.map( (item, i) =>
            <li>
              <AddToCart key={i}  name={item.name} price={item.price} />
            </li>
          )}
      </ul>
    </section>
  )
};

export default MenuSection;
