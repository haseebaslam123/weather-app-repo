import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header glass-effect">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌤️</span>
          <span className="logo-text">WeatherNow</span>
        </Link>
        
        <nav className="nav">
         
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
