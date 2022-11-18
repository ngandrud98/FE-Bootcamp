import React from 'react';
import MenuSection from './order-form/menu-section/menu-section';
import { menuData } from './data/menuData.js';
import MenuHeader from './order-form/menu-header/menu-header';
import PageContainer from './common/page-container/page-container';

function App() {
  return (
  <>
    <MenuHeader address={menuData.address} hours={menuData.meta.hours} name={menuData.name} />

    <PageContainer>
      {
        menuData.menu.map( (section, i) =>
          <MenuSection items={section.offerings} key={i} name={section.name} />
        )
      }
    </PageContainer>
  </>
  );
}

export default App;
