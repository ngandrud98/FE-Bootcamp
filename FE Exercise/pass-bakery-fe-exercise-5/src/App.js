import React from 'react';
import './App.css';
import MenuSection from './order-form/menu-section/menu-section';
import { menuData } from './data/menuData.js';
import MenuHeader from './order-form/menu-header/menu-header';

function App() {
  return (
  <>
    <MenuHeader address={menuData.address} name={menuData.name} />

    <div class="container">
      {
        menuData.menu.map( (section, i) =>
          <MenuSection items={section.offerings} key={i} name={section.name} />
        )
      }
    </div>
  </>
  );
}

export default App;
