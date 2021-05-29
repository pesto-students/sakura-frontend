import React from 'react'
import "./Card2.scss"
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg"
import defaultImg from "../../assests/images/default/defaultimg.jpg"
import AddTocart from "../AddToCart"
import AddToDelete from "../AddToDelete"
import AddToFavorite from "../AddToFavorite"
import {Img} from 'react-image'
import QuantityInput from "../QuantityInput"


export default class Card2 extends React.Component<Card2Props> {

    constructor(props: Card2Props) {
        super(props);
        this.state = {};
    }

    render () {
        const productDesc: ProductDescriptionType = this.props.productDesc;
        const {showAddtoCartButton=false, showAddtoFavoriteButton=false} = this.props
        const {handleAddToFavoriteClick, handleAddToDeleteClick, handleAddToCartClick} = this.props
        return (
            <div className= "container_primary_card2">
                <div className="primary_card2">
                    <div className="primary_card2_productHeader">
                        {/* add product image */}
                            <Img
                            src={productImage}
                            className="primary_card2_productHeader_img"
                            unloader={<Img src={defaultImg} className="primary_card2_productHeader_img"/>}
                            />
                    </div>
                    <div className="primary_card2_productDesc">
                            <div className="primary_card2_productDesc_brandName">
                                {productDesc.brandName}
                            </div>
                            <div className="primary_card2_productDesc_productName">
                                {productDesc.productName}
                            </div>
                            <div className="primary_card2_productDesc_quantity">
                                <QuantityInput handleChange={(value)=>console.log(value)} quantity={1}/>
                            </div>
                            <div className="primary_card2_productDesc_color">
                                Color:&nbsp;&nbsp;{productDesc.productColor}
                            </div>
                            <div className="primary_card2_productDesc_size">
                                Size:&nbsp;&nbsp;{productDesc.productSize}
                            </div>
                            <div className="primary_card2_productDesc_actions">
                                {(true) &&
                                <div style={{display:"inline-block", paddingRight:"1rem"}}>
                                    <AddToDelete size={1.1} sizeUnit="rem" addToDeleteCbk={(e)=>{
                                    e.stopPropagation()
                                    handleAddToDeleteClick(productDesc.productId)}}/>
                                </div>}
                                {(showAddtoCartButton && handleAddToCartClick) &&
                                <div style={{display:"inline-block", paddingRight:"1rem"}}>
                                    <AddTocart size={1.1} sizeUnit="rem" addToCartCbk={(e)=>{
                                    e.stopPropagation()
                                    handleAddToCartClick(productDesc.productId)}}/>
                                </div>}

                                {(showAddtoFavoriteButton && handleAddToFavoriteClick) &&
                                <div style={{display:"inline-block", paddingRight:"1rem"}}>
                                    <AddToFavorite size={1.1} sizeUnit="rem" addToFavoriteCbk={(e)=>{
                                    e.stopPropagation()
                                    handleAddToFavoriteClick(productDesc.productId)}}/>
                                </div>}
                            </div>
                            <div className="primary_card2_productDesc_price">
                                Price:&nbsp;&nbsp;{productDesc.originalPrice}
                            </div>

                    </div>
                </div>
            </div>
        )
    }
    
}

export type ProductDescriptionType = {
    /**
     * discountPercentage 
     */
    productId:string,
    quantity:number,
    brandName: string,
    productName: string,
    productColor?: string,
    productSize?:string,
    discountedPrice?: string,
    originalPrice: string,
    productImage: string
}

export type Card2Props = {
    
    /**
     * specify productDescription
     */
     productDesc: ProductDescriptionType
    /**
     * handleAddToCartClick- Add item to cart
     */
     handleAddToCartClick?:(productId: string)=>void
    /**
     * handleAddToFavoriteClick - Add item to favoirte
     */
     handleAddToFavoriteClick?:(productId: string)=>void
    /**
     * handleDelete:: remove item from list
     */
     handleAddToDeleteClick:(productId: string)=>void
    /**
     * showAddtoCartButton -  
     */
    showAddtoCartButton?: Boolean
    /**
     * showAddtoFavoriteButton -  
     */
     showAddtoFavoriteButton?: Boolean
}
