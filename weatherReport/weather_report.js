function showweatherDetails(event) {
      event.preventDefault();
}

const city = document.getElementById('city').value;
const apiKey = '60f31baa0d3a3da258f2370fae4baa91'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );