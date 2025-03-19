// app.js

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            // Extract relevant weather data
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Update the DOM
            document.getElementById('cityName').textContent = `${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;
        } else {
            alert('City not found, please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
}
