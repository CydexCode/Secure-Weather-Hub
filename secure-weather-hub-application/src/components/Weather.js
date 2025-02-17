import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchWeatherData } from "../services/weatherService"; // Assuming the service is set up
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getWeather = async () => {
        try {
          const data = await fetchWeatherData();
          setWeatherData(data);
        } catch (error) {
          setError(error.message);
        }
      };
      getWeather();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <p>Please log in to view weather data.</p>;
  }

  return (
    <div className="weather-container">
      <h1>Welcome, {user.name}!</h1>
      {error && <div className="error">{error}</div>}
      <div className="weather-list">
        {weatherData.length > 0 ? (
          weatherData.map((city, index) => (
            <div className="weather-card" key={index}>
              <h2>{city.name}</h2>
              <p>Temperature: {city.temperature}°C</p>
              <p>Status: {city.status}</p>
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
