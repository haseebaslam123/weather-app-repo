import React, { useState } from 'react';
import './SearchSection.css';
import './AnimatedHeading.css';

const SearchSection = ({ onSearch, onLocationSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleLocationClick = () => {
    onLocationSearch();
  };

  return (
    <div className="search-section">
      <div className="search-container glass-effect">
        <h1 className="search-title animated-heading main-title">Check Weather Anywhere</h1>
        <p className="search-subtitle animated-heading subtitle">Get real-time weather information for any city worldwide</p>
        
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name (e.g., London, Paris, Tokyo)"
              className="search-input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={loading || !city.trim()}
            >
              {loading ? (
                <span className="loading-spinner">⏳</span>
              ) : (
                <span>🔍</span>
              )}
              Search
            </button>
          </div>
          
          <button 
            type="button"
            onClick={handleLocationClick}
            className="location-button"
            disabled={loading}
          >
            <span>📍</span>
            Use Current Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
