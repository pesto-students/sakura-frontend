import React, { Fragment } from 'react'
import { Col, Row } from "react-bootstrap";
import "./product.scss"

import Footer from "../../components/Footer"
import Header from "../header"
import Carousel from "../../components/Carousel"
import {ErrorBoundary} from "../../components/ErrorBoundary/ErrorBoundary"
import Star from "../../components/Star"
import Dropdown from "../../components/Dropdown"
import QuantityInput from "../../components/QuantityInput"
import AddTocart from "../../components/AddToCart"
import AddToFavorite from "../../components/AddToFavorite"
import product1_img1 from "../../assests/images/productImages/product1_img1.jpg"
import product1_img2 from "../../assests/images/productImages/product1_img2.jpg"
import product1_img3 from "../../assests/images/productImages/product1_img3.jpg"
import product1_img4 from "../../assests/images/productImages/product1_img4.jpg"

import { truncate } from 'fs/promises';


export default function Product() {
    const itemsList = [product1_img1, product1_img2, product1_img3, product1_img4]

    const renderRating = (rating: number) => {
        return  [1,1,1,1,1].map((item, index)=> {
            return (
                <div style={{paddingRight:"0.3rem", display:'inline-block'}} key={index}>
                     <Star isFilled={index < rating?true:false} size={0.9} sizeUnit="rem" />
                </div>
            )
        
        })
        
    }

    return (
        <Fragment>
            {/* header */}
            <Header/>

            {/* product details */}
            <div className="primary_ProductDetails">
                <Row>    
                    
                    <Col sm={4}>
                        <div className="primary_ProductDetails_carousel">
                            <ErrorBoundary>
                                <Carousel
                                    width="100%"
                                    height="35rem"
                                    interval={2000}
                                    handleClick={(index) => {
                                    console.log("current slide index:", index);
                                    }}
                                    items={itemsList}
                                />
                            </ErrorBoundary>
                        </div>
                    </Col>
                        
                    <Col sm={8}>
                        <div className="primary_ProductDetails_desc">
                            <div className="primary_ProductDetails_desc_brandName">
                                Zara
                            </div>
                            <div className="primary_ProductDetails_desc_productName">
                                Skirt
                            </div>
                            <div className="primary_ProductDetails_desc_rating">
                                {renderRating(4)}
                            </div>
                            <div className="primary_ProductDetails_desc_desc">
                            Short dress in soft cotton jersey with decorative buttons down the front and a wide, 
                            frill-trimmed square neckline with concealed elastication. 
                            Elasticated seam under the bust and short puff sleeves with a small frill trim.
                            </div>
                            <div className="primary_ProductDetails_desc_price">
                                {true &&<div className="primary_ProductDetails_desc_price_productOrignalPrice">30$</div>}
                                
                                {true && <div className="primary_ProductDetails_desc_price_productDiscountedPrice">20$</div>}
                            </div>
                            <div className="primary_ProductDetails_desc_group1">
                                <div className="primary_ProductDetails_desc_group1_color">
                                    <div style={{display:"inline-block", alignSelf:"center"}}>Color:&nbsp;&nbsp;     </div>
                                    <div style={{display:"inline-block"}}>
                                    <Dropdown  
                                        handleChange={(value)=>console.log("dropdown value"+value)} 
                                        initialValue="Yellow" 
                                        possibleValues={["Red", "Green", "Brown"]}
                                        />
                                    </div>
                                </div>
                                <div className="primary_ProductDetails_desc_group1_size">
                                <div style={{display:"inline-block", alignSelf:"center"}}>Size:&nbsp;&nbsp;</div>
                                    <div style={{display:"inline-block"}}>
                                    <Dropdown  
                                            handleChange={(value)=>console.log("dropdown value"+value)} 
                                            initialValue="Small" 
                                            possibleValues={["Small", "Medlim", "Large"]}/>
                                    </div>
                                </div>
                            </div>

                            <div className="primary_ProductDetails_desc_quantity">
                                <div style={{display:"inline-block", alignSelf:"center"}}>Qty:&nbsp;&nbsp;</div> 
                                <QuantityInput handleChange={(value)=>console.log("quantity value:"+value)} quantity={1}/>
                            </div>

                             {/* add addToCart and addToBuy bottom right on image*/}
                            <div className="primary_ProductDetails_desc_group2">
                                <AddTocart size={1.5} sizeUnit="rem" addToCartCbk={(e)=>{}}/>

                                <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                                
                                <AddToFavorite size={1.5} sizeUnit="rem" addToFavoriteCbk={(e)=>{}}/>
                                <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                            </div>

                            {/* category */}
                            <div className="primary_ProductDetails_desc_bottom">
                                <div style={{display:"inline-block", alignSelf:"center", fontWeight:300}}>SKU:&nbsp;&nbsp;#12345AS245</div><br/>
                                <div style={{display:"inline-block", alignSelf:"center", fontWeight:300}}>Category:&nbsp;&nbsp;Fashion</div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </div>
            {/* footer */}
            <Footer/>
            
        </Fragment>
    )
}
