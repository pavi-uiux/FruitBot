import React, { useState } from "react"; // Import useState
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import mangoImage from "../assets/mango.jpg"; // Import the mango image

function Login() {
  const [email, setEmail] = useState(""); // Define email state
  const [password, setPassword] = useState(""); // Define password state
  const navigate = useNavigate(); // Define navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Store authToken & email in localStorage
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", email);

      alert("Login successful");
      navigate("/home"); // Redirect to home
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      {/* Image Section */}
      <div className="image-section">
        <img src={mangoImage} alt="Mango" className="login-image" />
      </div>

      {/* Login Form Section */}
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="switch-auth">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;