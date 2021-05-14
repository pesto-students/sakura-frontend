import React from 'react'
import {Star as Rating, StarFill as RatingFill} from "react-bootstrap-icons"
import "./Star.scss"

export default class Star extends React.Component<StarProps> {

    constructor(props: StarProps){
        super(props)
        this.state = {}
    }

    render(){
        const {size=1, sizeUnit="rem", isFilled=true} =  this.props
        let ComponentSize: string = String(size*1.3) + sizeUnit
        return (
            <div className="primary_star" data-testid="star">
                {isFilled?<RatingFill className="primary_star_filled" data-testid="filled-star" style={{width: ComponentSize, height:ComponentSize}}/> : <Rating  className="primary_star_empty" data-testid="empty-star" id="empty-star" style={{width: ComponentSize, height:ComponentSize}}/>}
            </div>
        )
    }
   
}


export type StarProps = {
    /**
     * Size defines the size of component on different screen.
     */
    size: number;
    /**
     * Define unit of size
     */
    sizeUnit: String;
    
     /**
      *Weather you want empty or filled star 
      */
    isFilled: Boolean;

    
}
