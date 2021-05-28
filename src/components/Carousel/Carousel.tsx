import React, { Component } from "react";
import {
  Carousel as BootstrapCarousel,
  CarouselItem,
  CarouselItemProps,
} from "react-bootstrap";
import "./Carousel.scss";
import { Img } from "react-image";
import defaultImg from "../../assests/images/default/defaultimg.jpg";

export default class Carousel extends Component<CarouselProps, CarouselStates> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleSelect = (selectedIndex: number, e: any) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    const {
      width = "50rem",
      height = "20rem",
      interval = 1000,
      handleClick = (input) => {},
      items = [],
    } = this.props;
    return (
      <div
        className="primary_carousel"
        style={{ width: width, height: height }}
      >
        <BootstrapCarousel
          style={{ width: width, height: height }}
          nextLabel=""
          prevLabel=""
          activeIndex={this.state.index}
          className="primary_carousel_bootstrapCarousel"
          interval={interval}
          onSelect={this.handleSelect}
        >
          {items.map((item: any, index: any) => {
            return (
              <BootstrapCarousel.Item
                className="carousel-item primary_carousel_item"
                key={index}
                onClick={() => handleClick(this.state.index)}
                style={{ width: width, height: height }}
              >
                <Img
                  src={item}
                  className="primary_carousel_item_img"
                  unloader={
                    <Img
                      src={defaultImg}
                      className="primary_carousel_item_img"
                    />
                  }
                  data-value={item}
                />
              </BootstrapCarousel.Item>
            );
          })}
        </BootstrapCarousel>
      </div>
    );
  }
}

export type CarouselStates = {
  /**
   * Store current slide index
   */
  index: number;
};

export type CarouselProps = {
  /**
   * Specify width of Carousel with unit
   * Note: Don't use % or vh unit
   */
  width: string;
  /**
   * specify height of Carousel with unit
   */
  height: string;
  /**
   * specify slide interval in millseconds
   */
  interval: number;

  /**
   * Pass list of images that need to be displayed in Carousel
   */
  items: any[];
  /**
   * handleClick function defines what should happen on clicking the component
   * gets current silde index
   */
  handleClick: (input: number) => void;
};
