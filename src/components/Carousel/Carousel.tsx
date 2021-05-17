import React, { Component } from 'react'
import {Carousel as BootstrapCarousel, CarouselItem, CarouselItemProps} from "react-bootstrap"
import "./Carousel.scss"
import summerSale from "../../assests/images/banner/summerSale.jpg"
import menSale from "../../assests/images/banner/menSale.jpg"
import saleDay from "../../assests/images/banner/saleDay.jpg"
import womenSaleCloth from "../../assests/images/banner/womenSaleCloth.jpg"
import {Img} from 'react-image'
import defaultImg from "../../assests/images/default/defaultimg.jpg"

export default class Carousel extends Component {


    handleClick(e:any){
        console.log("as"+e.target.getAttribute("data-value"))
    }

    render() {
        const items = [summerSale, menSale, saleDay, womenSaleCloth]
        return (
                <div className="primary_carousel">
  
                    <BootstrapCarousel nextLabel="" prevLabel=""  className="primary_carousel_bootstrapCarousel" >
                        {items.map((item, index)=>{
                            return (
                            <BootstrapCarousel.Item className="carousel-item primary_carousel_item" key={index} data-value="itemasdasdasd" onClick={this.handleClick.bind(this)}>
                                <Img
                                src={item}
                                className="primary_carousel_item_img"
                                unloader={<Img src={defaultImg} className="primary_carousel_item_img"/>}
                                data-value={item}

                                />
                            </BootstrapCarousel.Item>
                            )
                        })}
                        
                        
                    </BootstrapCarousel>
                </div>
        )
    }
}
