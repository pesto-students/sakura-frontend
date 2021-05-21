import React, { PropsWithChildren, useRef } from "react";
import {
  CaretLeftSquareFill,
  CaretRightSquareFill,
} from "react-bootstrap-icons";
import "./ProductSlider.scss";

/**
 *
 * The slider can be used to exhibit any kind of component through sliders.
 * The slider has navigation buttons along with horizontal bottom scroll
 */

export const ProductSlider = ({
  sliderColor = "#6B206A",
  sliderHeight = "10rem",
  scrollByValue = 120,
  content = [],
}: ProductSliderProps) => {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="slider-container" style={{ height: sliderHeight }}>
      <div className="slider-button-container">
        <div
          className="left-slider"
          onClick={(e) => {
            scrollSlider(contentContainerRef, -scrollByValue);
          }}
        >
          <span style={{ color: sliderColor }}>
            <CaretLeftSquareFill />
          </span>
        </div>
        <div
          className="right-slider"
          onClick={(e) => {
            scrollSlider(contentContainerRef, scrollByValue);
          }}
        >
          <span style={{ color: sliderColor }}>
            <CaretRightSquareFill />
          </span>
        </div>
      </div>
      <div className="slider-content-container" ref={contentContainerRef}>
        {content?.map((el, indx) => (
          <div className="slider-content" key={indx}>{el}</div>
        ))}
      </div>
    </div>
  );
};

function scrollSlider(
  containerRef: React.RefObject<HTMLDivElement>,
  scrollVal: number
) {
  containerRef.current?.scrollBy({ left: scrollVal });
}

type ProductSliderProps = {
  /**
   * Overall theme of the slider, including buttons, scroll gets color through this property
   */
  sliderColor?: string;
  /**
   * Height of the slider. Any overflow in y-direction will be clipped and in x-direction scroll bar will appear
   */
  sliderHeight?: string;
  /**
   * The value by which scroll bar needs to be forwarded, when clicked on navigation buttons
   */
  scrollByValue?: number;
  /**
   * Array of components which are to be rendered inside the slider
   */
  content: any[];
};
