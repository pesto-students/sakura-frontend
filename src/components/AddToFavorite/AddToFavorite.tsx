import React, { Component } from 'react'
import {Heart} from "react-bootstrap-icons"
import "./AddToFavorite.scss"

export default class AddToFavorite extends React.Component<addToFavoriteProps> {

    constructor(props: addToFavoriteProps) {
        super(props);
        this.state = {};
    }

    render () {

        const {size=1, sizeUnit="rem", addToFavoriteCbk=()=>{}} = this.props;
        let width: string = String(size) + sizeUnit
        let height: string = String(size) + sizeUnit

        return (
            <div className="primary_addToFavorite" data-testid="addToFavorite" style={{}} onClick={(e:any)=>this.props.addToFavoriteCbk(e)}>
                <Heart className="primary_addToFavorite_icon" style={{width: width, height:height}}/>
            </div>
        )
    }
}


export type addToFavoriteProps = {
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
    addToFavoriteCbk: (e: any) => void;
    
}

