const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('City not found!');
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name + ', ' + data.sys.country;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
    document.querySelector('.weather-data').style.display = 'block';
}
