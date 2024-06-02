import React from 'react';
import { Link } from 'react-router-dom';
// import reactLogo from '../assets/react.svg'; // sesuaikan jalur dengan lokasi logo
// import './Navbar.css'; // tambahkan file CSS untuk navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={reactLogo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/services" className="navbar-link">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
