import React, { Component } from 'react'
import "./Footer.scss"
import AppLogo from "../AppLogo"

export default class Footer extends Component {
    render() {
        return (
            <div className="primary_footer">
                <div className="primary_footer_description">
                    <h1><AppLogo/> Sakura</h1>
                    <div>Sakura is an online store featuring products and deals directly from the factory outlet.<br/> With "Sakura Store" we intend to provide easy navigation and checkout options.</div>
                </div> 
                <div className="primary_footer_company">
                    <h2>Our Company</h2>
                    <div>Privacy policy</div>
                    <div>Terms &amp; Conditions</div>
                    <div>Sitemap</div>
                </div>
                <div className="primary_footer_contact">
                <h2>Contact us</h2>
                    <div>Email: info@sakura.com</div>
                    <div>Phone: +91 144 144 4444</div>
                    <div>Location: BLR-560037</div>
                </div>
            </div>
        )
    }
}
