import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">TV SHOWS</Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">HOME</Link>
            </li>
            <li className="links__link">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
