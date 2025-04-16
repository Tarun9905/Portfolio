import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ResultLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Wrapper>
      <h1>Explore Stunning Portfolios</h1>
      <div className="container">
        <div
          className={`card ${hoveredIndex !== null && hoveredIndex !== 1 ? 'blurred' : ''}`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image">
            <img src="img/PreviewOneImg.jpg" alt="Portfolio One" />
          </div>
          <NavLink to="/preview-1" className="button preview">
            🔍 Preview Portfolio
          </NavLink>
          <NavLink to="/source-1" className="button code">
            💻 Get Source Code
          </NavLink>
        </div>

        <div
          className={`card ${hoveredIndex !== null && hoveredIndex !== 2 ? 'blurred' : ''}`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image">
            <img src="img\PreviewTwoImg.jpg" alt="Portfolio Two" />
          </div>
          <NavLink to="/preview-2" className="button preview">
            🔍 Preview Portfolio
          </NavLink>
          <NavLink to="/source-2" className="button code">
            💻 Get Source Code
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e1e2f, #34344a);
  padding: 40px;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.8rem;
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #38384f;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    width: 340px;
    transition: all 0.3s ease-in-out;
    border: 2px solid transparent;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 25px rgba(186, 181, 181, 0.7);
    border: 2px solid rgb(171, 167, 167);
  }

  .blurred {
    filter: blur(5px);
    opacity: 0.5;
  }

  .image {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .button {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 8px;
    margin: 12px 6px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }

  .preview {
    background: linear-gradient(135deg, #ff4747, #ff6b6b);
    box-shadow: 0px 4px 10px rgba(255, 71, 71, 0.5);
  }

  .code {
    background: linear-gradient(135deg, #38384f, #bdbdc5);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.08);
  }

  .button:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

export default ResultLinks;
