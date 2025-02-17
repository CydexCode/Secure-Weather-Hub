using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Secure_Weather_Hub_API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);
// Add CORS to allow requests from the React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:3001") // React frontend URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});




// Register services
builder.Services.AddMemoryCache();  // Enable in-memory caching
builder.Services.AddSingleton<WeatherService>();  // Register WeatherService as Singleton
builder.Services.AddControllers();  // Add controllers for API

// Add Swagger services
builder.Services.AddSwaggerGen();  // Register Swagger generator

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    // Enable Swagger in development environment
    app.UseSwagger();
    app.UseSwaggerUI();  // UI to explore and test API
}
app.UseCors("AllowFrontend");

app.UseRouting();  // Enable routing

app.MapControllers();  // Map controllers to routes

app.Run();
