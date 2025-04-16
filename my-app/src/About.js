import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <section className="about-section">
        <div className="content">
          <h1>About Us</h1>
          <p>
            Welcome to our portfolio builder, where creativity meets simplicity!  
            Our platform is designed to help professionals, designers, developers, and freelancers  
            craft stunning portfolios effortlessly.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Easy to Use:</strong> No coding required! Just drag, drop, and customize.</li>
            <li><strong>Fully Customizable:</strong> Choose from various templates, colors, and layouts.</li>
            <li><strong>Mobile-Friendly:</strong> Your portfolio looks great on any device.</li>
            <li><strong>SEO Optimized:</strong> Get discovered easily on search engines.</li>
            <li><strong>Fast & Secure:</strong> We prioritize performance and security.</li>
          </ul>
          <p>
            Whether you are a beginner or an expert, our platform gives you the tools to create a 
            professional online presence in just a few clicks.
          </p>
          <button className="cta-button"><NavLink to='/home' className="cta-button-navlink">Get Started</NavLink></button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-section {
    background: #1e1e2e;
    color: #ffffff;
    padding: 80px 5%;
    text-align: center;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 1.5rem;
    color: #ffcc00;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #b3b3b3;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
    display: inline-block;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #d9d9d9;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #ff6b6b;
    color: #1e1e2e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  .cta-button:hover {
    background-color: #ff4747;
  }

  .cta-button-navlink{
    color: #fff;
    text-decoration:none;
  }
`;

export default About;
