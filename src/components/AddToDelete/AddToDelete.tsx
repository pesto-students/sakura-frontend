import React, { Component } from 'react'
import {Trash} from "react-bootstrap-icons"
import "./AddToDelete.scss"

export default class AddToDelete extends React.Component<addToDeleteProps> {

    constructor(props: addToDeleteProps) {
        super(props);
        this.state = {};
    }

    render () {

        const {size=1, sizeUnit="rem", addToDeleteCbk=()=>{}} = this.props;
        let width: string = String(size) + sizeUnit
        let height: string = String(size) + sizeUnit

        return (
            <div className="primary_addToDelete" data-testid="addToDelete" style={{}} onClick={(e:any)=>this.props.addToDeleteCbk(e)}>
                <Trash className="primary_addToDelete_icon" style={{width: width, height:height}}/>
            </div>
        )
    }
}


export type addToDeleteProps = {
    /**
     * Size defines the size of component on different screen.
     */
     size: number;
     /**
      * Define unit of size
      */
     sizeUnit: String;
      /**
     * Add clicked item to favorite
     */
    addToDeleteCbk: (e: any) => void;
    
}

