import React, { Component } from 'react'
import {InputGroup} from "react-bootstrap"
import {PatchMinus, PatchPlus} from "react-bootstrap-icons"
import ContentEditable from 'react-contenteditable'
import "./QuantityInput.scss"

export default class QuantityInput extends React.Component<QuantityInputProps, QuantityInputState> {

    constructor(props: QuantityInputProps) {
        super(props);
        // this.contentEditable = React.createRef();
        this.state = {
          currValue: props.quantity,
        };
      }
      
      componentDidUpdate() {
        this.props.handleChange(this.state.currValue)
      }
    
      handleDecrease = (e: any) => {
        this.state.currValue > 0 && this.setState({ currValue: this.state.currValue - 1 });
      }
      handleIncrease = (e: any) => {
         this.setState({ currValue: this.state.currValue + 1 });
      }
    
    render() {

        return (
            <form style={{display:'inline-block'}}>
                <div className="primary_QuantityInput">
                    <div className="primary_QuantityInput_decrease" onClick={this.handleDecrease}>
                        <PatchMinus className="primary_QuantityInput_decrease_icon"/>
                    </div>
                    <div className="primary_QuantityInput_value">{this.state.currValue}</div>
                     
                    <div className="primary_QuantityInput_increase" onClick={this.handleIncrease}>
                        <PatchPlus className="primary_QuantityInput_increase_icon"/>
                    </div>
                </div>
            </form>
        )
    }
}


export type QuantityInputState = {
    /**
     * Store current slide index
     */
    currValue: number;
  };


  export type QuantityInputProps = {
    /* 
     * called on state change
     */
    handleChange: (value: number) => void;
    /**
     * set quantity value
     */
    quantity: number;

  };
  