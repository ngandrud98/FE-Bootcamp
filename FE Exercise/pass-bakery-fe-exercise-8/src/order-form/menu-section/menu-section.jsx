import React from 'react';
import styled from 'styled-components';
import AddToCart from '../add-to-cart/add-to-cart';
import PageH2 from '../../common/page-h2/page-h2';
import PageSection from '../../common/page-section/page-section';

const MenuOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;
const MenuOption = styled.li`
  box-sizing: border-box;
  display: inline-block;
  margin: 0 0 24px;
  width: 48%;
  
  :nth-child(odd) {
    margin-right: 24px;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    
    :nth-child(odd) {
      margin-right: 0;
    }
  }
`;

const MenuSection = (props) => {

  return (
    <PageSection>
      <PageH2>{props.name}</PageH2>
      <MenuOptions>
          { props.items.map( (item, i) =>
            <MenuOption key={i}>
              <AddToCart
                addToCartAction={props.addToCartAction}
                key={i}
                name={item.name}
                price={item.price} />
            </MenuOption>
          )}
      </MenuOptions>
    </PageSection>
  )
};

export default MenuSection;
