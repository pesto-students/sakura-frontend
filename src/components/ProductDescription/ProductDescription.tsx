import React, { Component, Fragment } from 'react'
import { Border } from 'react-bootstrap-icons'
import "./ProductDescription.scss"
import Star from "../Star"
import Color from "../Color"

export default class ProductDescription extends React.Component<productDescription> {

    constructor(props: productDescription) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        border: "0rem"
    };

    
  renderRating = (rating: number) => {
        return  [1,1,1,1,1].map((item, index)=> {
            return (
                <div style={{paddingRight:"0.3rem", display:'inline-block'}} key={index}>
                     <Star isFilled={index < rating?true:false} size={0.7} sizeUnit="rem" />
                </div>
            )
        
        })
        
    }
    

    render() {
        const {productColor, productSize, productName="Pant", brandName="BATA", rating, border, originalPrice, discountedPrice, discountPercentage} = this.props;
        
        return (
            // <div className="card" style={{width:"14rem", border:"yellow", backgroundColor: "DodgerBlue", height:"10rem"}}>
            //     <div>header</div>
                <div className="primary_productDescription" style={{border:border}}>

                        <div className="primary_productDescription_rating">{this.renderRating(rating)}</div>
                        
                        <div className="primary_productDescription_brandName">{brandName}</div>
                        <div className="primary_productDescription_productName">{productName}</div>
                        <div className="primary_productDescription_productColor">
                            {productColor && <Fragment>Color: <Color colorName={productColor}/></Fragment>}
                            {productColor && <Fragment><div style={{paddingLeft:"1rem", display:"inline-block"}}></div></Fragment>}
                            {productSize && <div className="primary_productDescription_productSize">Size: {productSize}</div>}
                        </div>
                        <div className="primary_productDescription_ProductPrice">
                            {discountedPrice? <div className="primary_productDescription_ProductPrice_productOrignalPrice">{originalPrice}</div> : <div className="primary_productDescription_ProductPrice_productOrignalPrice" style={{textDecoration:"none", fontWeight:"bold"}}>{originalPrice}</div>}
                            
                            {discountedPrice && <div className="primary_productDescription_ProductPrice_productDiscountedPrice">{discountedPrice}</div>}
                        </div>
                </div>
            // </div>
        )
    }
}




export type productDescription = {
    /**
     * select product color
     */
     productColor?: string;
     /**
      * select product Size
      */
     productSize?: string;
    /**
     * select product name
     */
     productName: string;
     /**
      * select brand name 
      */
    brandName: string;
    /**
     * select rating
     */
     rating: number;
     /**
      * specify border 
      */
      border: string
    /**
     * original price 
     */
     originalPrice: string,
    /**
     * discountedPrice
     */
     discountedPrice?: string

    /**
     * discountPercentage
     */
     discountPercentage?: number
}

