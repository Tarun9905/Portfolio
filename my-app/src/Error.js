import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <NavLink to="/home" className="home-link">
          Go Back Home
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1e1e2e, #3a3a5a);
    color: #ffffff;
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #ff4d4d;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #cccccc;
  }

  .home-link {
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #ff6b6b;
    color: #1e1e2e;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .home-link:hover {
    background-color: #ff4747;
  }
`;

export default NotFound;
