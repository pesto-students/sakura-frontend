import React from 'react'
import "./Card.scss"
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg"
import defaultImg from "../../assests/images/default/defaultimg.jpg"
import { render } from '@testing-library/react';
import ProductDescription from "../ProductDescription"
import AddTocart from "../AddToCart"
import AddToFavorite from "../AddToFavorite"
import {Img} from 'react-image'


export default class Card extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render () {
        let defaultimg = "../../assests/images/default/defaultimg.jpg"
        return (
            
            <div className="primary_card">
                <div className="primary_card_productHeader">
                    {/* add product image */}
                        <Img
                        src={productImage}
                        className="primary_card_productHeader_img"
                        unloader={<Img src={defaultImg} className="primary_card_productHeader_img"/>}
                        />
                    {/* add discount percentage at top left */}
                    <div className="primary_card_productHeader_discount">
                        -15%
                    </div>

                    {/* add addToCart and addToBuy bottom right on image*/}
                    <div className="primary_card_productHeader_bottomRight">
                        <AddTocart size={1.5} sizeUnit="rem" addToCartCbk={()=>{}}/>
                        <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                        <AddToFavorite size={1.5} sizeUnit="rem" addToFavoriteCbk={()=>{}}/>
                        <div style={{marginLeft:"0.5rem", display:"inline-block"}}></div>
                    </div>

                </div>
                <div className="primary_card_productDescription">
                    <ProductDescription  productColor="black"  productSize="medium"  productName="Watch" brandName="Apple" rating={5} />
                </div>
            </div>
        )
    }
    
}
