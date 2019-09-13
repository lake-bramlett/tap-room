import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div className="keg">
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
  abv: PropTypes.number,
  price: PropTypes.number,
};

export default Keg;
