import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/bp_distressed.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Back Pedal logo" />
      <div className="nav">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/newkeg" className="nav-btn">New Keg</Link>
      </div>
    </div>
  );
}

export default Header;
