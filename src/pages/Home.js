import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import SearchSection from '../components/SearchSection';
// import PageTransition from '../components/PageTransition';
import './Home.css';
import '../components/AnimatedHeading.css';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OpenWeatherMap API configuration
  // Note: You need to get your own API key from https://openweathermap.org/api
  const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  // For testing purposes, let's use a demo approach
  const DEMO_MODE = false;

  const fetchWeatherData = async (city) => {
    // fetch weather by city
    setLoading(true);
    setError(null);
    
    // Demo mode - show sample data
    if (DEMO_MODE) {
      setTimeout(() => {
        const sampleWeather = {
          name: city,
          sys: { country: 'Demo' },
          main: {
            temp: Math.floor(Math.random() * 30) + 10,
            feels_like: Math.floor(Math.random() * 30) + 10,
            humidity: Math.floor(Math.random() * 50) + 30,
            pressure: Math.floor(Math.random() * 100) + 1000
          },
          weather: [{
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }],
          wind: { speed: Math.floor(Math.random() * 10) + 1 },
          sys: {
            sunrise: Math.floor(Date.now() / 1000) + 3600,
            sunset: Math.floor(Date.now() / 1000) + 7200
          }
        };
        
        const sampleForecast = {
          list: [
            { dt: Date.now() / 1000 + 86400, main: { temp_max: 25, temp_min: 15, humidity: 60 }, weather: [{ description: 'sunny', icon: '01d' }], wind: { speed: 5 } },
            { dt: Date.now() / 1000 + 172800, main: { temp_max: 23, temp_min: 13, humidity: 65 }, weather: [{ description: 'cloudy', icon: '02d' }], wind: { speed: 7 } },
            { dt: Date.now() / 1000 + 259200, main: { temp_max: 20, temp_min: 12, humidity: 70 }, weather: [{ description: 'rainy', icon: '10d' }], wind: { speed: 8 } },
            { dt: Date.now() / 1000 + 345600, main: { temp_max: 22, temp_min: 14, humidity: 55 }, weather: [{ description: 'partly cloudy', icon: '03d' }], wind: { speed: 6 } },
            { dt: Date.now() / 1000 + 432000, main: { temp_max: 24, temp_min: 16, humidity: 50 }, weather: [{ description: 'clear', icon: '01d' }], wind: { speed: 4 } }
          ]
        };
        
        setWeatherData(sampleWeather);
        setForecastData(sampleForecast);
        setLoading(false);
      }, 1000);
      return;
    }
    
    try {
      
      // Fetch current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) {
        const errorData = await weatherResponse.json();
        throw new Error(`API Error: ${errorData.message || 'Unknown error'} (Status: ${weatherResponse.status})`);
      }
      
      const weather = await weatherResponse.json();
      setWeatherData(weather);

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (forecastResponse.ok) {
        const forecast = await forecastResponse.json();
        setForecastData(forecast);
      } else {
        const forecastError = await forecastResponse.json();
        throw new Error(`Forecast Error: ${forecastError.message || 'Unknown error'} (Status: ${forecastResponse.status})`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Fetch current weather by coordinates
          const weatherResponse = await fetch(
            `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          
          if (!weatherResponse.ok) {
            throw new Error('Unable to fetch weather data.');
          }
          
          const weather = await weatherResponse.json();
          setWeatherData(weather);

          // Fetch 5-day forecast by coordinates
          const forecastResponse = await fetch(
            `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          
          if (forecastResponse.ok) {
            const forecast = await forecastResponse.json();
            setForecastData(forecast);
          }
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
          setForecastData(null);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setError('Unable to retrieve your location.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="home">
      <div className="container">
        <SearchSection 
          onSearch={fetchWeatherData}
          onLocationSearch={fetchWeatherByLocation}
          loading={loading}
        />

        {loading && (
          <div style={{ 
            padding: '20px', 
            textAlign: 'center', 
            fontSize: '1.2rem',
            color: '#666'
          }}>
            🔄 Loading weather data...
          </div>
        )}

        {error && (
          <div className="error-message search-results-enter">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {weatherData && (
          <div>
            <WeatherCard weather={weatherData} />
          </div>
        )}

        {forecastData && (
          <div className="forecast-section">
            <h2 className="forecast-title">5-Day Forecast</h2>
            <div className="forecast-grid">
              {forecastData.list
                .filter((_, index) => index % 8 === 0) // Get one forecast per day
                .slice(0, 5)
                .map((forecast, index) => (
                  <ForecastCard key={index} forecast={forecast} />
                ))}
            </div>
          </div>
        )}

        {!loading && !error && !weatherData && (
          <div className="hint-empty">🌤️ Search for a city to see the weather!</div>
        )}
      </div>
    </div>
  );
};

export default Home;