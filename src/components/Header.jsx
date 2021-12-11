import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <header style={{ backgroundColor: "blue" }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback Reviews",
};

Header.propTypes = { text: PropTypes.string };

export default Header;
