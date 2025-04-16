import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Wrapper>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Build Your Perfect Portfolio</h1>
          <p>
            Showcase your skills, projects, and achievements with a stunning,
            custom portfolio in minutes.
          </p>
          <NavLink to='/register'><button className="cta-button">Get Started</button>
          </NavLink>
        </div>
      </section>
    </Wrapper>
  );
};

// Styled-component for Wrapper
const Wrapper = styled.section`
  .hero-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a, #2d2d3a); /* Dark gray gradient */
  color: #d9d9d9; /* Light gray for readability */
  text-align: center;
  padding: 0 20px;
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff; /* White for strong contrast */
}

p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #a6a6b3; /* Muted gray for secondary text */
}

.cta-button {
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: #404053; /* Subtle dark grayish-blue */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #525266; /* Slightly lighter shade on hover */
}
`;

export default HeroSection;
