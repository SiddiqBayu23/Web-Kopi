import React from 'react';
import Navbar from "../components/navbar.jsx";
import aboutImage from '../assets/aboutImage.png'; // Import the image
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component */}

      {/* Hero Banner Section */}
      <header className="hero-banner">
      </header>

      {/* About Section */}
      <section id="about" style={{ padding: '50px', backgroundColor: 'rgba(209, 188, 112, 0.78)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left side - Text */}
        <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'left', fontWeight: 'bold' }}>COFFEE FINDER</h2>
          <p
            className="py-4"
            style={{fontSize: "1.6rem", lineHeight: '1.6', textAlign: 'left' }}
          >
            Our coffee masters have distilled their years of tasting knowledge down to three simple questions to help you find a coffee you’re sure to love.
          </p>
        </div>
        
        {/* Right side - Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src={aboutImage} alt="About Us" style={{ width: '60%', borderRadius: '8px' }} />
        </div>
      </section>

     {/* Menu */}
     <section id="services">
         <h2>Our Services</h2>
            <p>We offer a wide range of services to meet your needs.</p>

    <div className="card-container">
    
    {/* Card 1 */}
    <div className="card">
      <h3>Menu</h3>
      <img src="https://via.placeholder.com/150" alt="Service 1" />
      <p>Service 1 description here.</p>
    </div>

    {/* Card 2 */}
    <div className="card">
      <h3>Menu</h3>
      <img src="https://via.placeholder.com/150" alt="Service 2" />
      <p>Service 2 description here.</p>
    </div>

    {/* Card 3 */}
    <div className="card">
      <h3>Menu</h3>
      <img src="https://via.placeholder.com/150" alt="Service 3" />
      <p>Service 3 description here.</p>
    </div>

  </div>
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
