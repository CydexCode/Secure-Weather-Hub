
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Secure_Weather_Hub_API.Services;
using System.Threading.Tasks;

namespace Secure_Weather_Hub_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class WeatherController : ControllerBase
    {
        private readonly WeatherService _weatherService;

        public WeatherController(WeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet]
        public async Task<IActionResult> GetWeather()
        {
            var weatherData = await _weatherService.GetWeatherDataAsync();
            return Ok(weatherData);
        }
    }
}
