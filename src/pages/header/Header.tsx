import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppLogo from "../../components/AppLogo";
import Cart from "../../components/Cart";
import Favorite from "../../components/Favorite";
import SearchBar from "../../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {getItemFromCart} from "../cart/cart.slice"
import { push } from 'connected-react-router'
import "./header.scss";

export const Header: React.FC = () => {
  const [cartCount, updateCartCount] = useState(0);
  const [favoriteCount, updateFavoriteCount] = useState(0);
  const cartItems =  useAppSelector((state)=>state.cart.cartItems)
  const dispatch = useAppDispatch() 

  useEffect(() => {
    updateCartCount(cartItems.length)
    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  }, [cartItems]);

  useEffect(() => {
    dispatch(getItemFromCart({}))
    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  }, []);

  return (
    <div className="header_container">
      
        <div className="header_container_logo">
          <AppLogo />
        </div>

        <div className="header_container_searchbar">
          <SearchBar searchCbk={() => {}} resultClickFn={() => {}}></SearchBar>
        </div>

        <div id="header-favorite" className="header_container_favorite">
          <Favorite favoriteItemCount={favoriteCount} favoriteCbk={() => {}} />
        </div>

        <div className="header_container_cart">
          {/* Write callback to route to next page upon change */}
          <Cart cartItemCount={cartCount} cartCbk={() => {
             dispatch(push(`/cart`))
          }} />
        </div>
    </div>
  );
};
