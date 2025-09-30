import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass-effect">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">WeatherNow</h3>
            <p className="footer-description">
              Your reliable source for real-time weather information worldwide.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <span className="social-icon">📱</span>
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a 
                href="https://portfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Portfolio"
              >
                <span className="social-icon">🌐</span>
                Portfolio
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} WeatherNow. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Powered by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
