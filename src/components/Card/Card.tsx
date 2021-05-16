import React from 'react'
import "./Card.scss"
import productImage from "../../assests/images/productImages/photo-1523275335684-37898b6baf30.jpg"
const Card = () => {
    return (
        <div className="primary_card">
            <div className="primary_card_productHeader">
                <img src={productImage}></img>
            </div>
            <div className="primary_card_productDescription">item</div>
        </div>
    )
}

export default Card
