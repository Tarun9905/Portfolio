import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    phone: "",
    skills: "",
    experience: "",
    projects: "",
    linkedin: "",
    github: "",
  });

  const [loading, setLoading] = useState(true); // Add loading state to handle initial render

  useEffect(() => {
    if (!email) {
      alert("Email not found. Please log in again.");
      return;
    }

    axios
      .get(`https://portfolioapi-django-mysql.onrender.com/portfolio/${email}/`)
      .then((res) => {
        console.log("Fetched data:", res.data); // Log the fetched data structure
        if (res.data && res.data.length > 0) {
          const portfolioData = res.data[0]; // Access the first item of the array
          setFormData((prev) => ({
            ...prev,
            ...portfolioData,
          }));
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false); // Stop loading on error
      });
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .put(`https://portfolioapi-django-mysql.onrender.com/portfolio/${email}/`, { ...formData, email })
      .then((res) => {
        alert("Portfolio updated!");
        navigate("/links");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Update failed.");
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  return (
    <Wrapper>
      <div className="form-container">
        <h1>Update Your Portfolio</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            placeholder="Role"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="skills"
            value={formData.skills || ""}
            onChange={handleChange}
            placeholder="Skills"
            required
          />
          <input
            type="text"
            name="experience"
            value={formData.experience || ""}
            onChange={handleChange}
            placeholder="Experience"
            required
          />
          <textarea
            name="projects"
            value={formData.projects || ""}
            onChange={handleChange}
            placeholder="Projects"
            rows="3"
            required
          ></textarea>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin || ""}
            onChange={handleChange}
            placeholder="LinkedIn"
          />
          <input
            type="url"
            name="github"
            value={formData.github || ""}
            onChange={handleChange}
            placeholder="GitHub"
          />
          <button type="submit">Update Portfolio</button>
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
    margin-bottom: 20px;
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

export default Update;
