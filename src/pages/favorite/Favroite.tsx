import React, { Component, useEffect, useState, Fragment } from "react";
import { push } from "connected-react-router";
import "./Favorite.scss";

import Footer from "../../components/Footer";
import Header from "../header";
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import Card2 from "../../components/Card2";
import Test from "../../pages/Test/Test";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {
  getItemFromFavorite,
  addItemToFavorite,
  updateItemToFavorite,
  removeItemToFavorite,
} from "../favorite/favorite.slice";
import { addItemToCart } from "../cart/cart.slice";

export default function Favorite(props: any) {
  const favoriteItems = useAppSelector((state) => state.favorite.favoriteItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItemFromFavorite({}));
  }, []);

  const populateFavoriteItems = () => {
    return favoriteItems.map((item: any, index: number) => {
      let productDescription = {
        brandName: item.brandName,
        productName: item.productName,
        productColor: item.color,
        productSize: item.size,
        originalPrice: `INR ${item.originalPrice}`,
        discountedPrice: `INR ${item.discountedPrice}`,
        productImage: item.productImage,
        productId: item.productId,
        quantity: item.quantity,
      };
      return (
        <div
          style={{
            paddingBottom: "1rem",
            display: "inline-block",
            width: "100%",
          }}
          key={index}
        >
          <Card2
            height="15rem"
            showAddtoCartButton={true}
            productDesc={productDescription}
            handleQuantityChange={(value) => {
              dispatch(updateItemToFavorite({ ...item, quantity: value }));
            }}
            handleAddToDeleteClick={(productId) => {
              dispatch(removeItemToFavorite({ productId }));
            }}
            handleAddToCartClick={(productId) => {
              dispatch(removeItemToFavorite({ productId }));
              dispatch(addItemToCart(item));
            }}
          />
        </div>
      );
    });
  };

  return (
    <div className="primary_favorite">
      {/* header */}
      {/* page heading */}
      <div className="primary_favorite_heading">Favorite List</div>
      {/* favorite details container */}
      <div className="primary_favorite_details">
        {favoriteItems.length > 0 ? (
          <Row>
            <Col sm={12}>
              <div className="primary_favorite_details_items">
                {populateFavoriteItems()}
              </div>
            </Col>
          </Row>
        ) : (
          <Fragment>
            <div className="primary_favorite_details_empty">
              Your Cart is empty. &nbsp;&nbsp;
            </div>{" "}
            <div style={{ textAlign: "center" }}>
              <Button
                width="30rem"
                buttonText="Click here to Explore Products"
                handleOnClick={(e) => {
                  dispatch(push(`/`));
                }}
              />
            </div>{" "}
          </Fragment>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
