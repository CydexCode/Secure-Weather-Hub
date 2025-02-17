using Newtonsoft.Json;
using Microsoft.Extensions.Caching.Memory;
using System.Net.Http;
using System.Threading.Tasks;
using System.IO;
using Secure_Weather_Hub_API.Models;
namespace Secure_Weather_Hub_API.Services
{
    public class WeatherService
    {
        private readonly IMemoryCache _cache;
        private readonly HttpClient _httpClient;
        private readonly string _apiKey = "1a89816c3a85106164b9f8f9296d746d"; // Replace with your OpenWeatherMap API Key

        public WeatherService(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
            _httpClient = new HttpClient();
        }

        public async Task<string> GetWeatherDataAsync()
        {
            var cacheKey = "WeatherDataCacheKey";

            // Try to get cached data
            if (_cache.TryGetValue(cacheKey, out string cachedWeatherData))
            {
                return cachedWeatherData; // Return cached data
            }

            // Read city codes from the JSON file and fetch weather data
            var cityCodes = GetCityCodes();
            var weatherData = await FetchWeatherDataAsync(cityCodes);

            // Cache the weather data for 5 minutes
            _cache.Set(cacheKey, weatherData, TimeSpan.FromMinutes(5));

            return weatherData;
        }

        private string GetCityCodes()
        {
            // Read the cities.json file and deserialize it to a strongly typed object
            var citiesJson = File.ReadAllText("cities.json");
            var cities = JsonConvert.DeserializeObject<CityList>(citiesJson);

            // Extract CityCode values and create a comma-separated string
            var cityCodes = string.Join(",", cities.List.Select(c => c.CityCode).ToArray());
            return cityCodes;
        }

        private async Task<string> FetchWeatherDataAsync(string cityCodes)
        {
            // Construct the API URL
            var url = $"http://api.openweathermap.org/data/2.5/group?id={cityCodes}&units=metric&appid={_apiKey}";
            var response = await _httpClient.GetStringAsync(url);
            return response;
        }
    }
}