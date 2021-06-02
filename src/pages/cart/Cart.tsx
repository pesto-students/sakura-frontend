import React, { Component, useEffect,useState } from 'react'
import "./Cart.scss"

import Footer from "../../components/Footer"
import Header from "../header"
import {ErrorBoundary} from "../../components/ErrorBoundary/ErrorBoundary"
import Card2 from "../../components/Card2"
import Test from "../../pages/Test/Test"
import { Col, Row } from "react-bootstrap";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {getItemFromCart, addItemToCart, updateItemToCart, removeItemToCart} from "../cart/cart.slice"


export default function Cart(props: any) {
    const [amount, setAmount] = useState({
        item: 0,
        tax: 0, 
        shipping: 0
    }) 
    const cartItems =  useAppSelector((state)=>state.cart.cartItems)
    const dispatch = useAppDispatch() 

    useEffect(() => {
        dispatch(getItemFromCart({}))
        // TODO: call api and get items currently present in favorite and cart
        // TODO: useAppSelector to get precise state of products
    }, []);

    useEffect(()=>{
        let itemTotal: number = cartItems.reduce((a: any, b: any) => parseInt(a) + (parseInt(b["discountedPrice"])*parseInt(b["quantity"]) || 0), 0)
        setAmount((oldvalue)=>({...oldvalue,item:Math.floor(itemTotal), shipping: Math.floor(itemTotal/100),tax:Math.floor((itemTotal*18)/100) }))

    }, [cartItems])

    const populateCartItems = () => {
        return  cartItems.map((item: any, index: number)=> {
            let productDescription = {
                "brandName": item.brandName,
                "productName": item.productName,
                "productColor": item.color,
                "productSize":item.size,
                "originalPrice": `INR ${item.originalPrice}`,
                "discountedPrice": `INR ${item.discountedPrice}`,
                "productImage": item.productImage,
                "productId": item.productId,
                "quantity": item.quantity
            }
            console.log(item)
            return (
                <div style={{paddingBottom:"1rem", display:'inline-block', width:"100%"}} key={index}>
                        
                      <Card2
                        height= "15rem"
                        showAddtoFavoriteButton={true}
                        productDesc={productDescription}
                        handleQuantityChange={(value)=>{dispatch(updateItemToCart({...item, quantity: value}))}}
                        handleAddToDeleteClick={(productId)=>{console.log("clicked on product card. "+"product id:", productId)}}
                        handleAddToFavoriteClick={(productId)=>{console.log("clicked on add to favorite. "+ "product id:", productId)}}
                    />
                </div>
            )
        
        })   
    }

    return (
        <div className="primary_cart">
                {/* header */}
                <Header/>
                {/* page heading */}
                <div className="primary_cart_heading">Shopping Cart</div>
                {/* cart details container */}
                <div className="primary_cart_details">
                <Row>    
                    <Col sm={8}>
                        <div className="primary_cart_details_items" >
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
                                    Shipping  
                                </div>
                                <div className="primary_cart_details_checkout_shipping_amount_total">
                                {`INR ${amount.shipping}`}
                                </div>
                                <div className="primary_cart_details_checkout_tax_amount_heading">
                                    Tax  
                                </div>
                                <div className="primary_cart_details_checkout_tax_amount_total">
                                {`INR ${amount.tax}`}
                                </div>
                                <hr className="primary_cart_details_checkout_divider"/>
                                <div className="primary_cart_details_checkout_total_amount_heading">
                                    Total amount 
                                </div>
                                <div className="primary_cart_details_checkout_total_amount_total">
                                {`INR ${amount.item + amount.tax + amount.shipping}`}
                                </div>
                                <div className="primary_cart_details_checkout_payment_button">
                                    <Button width = "100%" buttonText="Checkout" handleOnClick={(e)=>{}}/>
                                </div>
                                
                        </div>
                    </Col>
                </Row>
                </div>

                {/* Footer */}
                <Footer/>
            </div>
    )

}

