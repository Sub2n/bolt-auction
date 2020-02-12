import React from 'react';
import ProductList from './ProductList';
import Carousel from './Carousel';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';

export const MainBox = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const Conatiner = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 122px;
`;

export const NonMainConatiner = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 122px;
  padding: 1px 0;
  & .non-main-title {
    margin: 50px 0;
  }
`;

export const MainContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 24px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);

  & > h2 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: ${Colors.primary};
    margin-bottom: 12px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(33, 33, 33, 0.08);
`;

const Main = () => {
  return (
    <MainBox>
      <HeaderContainer />
      <Conatiner>
        <Carousel />
        <MainContainer>
          <h2>경매장터 추천상품</h2>
          <Divider />
          <ProductList />
          <ProductList />
        </MainContainer>
      </Conatiner>
      <Footer />
    </MainBox>
  );
};

export default Main;