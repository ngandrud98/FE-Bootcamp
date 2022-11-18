import React from 'react';
import './menu-section.css';
import AddToCart from '../add-to-cart/add-to-cart';

/* 
  This jsx file creates the 3 different menu categories (coffe, breakfast,bread).

  The "props" paramater takes in the three menu sections: 
  {
    "name":"coffee",
    "offerings": [...]
  },
  {
    "name":"breakfast",
    "offerings": [...]
  },
  {
    "name":"bread",
    "offerings": [...]
  },
    
  The "items" paramater are each categories' "offerings" array
*/

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
