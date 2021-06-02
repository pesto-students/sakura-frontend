import React from 'react'
import "./Card.scss"
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg"
import defaultImg from "../../assests/images/default/defaultimg.jpg"
import { render } from '@testing-library/react';
import ProductDescription from "../ProductDescription"
import AddTocart from "../AddToCart"
import AddToFavorite from "../AddToFavorite"
import {Img} from 'react-image'


export default class Card extends React.Component<CardProps> {

    constructor(props: CardProps) {
        super(props);
        this.state = {};
    }

    render () {
        const productDesc: ProductDescriptionType = this.props.productDesc;
        // const {onCardClick=()=>{}} = this.props
        return (
            
            <div className="primary_card" onClick={()=>{
                return this.props.handleClick(productDesc.productId)
                }}>
                <div className="primary_card_productHeader">
                    {/* add product image */}
                        <Img
                        src={productDesc.productImage}
                        className="primary_card_productHeader_img"
                        unloader={<Img src={defaultImg} className="primary_card_productHeader_img"/>}
                        />
                    {/* add discount percentage at top left */}
                    {productDesc.discountPercentage && <div className="primary_card_productHeader_discount">
                        -{productDesc.discountPercentage}%
                    </div>}

                    {/* add addToCart and addToBuy bottom right on image*/}
                    <div className="primary_card_productHeader_bottomRight">
                        <AddTocart size={1.5} sizeUnit="rem" addToCartCbk={(e)=>{
                            e.stopPropagation()
                            this.props.handleAddToCartClick(productDesc.productId)}}/>

                        <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                        
                        <AddToFavorite size={1.5} sizeUnit="rem" addToFavoriteCbk={(e)=>{
                            e.stopPropagation()
                            this.props.handleAddToFavoriteClick(productDesc.productId)}}/>
                        <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                    </div>

                </div>
                <div className="primary_card_productDescription">
                    <ProductDescription  
                    productColor={productDesc.productColor}  
                    productSize={productDesc.productSize}  
                    productName={productDesc.productName} 
                    brandName={productDesc.brandName} 
                    discountedPrice={productDesc.discountedPrice}
                    originalPrice={productDesc.originalPrice}
                    rating={productDesc.rating} />
                </div>
            </div>
        )
    }
    
}

export type ProductDescriptionType = {
    /**
     * discountPercentage 
     */
    discountPercentage?: number,
    productId:string,
    rating: number,
    brandName: string,
    productName: string,
    productColor?: string,
    productSize?:string,
    discountedPrice?: string,
    originalPrice: string,
    productImage: string
}

export type CardProps = {
    
    /**
     * specify productDescription
     */
     productDesc: ProductDescriptionType
    /**
     * card click event, take user to product page
     */
     handleClick: (productId: string)=>void
    /**
     * handleAddToCartClick- Add item to cart
     */
     handleAddToCartClick:(productId: string)=>void
    /**
     * handleAddToFavoriteClick - Add item to favoirte
     */
     handleAddToFavoriteClick:(productId: string)=>void
}
