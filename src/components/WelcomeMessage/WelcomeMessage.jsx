import React from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = (props) => {
  return (
    <div>
      <h1>Bonjour {props.userName}</h1>
      <p>Félicitations</p>
    </div>
  );
};

export default WelcomeMessage;
