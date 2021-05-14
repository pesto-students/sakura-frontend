import React, { Component } from 'react'
import {Cart3} from "react-bootstrap-icons"
import "./AddToCart.scss"


export default class AddToCart extends React.Component<addToCartProps> {

    constructor(props: addToCartProps) {
        super(props);
        this.state = {};
    }

    render () {

        const {size=2, sizeUnit="rem", addToCartCbk=()=>{}} = this.props;
        let cssProperties: {"--size": String} = {"--size": String(size) + sizeUnit }
        
        return (
            <div className="primary_addToCart" data-testid="addToCart" style={cssProperties} onClick={e=>this.props.addToCartCbk()}>
                <Cart3 className="primary_addToCart_icon"/>
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
     * 
     */
    addToCartCbk: () => void;
    
}
