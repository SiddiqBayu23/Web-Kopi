import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="/path-to-your-logo.png" alt="Logo" /></Link>
      </div>
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Icon burger */}
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
