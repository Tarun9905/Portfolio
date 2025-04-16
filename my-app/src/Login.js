// import React, { useState } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post("https://portfolioapi-django-mysql.onrender.com/login/", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         localStorage.setItem("userEmail", response.data.email);  // Store email in local storage
//         alert("Login successful!");
//         window.location.href = "/home"; // Redirect to another page
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <Wrapper>
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>Login</h1>
//           <p>Sign in to your account</p>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit" className="cta-button">Login</button>
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .hero-section {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: linear-gradient(135deg, #1a1a1a, #2d2d3a);
//     color: #d9d9d9;
//     text-align: center;
//     padding: 0 20px;
//   }

//   .hero-content {
//     max-width: 400px;
//     width: 100%;
//     padding: 30px;
//     background: rgba(255, 255, 255, 0.1);
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//   }

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
//     color: #ffffff;
//   }

//   p {
//     font-size: 1.2rem;
//     margin-bottom: 2rem;
//     color: #a6a6b3;
//   }

//   .error {
//     color: red;
//     font-size: 1rem;
//     margin-bottom: 1rem;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//   }

//   input {
//     width: 100%;
//     padding: 12px;
//     margin-bottom: 1rem;
//     border: none;
//     border-radius: 5px;
//     background: #404053;
//     color: #ffffff;
//     font-size: 1rem;
//   }

//   input::placeholder {
//     color: #a6a6b3;
//   }

//   .cta-button {
//     padding: 12px;
//     font-size: 1.1rem;
//     background-color: #525266;
//     color: #ffffff;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .cta-button:hover {
//     background-color: #626280;
//   }
// `;

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Start loading animation

    try {
      const response = await axios.post("https://portfolioapi-django-mysql.onrender.com/login/", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("userEmail", response.data.email);  // Store email in local storage
        alert("Login successful!");
        window.location.href = "/home"; // Redirect to another page
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false); // End loading animation
    }
  };

  return (
    <Wrapper>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Login</h1>
          <p>Sign in to your account</p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="cta-button" disabled={loading}>
              {loading ? <LoadingSpinner /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

// Loading spinner component
const LoadingSpinner = () => (
  <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const Wrapper = styled.section`
  .hero-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1a1a1a, #2d2d3a);
    color: #d9d9d9;
    text-align: center;
    padding: 0 20px;
  }

  .hero-content {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #a6a6b3;
  }

  .error {
    color: red;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    background: #404053;
    color: #ffffff;
    font-size: 1rem;
  }

  input::placeholder {
    color: #a6a6b3;
  }

  .cta-button {
    padding: 12px;
    font-size: 1.1rem;
    background-color: #525266;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #626280;
  }

  /* Spinner styles */
  .spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;
    animation: rotate 1.2s linear infinite;
  }

  .spinner div {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 50%;
    animation: bounce 0.6s ease-in-out infinite;
  }

  .spinner div:nth-child(1) {
    animation-delay: 0s;
  }

  .spinner div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .spinner div:nth-child(3) {
    animation-delay: 0.4s;
  }

  .spinner div:nth-child(4) {
    animation-delay: 0.6s;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export default Login;
