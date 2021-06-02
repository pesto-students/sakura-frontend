import React from 'react'
// import QuantityInput from "../../components/QuantityInput"
import Dropdown from "../../components/Dropdown"
import Card2 from "../../components/Card2"


const Test = () => {

    const dummy  = () => {}
    const arrayItems = ["red", "green", "black"]
    const productDes= {  
        "brandName": "Apple",
        "productName": "watch",
        "productColor": "yellow",
        "productSize":"small",
        "originalPrice": "20$",
        "discountedPrice": "10$",
        "productImage": "asdasd",
        "productId": "12345",
        "quantity": 13
        }
    return (
       
        <div>
            {/* <QuantityInput handleChange={(value)=>console.log("quantity value:"+value)}/> */}
            {/* <Card2
                showAddtoFavoriteButton={true}
                productDesc={productDes}
                handleAddToDeleteClick={(productId)=>{console.log("clicked on product card. "+"product id:", productId)}}
                handleAddToCartClick={(productId)=>{console.log("clicked on add to cart. "+ "product id:", productId)}}
                handleAddToFavoriteClick={(productId)=>{console.log("clicked on add to favorite. "+ "product id:", productId)}}
                /> */}
        </div>
    )
}

export default Test
