import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Brand: {props.brand}</h4>
      <h4>ABV: {props.abv}</h4>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
};

export default Keg;
