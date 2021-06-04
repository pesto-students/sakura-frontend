import React, { Component, Fragment, useEffect, useState } from "react";
import { push } from "connected-react-router";
import "./Cart.scss";

import Footer from "../../components/Footer";
import Header from "../header";
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import Card2 from "../../components/Card2";
import Test from "../../pages/Test/Test";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {
  getItemFromCart,
  addItemToCart,
  updateItemToCart,
  removeItemToCart,
  emptyCart,
} from "../cart/cart.slice";
import {
  showLoginModal,
  showLogoutModal,
} from "../authenticator/authenticator.slice";
import { addItemToFavorite } from "../favorite/favorite.slice";
import { Modal, Form } from "react-bootstrap";

export default function Cart(props: any) {
  const [amount, setAmount] = useState({
    item: 0,
    tax: 0,
    shipping: 0,
  });
  // modal state and function
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);
  const handleOrderPlacedModalClose = () => setShowOrderPlacedModal(false);
  const handleOrderPlacedModalShow = () => setShowOrderPlacedModal(true);

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const userState = useAppSelector((state) => state.auth.userState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItemFromCart({}));
    // TODO: call api and get items currently present in favorite and cart
    // TODO: useAppSelector to get precise state of products
  }, []);

  useEffect(() => {
    let itemTotal: number = cartItems.reduce(
      (a: any, b: any) =>
        parseInt(a) +
        (parseInt(b["discountedPrice"]) * parseInt(b["quantity"]) || 0),
      0
    );
    setAmount((oldvalue) => ({
      ...oldvalue,
      item: Math.floor(itemTotal),
      shipping: Math.floor(itemTotal / 100),
      tax: Math.floor((itemTotal * 18) / 100),
    }));
  }, [cartItems]);

  const populateCartItems = () => {
    return cartItems.map((item: any, index: number) => {
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
            showAddtoFavoriteButton={true}
            productDesc={productDescription}
            handleQuantityChange={(value) => {
              dispatch(updateItemToCart({ ...item, quantity: value }));
            }}
            handleAddToDeleteClick={(productId) => {
              dispatch(removeItemToCart({ productId }));
            }}
            handleAddToFavoriteClick={(productId) => {
              dispatch(removeItemToCart({ productId }));
              dispatch(addItemToFavorite(item));
            }}
          />
        </div>
      );
    });
  };

  const collectInfoModal = () => {
    return (
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email*"
                value={userState?.userData?.email}
                required={true}
                disabled={true}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone no*"
                required={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address*"
                required={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Cash on Delivery"
                checked={true}
              />
            </Form.Group>
            <Button
              width="8rem"
              buttonText="Place Order"
              handleOnClick={(e) => {
                e.preventDefault();
                handleModalClose();
                handleOrderPlacedModalShow();
                dispatch(emptyCart({}));
              }}
            />
            &nbsp; &nbsp;Amount to be paid{" "}
            <b>{`INR ${amount.item + amount.tax + amount.shipping}`}</b>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            width="4rem"
            buttonText="Close"
            handleOnClick={handleModalClose}
          />
        </Modal.Footer>
      </Modal>
    );
  };

  const orderPlacedModal = () => {
    return (
      <Modal show={showOrderPlacedModal} onHide={handleOrderPlacedModalClose}>
        <Modal.Header>
          <Modal.Title>Order status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order placed successfully. Order Id:{" "}
          <b>{Date.now() + String(Math.floor(Math.random() * 10000))}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button
            width="4rem"
            buttonText="Close"
            handleOnClick={handleOrderPlacedModalClose}
          />
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="primary_cart">
      {/* header */}
      {/* page heading */}
      <div className="primary_cart_heading">Shopping Cart</div>
      {/* cart details container */}
      <div className="primary_cart_details">
        {cartItems.length > 0 ? (
          <Row>
            <Col sm={8}>
              <div className="primary_cart_details_items">
                {populateCartItems()}
              </div>
            </Col>
            <Col sm={4}>
              <div className="primary_cart_details_checkout">
                <div className="primary_cart_details_checkout_heading">
                  The total amount of
                </div>
                <div className="primary_cart_details_checkout_item_amount_heading">
                  Item
                </div>
                <div className="primary_cart_details_checkout_item_amount_total">
                  {`INR ${amount.item}`}
                </div>
                <div className="primary_cart_details_checkout_shipping_amount_heading">
                  Shipping(10%)
                </div>
                <div className="primary_cart_details_checkout_shipping_amount_total">
                  {`INR ${amount.shipping}`}
                </div>
                <div className="primary_cart_details_checkout_tax_amount_heading">
                  Tax(18%)
                </div>
                <div className="primary_cart_details_checkout_tax_amount_total">
                  {`INR ${amount.tax}`}
                </div>
                <hr className="primary_cart_details_checkout_divider" />
                <div className="primary_cart_details_checkout_total_amount_heading">
                  Total amount
                </div>
                <div className="primary_cart_details_checkout_total_amount_total">
                  {`INR ${amount.item + amount.tax + amount.shipping}`}
                </div>
                <div className="primary_cart_details_checkout_payment_button">
                  <Button
                    width="100%"
                    buttonText="Checkout"
                    handleOnClick={(e) => {
                      userState.isLoggedIn?handleModalShow():dispatch(showLoginModal())
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Fragment>
            <div className="primary_cart_details_empty">
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
      {collectInfoModal()}
      {orderPlacedModal()}
    </div>
  );
}
