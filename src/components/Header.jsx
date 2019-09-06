import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Tap Room</h1>
      <BrowserRouter>
        <Link to="/new">New Keg</Link>
      </BrowserRouter>
    </div>
  );
}

export default Header;
