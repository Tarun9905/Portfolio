import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PreviewTwo = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("userEmail"); // Get email from local storage

  useEffect(() => {
    if (userEmail) {
      Load();
    }
  }, [userEmail]);

  async function Load() {
    try {
      const result = await axios.get(`https://portfolioapi-django-mysql.onrender.com/portfolio/${userEmail}/`);
      
      if (result.data.length > 0) {
        setDetails(result.data[0]); // Access the first object in the array
      } else {
        setDetails(null);
      }
    } catch (error) {
      console.error("Error fetching portfolio details:", error);
      setError("Failed to load portfolio details.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Wrapper><h2>Loading...</h2></Wrapper>;
  if (error) return <Wrapper><h2>{error}</h2></Wrapper>;
  if (!details) return <Wrapper><h2>No portfolio details found.</h2></Wrapper>;

  return (
    <Wrapper>
      <div className="content">
        <h1>{details.name}</h1>
        <h2>{details.role}</h2>

        <div className="section">
          <p><strong>Skills:</strong></p>
          <p>{details.skills}</p>
        </div>

        <div className="section">
          <p><strong>Projects:</strong></p>
          <p>{details.projects}</p>
        </div>

        <div className="section">
          <p><strong>Experience:</strong></p>
          <p>{details.experience}</p>
        </div>

        <div className="section">
          <p><strong>Contact:</strong></p>
          <p>{details.email}</p>
          <p>{details.phone}</p>
        </div>

        <div className="section">
          <p><strong>Links:</strong></p>
          <p><a href={details.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href={details.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #e6eff7);
  color: #333;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #007acc;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .content {
    width: 90%;
    max-width: 800px;
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .content:hover {
    transform: translateY(-5px);
  }

  .section {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    background: #f9f9f9;
    transition: background 0.3s, box-shadow 0.3s;
  }

  .section:hover {
    background: #eef6ff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.1rem;
    color: #444;
    margin: 0.5rem 0;
  }

  a {
    color: #007acc;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: #005b99;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .content {
      padding: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default PreviewTwo;
