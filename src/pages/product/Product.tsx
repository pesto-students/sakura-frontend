import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {getProductDetailReducer} from "./product.slice"
import { addItemToCart} from "../cart/cart.slice"
import {addItemToFavorite} from "../favorite/favorite.slice"
import { createMatchSelector } from "connected-react-router";


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
import Color from "../../components/Color"
import Spinner from "../../components/Spinner"
import { getProductDetail } from './product.service';



export default function Product(props: any) {
    
    // get state value
    const dispatch = useAppDispatch()
    const productDetails =  useAppSelector((state)=>state.product.productDetail)
    const matchSelector = createMatchSelector("/product/:productId");
    const match: any =  useAppSelector((state)=>matchSelector(state))

   

    const [productState, setProductState] = useState({
        brandName: productDetails[0]?.productClass.brandName,
        productName: productDetails[0]?.name,
        color: productDetails[0]?.color,
        size: productDetails[0]?.size,
        productDesc: productDetails[0]?.description,
        rating: parseInt(productDetails[0]?.productClass.rating),
        originalPrice: productDetails[0]?.inventory.retailPrice,
        discountedPrice:productDetails[0]?.inventory.costPrice,
        productId: productDetails[0]?.id,
        quantity: 1,
        productImage: ""
    })

    useEffect(() => {
        setProductState({
            brandName: productDetails[0]?.productClass.brandName,
            productName: productDetails[0]?.name,
            color: productDetails[0]?.color,
            size: productDetails[0]?.size,
            productDesc: productDetails[0]?.description,
            rating: parseInt(productDetails[0]?.productClass.rating),
            originalPrice: productDetails[0]?.inventory.retailPrice,
            discountedPrice:productDetails[0]?.inventory.costPrice,
            productId: productDetails[0]?.id,
            quantity: 1,
            productImage: productDetails[0]?.productAssets[0].publicAsset.uri
        })
      }, [productDetails])

    // dispatch action
    useEffect(() => {
            dispatch(getProductDetailReducer({productId: match.params.productId }))
      }, []);

    // get image data from productDetails 
    const carousalImages = productDetails[0]?.productAssets.map((item: any)=>item.publicAsset.uri);
    
    // get product defailt 
    let productDetail = {
        brandName: productDetails[0]?.productClass.brandName,
        productName: productDetails[0]?.name,
        color: productDetails[0]?.color,
        size: productDetails[0]?.size,
        productDesc: productDetails[0]?.description,
        rating: parseInt(productDetails[0]?.productClass.rating),
        originalPrice: `INR ${productDetails[0]?.inventory.retailPrice}`,
        discountedPrice:`INR ${productDetails[0]?.inventory.costPrice}`,
        productId: productDetails[0]?.id,
    }

    const handleAddToCartClick = (data: any) => {
        dispatch(addItemToCart(data))
    }

    const handleAddToFavoriteClick = (data: any) => {
        dispatch(addItemToFavorite(data))
    }

    const renderRating = (rating: number) => {
        return  [1,1,1,1,1].map((item, index)=> {
            return (
                <div style={{paddingRight:"0.3rem", display:'inline-block'}} key={index}>
                     <Star isFilled={index < rating?true:false} size={0.9} sizeUnit="rem" />
                </div>
            )
        
        })
    }
    console.log(productDetail)
    return (
       
        <Fragment>
            {/* header */}
            <Header/>

            {/* product details */}
            {(productDetails && productDetails.length > 0) ? (<div className="primary_ProductDetails">
                <Row>    
                    <Col sm={5}>
                        <div className="primary_ProductDetails_carousel">
                            <ErrorBoundary>
                                <Carousel
                                    width="100%"
                                    height="35rem"
                                    interval={2000}
                                    handleClick={(index) => {
                                    console.log("current slide index:", index);
                                    }}
                                    items={carousalImages}
                                />
                            </ErrorBoundary>
        
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className="primary_ProductDetails_desc">
                            <div className="primary_ProductDetails_desc_brandName">
                                {productDetail.brandName}
                            </div>
                            <div className="primary_ProductDetails_desc_productName">
                                {productDetail.productName}
                            </div>
                            <div className="primary_ProductDetails_desc_rating">
                                {renderRating(productDetail.rating)}
                            </div>
                            <div className="primary_ProductDetails_desc_desc">
                            {productDetail.productDesc}
                            </div>
                            <div className="primary_ProductDetails_desc_price">
                                {true &&<div className="primary_ProductDetails_desc_price_productOrignalPrice">{productDetail.originalPrice}</div>}
                                
                                {true && <div className="primary_ProductDetails_desc_price_productDiscountedPrice">{productDetail.discountedPrice}</div>}
                            </div>
                            <div className="primary_ProductDetails_desc_group1">
                                <div className="primary_ProductDetails_desc_group1_color">
                                    <div style={{display:"inline-block", alignSelf:"center"}}>Color:&nbsp;&nbsp;     </div>
                                    <div style={{display:"inline-block"}}>
                                    <Dropdown  
                                        handleChange={(value)=>console.log("dropdown value"+value)} 
                                        initialValue={productDetail.color}
                                        possibleValues={["black","brown", "pink"]}
                                        isColor={true}
                                        />
                                    </div>
                                </div>
                                <div className="primary_ProductDetails_desc_group1_size">
                                <div style={{display:"inline-block", alignSelf:"center"}}>Size:&nbsp;&nbsp;</div>
                                    <div style={{display:"inline-block"}}>
                                    <Dropdown  
                                            handleChange={(value)=>console.log("dropdown value"+value)} 
                                            initialValue={productDetail.size}
                                            isColor={false}
                                            possibleValues={["Small", "Medlim", "Large"]}/>
                                    </div>
                                </div>
                            </div>

                            <div className="primary_ProductDetails_desc_quantity">
                                <div style={{display:"inline-block", alignSelf:"center"}}>Qty:&nbsp;&nbsp;</div> 
                                <QuantityInput handleChange={(value)=>setProductState((oldvalue)=>({...oldvalue,quantity:value}))} quantity={productState.quantity}/>
                            </div>

                             {/* add addToCart and addToBuy bottom right on image*/}
                            <div className="primary_ProductDetails_desc_group2">
                                <AddTocart size={1.5} sizeUnit="rem" addToCartCbk={(e)=>{
                                        e.stopPropagation()
                                        handleAddToCartClick(productState)
                                }}/>

                                <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                                
                                <AddToFavorite size={1.5} sizeUnit="rem" addToFavoriteCbk={(e)=>{
                                    e.stopPropagation()
                                    handleAddToFavoriteClick(productState)

                                }}/>
                                <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                            </div>

                            {/* category */}
                            <div className="primary_ProductDetails_desc_bottom">
                                <div style={{display:"inline-block", alignSelf:"center", fontWeight:300}}>SKU:&nbsp;&nbsp;{productDetail.productId}</div><br/>
                                {/* <div style={{display:"inline-block", alignSelf:"center", fontWeight:300}}>Category:&nbsp;&nbsp;Fashion</div> */}
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </div>):(<Spinner/>)
            }
            {/* footer */}
            <Footer/>
            
        </Fragment>
    )
}



