import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/collapse.css";

const Collapse = ({ title, content }) => {
  const [isClosed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isClosed);
  };

  return (
    <div key={title} onClick={toggleCollapse} className="collapse-container">
      <div
        className={`collapse-container__title ${
          isClosed ? "" : "collapse-container__title--open"
        }`}
      >
        <span className="collapse-container__title-txt">{title}</span>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>

      <div
        className={`collapse-container__content collapse-container__content${
          isClosed ? "--hide" : "--show"
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
