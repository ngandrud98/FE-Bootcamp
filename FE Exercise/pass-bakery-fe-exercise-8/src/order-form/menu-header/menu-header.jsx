import React from 'react';
import styled from 'styled-components';
import logo from '../../images/1p-site-logo.svg';
import breadImage from '../../images/bread.jpeg';
import PageH1 from '../../common/page-h1/page-h1';
import PageSection from '../../common/page-section/page-section';
import PageContainer from '../../common/page-container/page-container';
import BakeryHours from './bakery-hours/bakery-hours';

const TitleArea = styled.div`
  background-image: url(${breadImage});
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 48%;
  padding-right: 54%;
`;

const MenuHeader = (props) => {
  return (
    <PageContainer>
      <PageSection>
        <TitleArea>
          <img src={logo} width="64" alt="" />
          <PageH1>{props.name}</PageH1>

          <address>{props.address}</address>
          <BakeryHours hours={props.hours} />
        </TitleArea>
      </PageSection>
    </PageContainer>
  );
}

export default MenuHeader;
