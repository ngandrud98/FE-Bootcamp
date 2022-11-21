import React from 'react';
import logo from '../../images/1p-site-logo.svg';
import breadImage from '../../images/bread.jpeg';
import PageH1 from '../../common/page-h1/page-h1';
import PageH2 from '../../common/page-h2/page-h2';
import PageSection from '../../common/page-section/page-section';
import PageContainer from '../../common/page-container/page-container';
import styled from 'styled-components';

const TitleArea = styled.div`
  background-image: url(${breadImage});
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: contain;
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

            <PageH2>Hours</PageH2>
            <p>
              Mon-Fri 6AM-5PM PT,<br/>
              Sat-Sun 7AM-4PM PT
            </p>
        </TitleArea>
      </PageSection>
    </PageContainer>
  );
}

export default MenuHeader;
