import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar dari folder components

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Memanggil komponen Navbar */}
      <header style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to Our Website</h1>
        <p>Discover our services and solutions.</p>
      </header>

      <section id="about" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>About Us</h2>
        <p>We provide high-quality services to our clients.</p>
      </section>

      <section id="services" style={{ padding: '50px' }}>
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>

      <section id="contact" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us with any questions.</p>
      </section>
    </div>
  );
};

export default Home;