import React from 'react';
import PropTypes from "prop-types";

function Header() {
  return (
    <div>
      <h1>Tap Room</h1>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
};

export default Header;
