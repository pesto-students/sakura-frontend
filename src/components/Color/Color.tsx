import React, { Component } from 'react'

export default class Color extends Component<colorProps> {
    constructor (props:colorProps) {
        super(props)
    }
    render() {
        return (
            <div className="primary_productColor" style={{backgroundColor: this.props.colorName}}> </div>
        )
    }
}




export type colorProps = {
    /**
     * select product color
     */
    colorName: any;


}


