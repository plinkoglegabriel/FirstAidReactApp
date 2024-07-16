import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/App.css';
import Logo from './Logo';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      <ul className="nav">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/aboutme" className="navbar-link">About Me</Link>
        </li>
        <li>
          <div
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/firstaidproblems" className="navbar-link">First Aid Problems</Link>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/conditions" className="navbar-link">Conditions</Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;