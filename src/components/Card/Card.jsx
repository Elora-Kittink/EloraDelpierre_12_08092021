import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ name, unit, value, icon }) => {
  return (
    <div className="card">
      <img src={icon} alt=""></img>
      <div>
        <p>
          {value}
          {unit}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
};

export default Card;
