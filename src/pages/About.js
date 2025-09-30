import React from 'react';
import PageTransition from '../components/PageTransition';
import './About.css';
import '../components/AnimatedHeading.css';

const About = () => {
  return (
    <div className="about">
      <PageTransition>
        <div className="about-container">
          <div className="about-content glass-effect">
            <h1 className="about-title animated-heading">About WeatherNow</h1>
          
          <div className="about-description">
            <p>
              WeatherNow is a modern, responsive weather application that provides real-time 
              weather information for cities worldwide. Built with React and powered by the 
              OpenWeatherMap API, it offers accurate weather data with a beautiful, intuitive interface.
            </p>
            
            <p>
              Whether you're planning a trip, checking daily conditions, or just curious about 
              the weather in different parts of the world, WeatherNow has you covered with 
              current conditions, detailed forecasts, and location-based weather updates.
            </p>
          </div>

          <div className="features-section">
            <h2 className="animated-heading">Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h3>Global Coverage</h3>
                <p>Search weather for any city worldwide with comprehensive data coverage.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <h3>Location Services</h3>
                <p>Get instant weather updates using your device's current location.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h3>Detailed Forecast</h3>
                <p>View 5-day weather forecasts with temperature, humidity, and wind data.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3>Responsive Design</h3>
                <p>Optimized for all devices - desktop, tablet, and mobile.</p>
              </div>
            </div>
          </div>

          <div className="tech-section">
            <h2 className="animated-heading">Built With</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-name">React</span>
                <span className="tech-desc">Frontend Framework</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">React Router</span>
                <span className="tech-desc">Navigation</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">OpenWeatherMap API</span>
                <span className="tech-desc">Weather Data</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">CSS3</span>
                <span className="tech-desc">Styling & Animations</span>
              </div>
            </div>
          </div>

          <div className="api-info">
            <h2 className="animated-heading">Data Source</h2>
            <p>
              This app uses the OpenWeatherMap API to provide accurate, up-to-date weather 
              information. The API offers comprehensive weather data including current conditions, 
              forecasts, and historical data for locations worldwide.
            </p>
            <a 
              href="https://openweathermap.org/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="api-link"
            >
              Learn more about OpenWeatherMap API →
            </a>
          </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default About;
