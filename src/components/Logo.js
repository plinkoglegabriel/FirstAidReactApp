import React from 'react';
import logo from '../assets/logo.png';
import '../assets/App.css';
import { Link } from 'react-router-dom';


const Logo = () => {
  return <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>;
};

export default Logo;