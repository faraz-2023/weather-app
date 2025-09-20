async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "your api key";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  if (!city) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠ Please enter a city name</p>`;
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = `<p> City not found</p>`;
    } else {
      document.getElementById("weatherResult").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>☁ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠ Error fetching data</p>`;
  }
}
