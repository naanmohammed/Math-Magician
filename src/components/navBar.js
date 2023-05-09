import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="navHeader">Math Magicians</Link>
      <div className="menu">
        <Link to="/" exact className="menuItem">
          Home |
        </Link>
        <Link to="/calculator" exact className="menuItem">
          Calculator |
        </Link>
        <Link to="/quote" exact className="menuItem">
          Quote
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
