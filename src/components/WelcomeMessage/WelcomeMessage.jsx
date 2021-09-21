import React from "react";
import "./WelcomeMessage.css";
import PropTypes from "prop-types";

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="welcome_message">
      <h1>Bonjour {userName}</h1>
      <p>Félicitations</p>
    </div>
  );
};

WelcomeMessage.propTypes = {
  userName: PropTypes.string,
};

export default WelcomeMessage;
