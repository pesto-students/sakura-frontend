import React, { Component } from 'react'
import {Carousel as BootstrapCarousel, CarouselItem, CarouselItemProps} from "react-bootstrap"
import "./Carousel.scss"

export default class Carousel extends Component {
    render() {
        return (
                <div className="primary_carousel">
                    <BootstrapCarousel>
                        <CarouselItem>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </CarouselItem>
    
                    </BootstrapCarousel>
                </div>
        )
    }
}
