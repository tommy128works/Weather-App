// dummy image until weatherIcon module is coded
// import dummyIcon from "../assets/weather/64x64/day/113.png";

const createDailyWeatherItem = () => {
  let container = document.createElement("div");

  // Day > put dummy for now because API might give day of week for html textContent
  let day = document.createElement("div");
  day.textContent = "Monday";
  container.appendChild(day);

  // weather icon
  // need to call weatherIcon module to decide what icon to input
  // for now, put a dummy icon provided by WeatherAPI
  const myIcon = new Image();
  // myIcon.src = dummyIcon;
  container.appendChild(myIcon);

  // Daily Temperature > put dummy number for now
  let temperature = document.createElement("div");
  temperature.textContent = "20 °C 10 °C";
  container.appendChild(temperature);

  return container;
};

const createDailyWeather = () => {
  let container = document.createElement("div");
  container.classList.add("daily-weather-container");
  // container.setAttribute("id", "hourly-weather-container");

  for (let i = 0; i < 7; i++) {
    container.appendChild(createDailyWeatherItem());
  }

  return container;
};

export default createDailyWeather;
