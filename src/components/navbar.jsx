import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this path is correct
import logo from '../assets/logo.png'; // Adjust the path based on your project structure

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo and brand name */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <Link to="/" className="navbar-brand">Kopi 3 Bersaudara</Link> {/* Brand name next to logo */}
      </div>
      
      {/* Right side: Navigation menu */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Burger Icon */}
      </div>
      
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
