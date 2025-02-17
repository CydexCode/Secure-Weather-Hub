import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const API_URL = "http://localhost:5114/api/Weather"; // .NET API URL

export const fetchWeatherData = async (getAccessTokenSilently) => {
  try {
    const token = await getAccessTokenSilently(); // Fetch JWT token from Auth0
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach JWT token
      },
    });
    return response.data.list.map(city => ({
      name: city.name,
      temperature: city.main.temp,
      status: city.weather[0].description,
    }));
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
};
