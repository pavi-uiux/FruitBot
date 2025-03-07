import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">FruitBot 🍌🥭</h1>
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/upload")}>Upload</button>
          <button className="nav-button" onClick={() => navigate("/login")}>Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
