const { response } = require("express");

function getWeather() {
    const apiKey = '1f5d00196e963a0c38a553bca38df248';
    const city = document.getElementById('city').value;

    if(!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}$appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data)
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('error fetching current weather data. Please try again.');
        });
    
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error => {
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again.');
    })

    function displayWeather(data){
        const tempDivInfo = document.getElementById('temp-div');
        const weatherInfoDiv = document.getElementById('weather-info');
        const weatherIconDiv = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
    }
    
}