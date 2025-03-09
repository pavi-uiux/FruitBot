import React, { useState } from "react"; // Import useState
import axios from "axios"; // Import axios
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./Login.css"; // Using the same CSS file as Login
import mangoImage from "../assets/mango.jpg"; // Import the mango image

function Register() {
  const [email, setEmail] = useState(""); // Define email state
  const [password, setPassword] = useState(""); // Define password state
  const navigate = useNavigate(); // Define navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      {/* Image Section */}
      <div className="image-section">
        <img src={mangoImage} alt="Mango" className="login-image" />
      </div>

      {/* Register Form Section */}
      <div className="login-box">
        <h2 className="login-title">Register</h2>
        <form onSubmit={handleRegister} className="login-form">
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
            Register
          </button>
        </form>
        <p className="switch-auth">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;