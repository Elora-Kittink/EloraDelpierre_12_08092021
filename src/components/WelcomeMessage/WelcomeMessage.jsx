import React from "react";
import "./WelcomeMessage.css";
import PropTypes from "prop-types";

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="welcome_message">
      <h1>
        Bonjour <span className="userName">{userName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏🏼</p>
    </div>
  );
};

WelcomeMessage.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default WelcomeMessage;
