import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <main className="hero-section">
        <div className="hero-content">
          <h1>Build Your Portfolio in Minutes</h1>
          <p>Create a stunning portfolio with ease. No coding required!</p>
          <NavLink to="/portfolioform" className="cta-button">Start Building</NavLink>
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <h2>🎨 Beautiful Templates</h2>
          <p>Choose from a variety of professionally designed templates.</p>
        </div>
        <div className="feature">
          <h2>⚡ Easy Customization</h2>
          <p>Drag & drop your content effortlessly.</p>
        </div>
        <div className="feature">
          <h2>📱 Mobile-Friendly</h2>
          <p>Your portfolio will look perfect on any device.</p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-section {
    height: 73vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a1a1a, #2d2d3a);
    text-align: center;
    color: #fff;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #a6a6b3;
  }

  .cta-button {
    background: #ff6b6b;
    padding: 12px 24px;
    font-size: 1.2rem;
    border: none;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
  }

  .cta-button:hover {
    background: #ff4747;
  }

  .features {
    display: flex;
    justify-content: space-around;
    padding: 50px 5%;
    background: #20202a;
    color: #fff;
  }

  .feature {
    text-align: center;
    max-width: 300px;
  }

  .feature h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .feature p {
    font-size: 1rem;
    color: #b3b3b3;
  }
`;

export default Home;
