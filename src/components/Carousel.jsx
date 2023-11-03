import React, { useState } from "react";
import "../styles/carousel.css";
import CarouselImg from "./CarouselImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const picturesAmount = pictures.length;

  const prevPicture = () => {
    setCurrent(current > 0 ? current - 1 : picturesAmount - 1);
  };

  const nextPicture = () => {
    setCurrent(current < picturesAmount - 1 ? current + 1 : 0);
  };

  return (
    <div className="carousel">
      <div className="carousel__content">
        <CarouselImg src={pictures[current]} />
      </div>

      <div className="carousel__buttons">
        <button
          onClick={prevPicture}
          className="carousel__button"
          type="button"
        >
          <FontAwesomeIcon
            className="carousel__arrow carousel__arrow--left"
            icon={faChevronLeft}
          />
        </button>

        <button
          onClick={nextPicture}
          className="carousel__button"
          type="button"
        >
          <FontAwesomeIcon
            className="carousel__arrow carousel__arrow--right"
            icon={faChevronRight}
          />
        </button>
      </div>

      <div className="carousel__tracking">{`${
        current + 1
      }/${picturesAmount}`}</div>
    </div>
  );
};

export default Carousel;
