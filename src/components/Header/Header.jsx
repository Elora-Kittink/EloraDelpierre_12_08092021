import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img className="header_logo" src="/assets/logo.png" alt=""></img>
      <nav className="header_nav">
        <Link className="header_nav_home" to="/">
          Accueil
        </Link>
        <Link className="header_nav_profile" to="/profile">
          Profile
        </Link>
        <Link className="header_nav_settings" to="/settings">
          Réglages
        </Link>
        <Link className="header_nav_community" to="/community">
          Communauté
        </Link>
      </nav>
    </header>
  );
};

export default Header;
