import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/rating.css";

const Rating = ({ rate }) => (
  <div className="rating">
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <FontAwesomeIcon
          className={`${index < rate ? "rating rating--is-colored" : "rating"}`}
          icon={faStar}
        />
      ))}
  </div>
);

export default Rating;
