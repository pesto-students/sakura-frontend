import React, { PropsWithChildren } from "react";
import {
  CaretLeftSquareFill,
  CaretRightSquareFill,
} from "react-bootstrap-icons";
import "./ProductSlider.scss";


export function ProductSlider<T>(props: ProductSliderProps<T>) {
  const {
    sliderColor = "#6B206A",
    sliderHeight = "10rem",
    scrollByValue = 120,
    content = [],
  } = props;
  const contentContainerRef = React.createRef<HTMLDivElement>();
  return (
    <div className="slider-container" style={{ height: sliderHeight }}>
      <div className="slider-button-container">
        <div
          className="left-slider"
          onClick={(e) => {
            contentContainerRef.current?.scrollBy({ left: -scrollByValue });
          }}
        >
          <span style={{ color: sliderColor }}>
            <CaretLeftSquareFill />
          </span>
        </div>
        <div
          className="right-slider"
          onClick={(e) => {
            contentContainerRef.current?.scrollBy({ left: scrollByValue });
          }}
        >
          <span style={{ color: sliderColor }}>
            <CaretRightSquareFill />
          </span>
        </div>
      </div>
      <div className="slider-content-container" ref={contentContainerRef}>
        {content?.map((el) => (
          <div className="slider-content">{el}</div>
        ))}
      </div>
    </div>
  );
}

type ProductSliderProps<T> = {
  sliderColor: string;
  sliderHeight: string;
  scrollByValue: number;
  content: T[];
};
