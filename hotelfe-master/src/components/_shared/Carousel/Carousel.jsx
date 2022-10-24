import React from "react";
import Slider from "react-slick";

import "./Carousel.css";

const ArrowNext = ({ onClick }) => (
  <button className="arrow-next" onClick={onClick}>
    <span className="icon-right" />
  </button>
);

const ArrowPrev = ({ onClick }) => (
  <button className="arrow-prev" onClick={onClick}>
    <span className="icon-left" />
  </button>
);

const Carousel = ({
  children,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
}) => (
  <Slider
    nextArrow={<ArrowNext />}
    prevArrow={<ArrowPrev />}
    dots={dots}
    infinite={infinite}
    speed={speed}
    slidesToScroll={slidesToScroll}
    slidesToShow={slidesToShow}
    swipeToSlide
  >
    {children}
  </Slider>
);

Carousel.defaultProps = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default Carousel;
