import React from 'react';
import ProductList from './ProductList';
import { MainBox, NonMainConatiner, MainContainer, Divider } from './Main';
import HeaderContainer from '../containers/HeaderContainer';

const CategoryResult = ({ match }) => {
  const { category } = match.params;
  return (
    <MainBox>
      <HeaderContainer />
      <NonMainConatiner>
        <h1 className="non-main-title">{category}</h1>
        <MainContainer>
          <h2>{category}의 추천 상품</h2>
          <Divider />
          <ProductList />
          <ProductList />
        </MainContainer>
      </NonMainConatiner>
    </MainBox>
  );
};

export default CategoryResult;