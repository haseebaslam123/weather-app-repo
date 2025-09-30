import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getBackgroundClass = (weatherMain) => {
    const weatherType = weatherMain.toLowerCase();
    if (weatherType.includes('clear')) return 'clear-sky';
    if (weatherType.includes('cloud')) return 'cloudy';
    if (weatherType.includes('rain')) return 'rainy';
    if (weatherType.includes('snow')) return 'snowy';
    if (weatherType.includes('thunder')) return 'stormy';
    return 'default';
  };

  return (
    <div className={`weather-card card-hover ${getBackgroundClass(weather.weather[0].main)}`}>
      <div className="weather-main">
        <div className="location-info">
          <h2 className="city-name">{weather.name}</h2>
          <p className="country">{weather.sys.country}</p>
        </div>
        
        <div className="temperature-section">
          <div className="temp-main">
            <span className="temperature">{Math.round(weather.main.temp)}°C</span>
            <div className="weather-icon">
              <img 
                src={getWeatherIcon(weather.weather[0].icon)} 
                alt={weather.weather[0].description}
              />
            </div>
          </div>
          <p className="weather-description">
            {weather.weather[0].description.charAt(0).toUpperCase() + 
             weather.weather[0].description.slice(1)}
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">💧</div>
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{weather.main.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">💨</div>
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{weather.wind.speed} m/s</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌡️</div>
          <div className="detail-info">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌅</div>
          <div className="detail-info">
            <span className="detail-label">Sunrise</span>
            <span className="detail-value">{formatTime(weather.sys.sunrise)}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌇</div>
          <div className="detail-info">
            <span className="detail-label">Sunset</span>
            <span className="detail-value">{formatTime(weather.sys.sunset)}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">📊</div>
          <div className="detail-info">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{weather.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
