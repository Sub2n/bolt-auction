import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Tab from './Tab';
import StoreProducts from './StoreProducts';
import StoreReviews from './StoreReviews';

import * as Styled from '../styles/Styled';
// import Colors from '../styles/Colors';

import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';
import { MdModeEdit } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';

const StoreTo = ({ match }) => {
  return <Redirect to={`${match.path}/products`} />;
};
// TODO : isMyStore true일 경우 프로필 수정 가능 / false일 경우 리뷰 작성 가능
const Store = ({
  isMyStore,
  id,
  info,
  products,
  reviews,
  getInfo,
  getProducts,
  getReviews,
  postReview,
}) => {
  const [activeTab, setActiveTab] = useState('product');

  const tabMenu = [
    { name: '상품', params: `/store/${id}/products`, id: 'product' },
    { name: '리뷰', params: `/store/${id}/reviews`, id: 'review' },
  ];

  useEffect(() => {
    getInfo(id);
    getProducts(id);
    getReviews(id);
  }, [getInfo, getProducts, getReviews, id]);

  return (
    <div>
      <Styled.Title>
        <h1>{isMyStore ? '내 상점' : `다른 사람 상점`}</h1>
      </Styled.Title>
      <Styled.ContentsBox>
        <Container className="profile">
          <ScreenBadge />
          <Row style={{ height: 200, marginBottom: 25 }}>
            <Col align="center" justify="center">
              <img
                className="profile-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                alt=""
              />
            </Col>
          </Row>
          <Row style={{ height: 48, marginBottom: 4 }}>
            <Col
              align="center"
              justify="center"
              className="profile-title"
              xs={4}
              sm={8}
              md={12}
              lg={12}
            >
              <h2>{info.length > 0 ? 'info이름' : '사용자이름'}</h2>{' '}
              {isMyStore ? (
                <MdModeEdit
                  className="edit"
                  style={{
                    color: 'rgba(0, 0, 0, 0.54)',
                    float: 'right',
                    width: 18,
                  }}
                />
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col align="center" justify="center" xs={4} sm={8} md={12} lg={12}>
              <p className="profile-desc">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </Container>
        <Tab
          menu={tabMenu}
          align="center"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Styled.Divider />
        <Switch>
          <Route path={`/store/${id}`} exact component={StoreTo} />
          <Route
            path={`/store/${id}/products`}
            component={() => <StoreProducts items={products} />}
          />
          <Route
            path={`/store/${id}/reviews`}
            component={() => (
              <StoreReviews
                isMyStore={isMyStore}
                id={id}
                reviews={reviews['_embedded']?.reviewDtoList}
                postReview={postReview}
              />
            )}
          />
        </Switch>
      </Styled.ContentsBox>
    </div>
  );
};

export default Store;
