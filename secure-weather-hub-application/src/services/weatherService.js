import axios from 'axios';

const API_URL = "http://localhost:5114/api/Weather"; // Backend URL

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.list.map(city => ({
      name: city.name,
      temperature: city.main.temp,
      status: city.weather[0].description,
    }));
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
};