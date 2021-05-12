import React, { Fragment } from "react"
import { Cart3 } from 'react-bootstrap-icons';
import "./Cart.scss"



/**
 * This component tells how many items are there in user cart
 */
export default class Cart extends React.Component<ICartProps>{

    constructor(props: ICartProps) {
        super(props);
        this.state = {};
    }


    render () {

        const {cartSize=30, cartItemLength=0} = this.props;
        let cssProperties = { }
        cssProperties['--counter-size'] = cartSize/20 + "rem"
        
        return (
            <div className="primary_cart" style={cssProperties} onClick={e=>this.props.cartCbk({})}>
                <Cart3 className="primary_cart_icon" size={cartSize} />
                <div className="primary_cart_counter" >{cartItemLength}</div>
            </div>
        )
    }

}

export type ICartProps = {
    /**
     * Cart size defines the size of component on different screen.
     */
     cartSize: number;
     /**
      * Cart item length tells the number of item in user cart.
      */
    cartItemLength: number;
      /**
     * Emits observables on cart click. This callback can be listened, using subscribe,
     * to get user input and call api from it. Further operators like throttle, map etc can be applied
     * on the emitted observable
     */
    cartCbk: (query: Object) => void;
    
}