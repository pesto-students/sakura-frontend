import React, { Component } from 'react'
import {Dropdown as BootstrapDropdown, DropdownButton} from 'react-bootstrap'
import "./Dropdown.scss"
import Color from "../Color"


export default class Dropdown extends Component<DropdownProps, DropdownState> {
    
    constructor(props: DropdownProps){
        super(props);
        this.state = {
            currValue: props.initialValue
        };
      }
      
    handleSelect = (eventKey: any, event: any) =>{
        this.setState({ currValue: eventKey});
        this.props.handleChange(this.state.currValue)
    }
    render() {
        const { possibleValues=[], isColor=false } = this.props;

        return (
            <DropdownButton 
            id="dropdown-basic-button"
            title= {isColor? <Color colorName={this.state.currValue}/>: this.state.currValue }
            size="sm"  
            variant="Default" 
            bsPrefix="primary_Dropdown"
            onSelect={this.handleSelect}>
            {possibleValues.map((item, idx)=>{
               return <BootstrapDropdown.Item key={idx} eventKey={item} bsPrefix="primary_Dropdown_item">
                   {isColor? <Color colorName={item}/>: item }
               </BootstrapDropdown.Item>
            })}
            </DropdownButton>
        )
    }
}




export type DropdownState = {
    /**
     * Store current value of color
     */
    currValue: any;
  };


  export type DropdownProps = {
    /* 
     * Called on state change
     */
    handleChange: (value: string) => void;
    /**
     * set initial value for DropDown
     */
    initialValue: any;
    /**
     * set possible values for dropdown which appears on toggle
     */
    possibleValues: any[];
    /**
     * isColor 
     */
    isColor?: Boolean;

  };
  