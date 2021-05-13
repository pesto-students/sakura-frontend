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

        const {cartSize=30, cartItemLength=0} = this.props;
        let cssProperties = { }
        cssProperties['--counter-size'] = cartSize/20 + "rem"
        
        return (
            <div className="primary_cart" data-testid="cart" style={cssProperties} onClick={e=>this.props.cartCbk()}>
                <Cart3 className="primary_cart_icon" size={cartSize} />
                <div className="primary_cart_counter" data-testid="cart-counter" >{cartItemLength}</div>
            </div>
        )
    }

}

export type CartProps = {
    /**
     * Cart size defines the size of component on different screen.
     */
     cartSize: number;
     /**
      * Cart item length tells the number of item in user cart.
      */
    cartItemLength: number;
      /**
     * Cart callback to be called on click
     */
    cartCbk: () => void;
    
}