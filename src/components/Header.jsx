import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      <div className="container nav-items">
        <Link to="/">
          <h2>{text}</h2>
        </Link>
        <div className="nav-links">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback Reviews",
};

Header.propTypes = { text: PropTypes.string };

export default Header;
