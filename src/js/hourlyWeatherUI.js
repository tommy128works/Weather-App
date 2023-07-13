// dummy image until weatherIcon module is coded
import dummyIcon from "../assets/weather/64x64/day/113.png";

const createHourlyWeatherItem = () => {
  let container = document.createElement("div");

  // Hour > put dummy for now because API might give hours for html textContent
  let hour = document.createElement("div");
  hour.textContent = "1 AM";
  container.appendChild(hour);

  // weather icon
  // need to call weatherIcon module to decide what icon to input
  // for now, put a dummy icon provided by WeatherAPI
  const myIcon = new Image();
  myIcon.src = dummyIcon;
  container.appendChild(myIcon);

  // Hourly Temperature > put dummy number for now
  let temperature = document.createElement("div");
  temperature.textContent = "20 °C";
  container.appendChild(temperature);

  return container;
};

const createHourlyWeather = () => {
  let container = document.createElement("div");
  container.classList.add("horizontal-scroll-container");
  container.setAttribute("id", "hourly-weather-container");

  for (let i = 0; i < 24; i++) {
    container.appendChild(createHourlyWeatherItem());
  }

  return container;
};

export default createHourlyWeather;
