import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PortfolioForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get email from localStorage
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedEmail) {
      alert("User email not found. Please log in again.");
      return;
    }

    const formData = {
      name,
      email: storedEmail,
      role,
      phone,
      skills,
      experience,
      projects,
      linkedin,
      github,
    };

    try {
      axios
        .post("https://portfolioapi-django-mysql.onrender.com/portfolio/", formData)
        .then((response) => console.log(response))
        .catch((error) => console.error(error.response));
      navigate("/links");

      // Clear form fields
      setName("");
      setRole("");
      setPhone("");
      setSkills("");
      setExperience("");
      setProjects("");
      setLinkedin("");
      setGithub("");
    } catch (err) {
      alert("Portfolio Submission Failed");
    }

    console.log("Submitted Data:", formData);
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h1>Create Your Portfolio</h1>
        <p>Fill out the details to build your online presence.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills (e.g., React, Node.js)" required />
          <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Experience (e.g., 2 years)" required />
          <textarea value={projects} onChange={(e) => setProjects(e.target.value)} placeholder="Projects (Brief description)" rows="3" required></textarea>
          <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="LinkedIn Profile" />
          <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="GitHub Profile" />
          <button type="submit">Generate Portfolio</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #34344a);
  color: #ffffff;
  text-align: center;
  padding: 20px;

  .form-container {
    width: 100%;
    max-width: 450px;
    background: rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #bdbdc5;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid transparent;
    border-radius: 6px;
    background: #2c2c3e;
    color: #ffffff;
    font-size: 1rem;
    transition: 0.3s ease;
  }

  input:focus, textarea:focus {
    border-color: #ff6b6b;
    outline: none;
    background: #38384f;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    font-weight: bold;
    background: #ff6b6b;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background: #ff4747;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    .form-container {
      padding: 20px;
    }
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export default PortfolioForm;
