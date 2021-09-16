import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.icon} alt=""></img>
      <div>
        <p>
          {props.value}
          {props.unit}
        </p>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
