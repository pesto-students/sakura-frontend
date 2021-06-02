import { type } from 'os'
import React, { Component } from 'react'
import "./Button.scss"

export default class Button extends React.Component<buttonProps> {

    constructor(props:buttonProps) {
        super(props)
        this.state = {}
    }

    render() {
        const {width, handleOnClick, buttonText} = this.props;
        return (
            <button className="primary_Button" style={{width: width}} onClick={e=>handleOnClick(e)}>{buttonText}</button>
        )
    }
}

export type buttonProps = {
    /**
     * width : eg width="4rem", width="50%"
     */
    width: string
    /**
     * handleOnClick
     */
     handleOnClick: (e: any)=>void
    /**
     * buttonText
     */
    buttonText: string
}
