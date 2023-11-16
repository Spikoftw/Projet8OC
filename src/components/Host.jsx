import React from "react";
import "../styles/host.css";

const Host = ({ name, picture }) => (
  <div className="host">
    <h3 className="host__name">
      {name.split(" ").map((part, index) => (
        <span key={name + index}>
          {part} <br />
        </span>
      ))}
    </h3>
    <div className="host__picture">
      <img src={picture} alt={name} />
    </div>
  </div>
);

export default Host;
