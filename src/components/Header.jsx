import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Tap Room</h1>
      <ul className="nav-bar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newkeg">Add a keg</Link></li>
      </ul>
    </div>
  );
}

export default Header;
