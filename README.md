# Secure Weather Hub

## Overview

**Secure Weather Hub** is a full-stack web application that retrieves and displays weather information securely, integrating authentication and authorization using Auth0. The application consists of a **React.js frontend** and a **.NET 8 Web API backend**.

## Features

- 🔐 **Secure login/logout** using Auth0 authentication.
- 🌦️ **Weather data retrieval** from OpenWeatherMap API.
- 🔑 **JWT-based authorization** to protect API endpoints.
- ⚡ **Caching of weather data** for 5 minutes to reduce redundant requests.
- 🎨 **User-friendly UI** with responsive design.
- 🛡️ **Role-based access control** with Multi-Factor Authentication (MFA).

## Tech Stack

### Frontend:
- React.js
- Redux, Redux-Saga
- React Router
- Auth0 Authentication

### Backend:
- .NET 8, C#, ASP.NET Core
- JWT Authentication
- IMemoryCache (for caching)

### External API:
- OpenWeatherMap API

### Deployment:
- Localhost (for development)

## Setup Instructions

### Prerequisites
- **Node.js** (for React frontend)
- **.NET SDK 8** (for backend API)
- **Auth0 Account**
- **OpenWeatherMap API Key**

### Frontend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/CydexCode/Secure-Weather-Hub.git
   cd secure-weather-hub-application
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure Auth0 in `index.js`:**
   ```jsx
   <Auth0Provider
       domain="your-auth0-domain"
       clientId="your-auth0-client-id"
       authorizationParams={{ redirect_uri: window.location.origin }}
   >
   ```

4. **Start the frontend:**
   ```sh
   npm start
   ```

### Backend Setup

1. **Navigate to the backend directory:**
   ```sh
   cd ../Secure Weather Hub_API
   ```

2. **Install dependencies:**
   ```sh
   dotnet restore
   ```

3. **Configure Auth0 in `Program.cs`:**
   ```csharp
   options.Authority = "https://your-auth0-domain";
   options.Audience = "https://secure-weather-hub-api";
   ```

4. **Replace the API key in `WeatherService.cs`:**
   ```csharp
   private readonly string _apiKey = "your-openweathermap-api-key";
   ```

5. **Run the backend:**
   ```sh
   dotnet run
   ```

## API Endpoints

| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | `/api/weather` | Fetches weather data |

## Authentication

- Users must **log in via Auth0** to access weather data.
- **MFA is enabled** via email verification.
- **Public signups are disabled**; only pre-registered users can access the system.

## Test Account Credentials

- **Email:** careers@######.com
- **Password:** Pass#####

## Deployment

- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5114`

## Additional Notes

- Ensure **CORS is enabled** to allow communication between frontend and backend.
- **JWT tokens must be included** in API requests for authentication.
- The API **caches responses for 5 minutes** to optimize performance.

## License

This project is licensed under the **MIT License**.
