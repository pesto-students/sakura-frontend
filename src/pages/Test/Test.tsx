import React from 'react'
import Cart from "../../components/Cart/Cart"
import Favorite from "../../components/Favorite/Favorite"
import Star from "../../components/Star/Star"
import AddToCart from "../../components/AddToCart/AddToCart"
import ProductDescription from '../../components/ProductDescription'
import Card from "../../components/Card"


const Test = () => {

    const dummy  = () => {}
    return (
        <div>
            {/* <Cart size={1} sizeUnit="rem" addToCartCbk={dummy}/>
            <Favorite size={1} sizeUnit="rem" favoriteItemLength={0} favoriteCbk = {dummy}/>
            <Star isFilled={true} size={5} sizeUnit="rem"/>
            <ProductDescription productColor="yellow"  productSize="small" productName="pant" brandName="BATA" rating={3}/> */}
            <Card/>
        </div>
    )
}

export default Test
