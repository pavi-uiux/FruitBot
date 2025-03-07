import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure you have the Home.css file in the same directory

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            FruitBot: Smart Fruit Ripeness Detector 🍌🥭
          </h1>
          <p className="hero-description">
            Harness the power of drones and AI to predict fruit ripeness with unparalleled accuracy. 
            Optimize your harvest and reduce waste with real-time insights.
          </p>
          <button
            className="cta-button"
            onClick={() => (window.location.href = "http://127.0.0.1:5000")}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">🚁</div>
            <h3 className="step-title">Deploy the Drone</h3>
            <p className="step-description">
              Launch the drone over your orchard to capture high-resolution images of the fruits.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">🤖</div>
            <h3 className="step-title">AI Analysis</h3>
            <p className="step-description">
              Our advanced AI analyzes the images to determine the ripeness level of each fruit.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">📊</div>
            <h3 className="step-title">Real-Time Insights</h3>
            <p className="step-description">
              Receive real-time data and actionable insights to optimize your harvest schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2 className="section-title">Why Choose FruitBot?</h2>
        <div className="benefits-container">
          <div className="benefit">
            <h3 className="benefit-title">Precision</h3>
            <p className="benefit-description">
              Accurately predict fruit ripeness with cutting-edge drone technology and AI.
            </p>
          </div>
          <div className="benefit">
            <h3 className="benefit-title">Efficiency</h3>
            <p className="benefit-description">
              Save time and resources by automating the ripeness prediction process.
            </p>
          </div>
          <div className="benefit">
            <h3 className="benefit-title">Sustainability</h3>
            <p className="benefit-description">
              Reduce food waste by harvesting fruits at the perfect time.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to Transform Your Harvest?</h2>
        <p className="cta-description">
          Join the future of agriculture with FruitBot. Start predicting fruit ripeness like never before.
        </p>
        <button
          className="cta-button"
          onClick={() => (window.location.href = "http://127.0.0.1:5000")}
        >
          Start Now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          <p>© FruitBot 2024</p>
          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/cookies">Cookie policy</Link>
            <Link to="/support">Support</Link>
            <Link to="/personal-info">
              Do not sell or share my personal information
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
