import React, { Component } from 'react'
import "./Cart.scss"

import Footer from "../../components/Footer"
import Header from "../header"
import {ErrorBoundary} from "../../components/ErrorBoundary/ErrorBoundary"
import Card2 from "../../components/Card2"
import Test from "../../pages/Test/Test"
import { Col, Row } from "react-bootstrap";
import Button from "../../components/Button"


export default class cart extends Component {

    populateCartItems = () => {
        return  [1,1,1,1,1].map((item, index)=> {
            return (
                <div style={{paddingBottom:"1rem", display:'inline-block'}} key={index}>
                     <Test/>
                </div>
            )
        
        })   
    }

    render() {
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
                            {this.populateCartItems()}
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
                                    50$
                                </div>
                                <div className="primary_cart_details_checkout_shipping_amount_heading">
                                    Shipping  
                                </div>
                                <div className="primary_cart_details_checkout_shipping_amount_total">
                                    10$
                                </div>
                                <div className="primary_cart_details_checkout_tax_amount_heading">
                                    Tax  
                                </div>
                                <div className="primary_cart_details_checkout_tax_amount_total">
                                    40$
                                </div>
                                <hr className="primary_cart_details_checkout_divider"/>
                                <div className="primary_cart_details_checkout_total_amount_heading">
                                    Total amount 
                                </div>
                                <div className="primary_cart_details_checkout_total_amount_total">
                                    40$
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
}

