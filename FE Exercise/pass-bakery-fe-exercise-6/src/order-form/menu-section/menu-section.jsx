import React from 'react';
import AddToCart from '../add-to-cart/add-to-cart';
import PageH2 from '../../common/page-h2/page-h2';
import PageSection from '../../common/page-section/page-section';
import styled from 'styled-components';

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
`;

const MenuSection = (props) => {

  return (
    <PageSection>
      <PageH2>{props.name}</PageH2>
      <MenuOptions>
          { props.items.map( (item, i) =>
            <MenuOption>
              <AddToCart key={i}  name={item.name} price={item.price} />
            </MenuOption>
          )}
      </MenuOptions>
    </PageSection>
  )
};

export default MenuSection;
