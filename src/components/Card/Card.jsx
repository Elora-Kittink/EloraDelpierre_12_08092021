import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ name, unit, value, icon }) => {
  return (
    <div className="card">
      <img src={icon} alt=""></img>
      <div className="card_content">
        <p className="card_value" style={{ fontWeight: 700 }}>
          {value}
          {unit}
        </p>
        <p className="card_name" style={{ color: "#74798C" }}>
          {name}
        </p>
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
