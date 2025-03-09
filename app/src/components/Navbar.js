import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");

  // Toggle profile dropdown
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo" onClick={() => navigate("/")}>
          FruitBot🥭
        </h1>
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="nav-button" onClick={() => navigate("/upload")}>
            Upload
          </button>
          {!isAuthenticated ? (
            <button className="nav-button" onClick={() => navigate("/login")}>
              Sign In
            </button>
          ) : (
            <div className="profile-dropdown">
              <button className="nav-button profile-btn" onClick={toggleProfile}>
                👤 Profile
              </button>
              {isProfileOpen && (
                <div className="dropdown-menu">
                  <p className="dropdown-item">{username}</p>
                  <button
                    className="dropdown-item logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;