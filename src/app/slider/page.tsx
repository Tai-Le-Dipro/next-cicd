/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="https://via.placeholder.com/300" alt="feature-1" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
