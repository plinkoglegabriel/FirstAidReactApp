import React from "react";
import { Link } from "react-router-dom";
import '../assets/App.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
       <Logo />
     </div>
    <ul>
      <li>
        <Link to="/" className="navbar-link">Home</Link>
      </li>
      <li>
        <Link to="/about" className="navbar-link">About Me</Link>
      </li>
      <li>
        <Link to="/contact" className="navbar-link">Conditions</Link>
      </li>
    </ul>
</nav>
  );
};

export default Navbar;