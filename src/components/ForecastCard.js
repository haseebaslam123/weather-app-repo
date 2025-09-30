import React from 'react';
import './ForecastCard.css';

const ForecastCard = ({ forecast }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="forecast-card card-hover">
      <div className="forecast-date">
        {formatDate(forecast.dt)}
      </div>
      
      <div className="forecast-icon">
        <img 
          src={getWeatherIcon(forecast.weather[0].icon)} 
          alt={forecast.weather[0].description}
        />
      </div>
      
      <div className="forecast-description">
        {forecast.weather[0].description.charAt(0).toUpperCase() + 
         forecast.weather[0].description.slice(1)}
      </div>
      
      <div className="forecast-temps">
        <span className="temp-max">{Math.round(forecast.main.temp_max)}°</span>
        <span className="temp-separator">/</span>
        <span className="temp-min">{Math.round(forecast.main.temp_min)}°</span>
      </div>
      
      <div className="forecast-details">
        <div className="forecast-detail">
          <span className="detail-icon">💧</span>
          <span>{forecast.main.humidity}%</span>
        </div>
        <div className="forecast-detail">
          <span className="detail-icon">💨</span>
          <span>{forecast.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
