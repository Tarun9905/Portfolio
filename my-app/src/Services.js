import React from "react";
import styled from "styled-components";
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaBolt, FaDatabase } from "react-icons/fa";

const Services = () => {
  return (
    <Wrapper>
      <section className="services-section">
        <h1>Our Services</h1>
        <div className="services-container">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h2>Web Development</h2>
            <p>Build and customize your portfolio with ease using our intuitive web development tools.</p>
          </div>
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h2>Custom Design</h2>
            <p>Choose from a variety of templates and design options to create a unique portfolio.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h2>Responsive Design</h2>
            <p>Your portfolio will look great on any device, ensuring a seamless user experience.</p>
          </div>
          <div className="service-card">
            <FaSearch className="service-icon" />
            <h2>SEO Optimization</h2>
            <p>Optimize your portfolio to rank higher in search engine results and attract more visitors.</p>
          </div>
          <div className="service-card">
            <FaBolt className="service-icon" />
            <h2>Fast Performance</h2>
            <p>Our platform ensures fast loading times for a smooth browsing experience.</p>
          </div>
          <div className="service-card">
            <FaDatabase className="service-icon" />
            <h2>Secure Hosting</h2>
            <p>Keep your data safe with our reliable and secure hosting services.</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .services-section {
    background: #1e1e2e;
    color: #ffffff;
    padding: 80px 5%;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }

  .service-card {
    background: #282a36;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-icon {
    font-size: 3rem;
    color: #ffcc00;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

`;

export default Services;
