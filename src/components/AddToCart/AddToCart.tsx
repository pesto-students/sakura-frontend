import React, { Component } from 'react'
import {Cart3} from "react-bootstrap-icons"
import "./AddToCart.scss"


export default class AddToCart extends React.Component<addToCartProps> {

    constructor(props: addToCartProps) {
        super(props);
        this.state = {};
    }

    render () {

        const {size=1, sizeUnit="rem", addToCartCbk=()=>{}} = this.props;
        let width: string = String(size) + sizeUnit
        let height: string = String(size) + sizeUnit

        return (
            <div className="primary_addToCart" data-testid="addToCart" style={{}} onClick={e=>this.props.addToCartCbk(e)}>
                <Cart3 className="primary_addToCart_icon" style={{width: width, height:height}}/>
            </div>
        )
    }

}

export type addToCartProps = {
    /**
     * Size defines the size of component on different screen.
     */
     size: number;
     /**
      * Define unit of size
      */
     sizeUnit: String;
      /**
     * Add clicked item to cart 
     */
    addToCartCbk: (e: any) => void;
    
}
