import React, { Fragment } from "react"
import { Cart3 } from 'react-bootstrap-icons';
import "./Cart.scss"



/**
 * This component tells how many items are there in user cart
 */
export default class Cart extends React.Component<CartProps>{

    constructor(props: CartProps) {
        super(props);
        this.state = {};
    }


    render () {

        const {size=2, sizeUnit="rem", cartItemLength=0} = this.props;
        let cssProperties: {"--size": String, "--icon-size":String} = {"--size": String(size) + sizeUnit, "--icon-size":String(size*1.3) + sizeUnit }
        
        return (
            <div className="primary_cart" data-testid="cart" style={cssProperties} onClick={e=>this.props.cartCbk()}>
                <Cart3 className="primary_cart_icon"/>
                <div className="primary_cart_counter" data-testid="cart-counter" >{cartItemLength}</div>
            </div>
        )
    }

}

export type CartProps = {
    /**
     * Size defines the size of component on different screen.
     */
     size: number;
     /**
      * Define unit of size
      */
     sizeUnit: String;
     /**
      * Cart item length tells the number of item in user favorite.
      */
    cartItemLength: number;
      /**
     * Cart callback to be called on click
     */
    cartCbk: () => void;
    
}