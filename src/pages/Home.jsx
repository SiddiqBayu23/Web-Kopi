import React from 'react';
import Navbar from '../components/Navbar';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component */}

      {/* Hero Banner Section */}
      <header className="hero-banner">
      </header>

      {/* About Section */}
      <section id="about" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>About Us</h2>
        <p>We provide high-quality services to our clients.</p>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '50px' }}>
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us with any questions.</p>
      </section>
    </div>
  );
};

export default Home;
