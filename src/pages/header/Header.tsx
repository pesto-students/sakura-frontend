import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppLogo from "../../components/AppLogo";
import Cart from "../../components/Cart";
import Favorite from "../../components/Favorite";
import SearchBar from "../../components/SearchBar";
import "./header.scss";

export const Header: React.FC = () => {
  const [cartCount, updateCartCount] = useState(0);
  const [favoriteCount, updateFavoriteCount] = useState(0);

  useEffect(() => {
    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  });

  return (
    <Row className="header-container">
      <Col xs={2}>
        <div className="header-content">
          <AppLogo />
        </div>
      </Col>
      <Col xs={8}>
        <div className="header-content">
          <SearchBar searchCbk={() => {}} resultClickFn={() => {}}></SearchBar>
        </div>
      </Col>
      <Col xs={1}>
        <div id="header-favorite" className="header-content">
          <Favorite favoriteItemCount={favoriteCount} favoriteCbk={() => {}} />
        </div>
      </Col>
      <Col xs={1}>
        <div className="header-content">
          {/* Write callback to route to next page upon change */}
          <Cart cartItemCount={cartCount} cartCbk={() => {}} />
        </div>
      </Col>
    </Row>
  );
};
