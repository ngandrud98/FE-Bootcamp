import React, { useState } from 'react';
import MenuSection from './order-form/menu-section/menu-section';
import { menuData } from './data/menuData.js';
import MenuHeader from './order-form/menu-header/menu-header';
import PageContainer from './common/page-container/page-container';
import ShoppingCart from './shopping-cart/shopping-cart';

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const addToCartAction = (item) => {
    const newItemsList = shoppingCartItems.concat([item]);
    setShoppingCartItems(newItemsList);
  };

  const removeFromCartAction = (key) => {
    const itemsBefore = shoppingCartItems.slice(0, key);
    const itemsAfter = shoppingCartItems.slice(key + 1, shoppingCartItems.length);
    const newItemsList = itemsBefore.concat(itemsAfter);
    setShoppingCartItems(newItemsList);
  };

  return (
    <div>
      <MenuHeader address={menuData.address} hours={menuData.meta.hours} name={menuData.name} />
      <PageContainer>
        {
          menuData.menu.map( (section, i) =>
            <MenuSection
                addToCartAction={addToCartAction}
                items={section.offerings}
                key={i}
                name={section.name} />
          )
        }
      </PageContainer>

      <ShoppingCart
        items={shoppingCartItems}
        removeFromCartAction={removeFromCartAction}
      />
    </div>
  );
}

export default App;
