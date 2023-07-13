// put this into its own module because other modules will need this info
// getWeatherIcon();
// needs an additional array that matches API data code with array index
const images = require.context("../assets/weather/64x64/day", true);
const dayImageList = images.keys().map((image) => images(image));
const nightImageList = images.keys().map((image) => images(image));

// actual images
import feelsLikeIcon from "../assets/weather-details-icons/feels-like.png";
import humidityIcon from "../assets/weather-details-icons/humidity.png";
import chanceOfRainIcon from "../assets/weather-details-icons/chance-of-rain.png";
import precipitationIcon from "../assets/weather-details-icons/precipitation.png";
import windSpeedIcon from "../assets/weather-details-icons/wind-speed.png";
import UVIndexIcon from "../assets/weather-details-icons/UV-index.png";
import sunriseIcon from "../assets/weather-details-icons/sunrise.png";
import sunsetIcon from "../assets/weather-details-icons/sunset.png";

const createWeatherDetailItem = (property, value) => {
  let container = document.createElement("div");
  container.classList.add("weather-detail-container");

  let leftPanel = document.createElement("div");
  leftPanel.classList.add("left-panel");

  const myIcon = new Image();
  switch (property) {
    case "Feels Like":
      myIcon.src = feelsLikeIcon;
      break;
    case "Humidity":
      myIcon.src = humidityIcon;
      break;
    case "Chance of Rain":
      myIcon.src = chanceOfRainIcon;
      break;
    case "Precipitation":
      myIcon.src = precipitationIcon;
      break;
    case "Wind Speed":
      myIcon.src = windSpeedIcon;
      break;
    case "UV Index":
      myIcon.src = UVIndexIcon;
      break;
    case "Sunrise":
      myIcon.src = sunriseIcon;
      break;
    case "Sunset":
      myIcon.src = sunsetIcon;
      break;
  }
  leftPanel.appendChild(myIcon);
  container.appendChild(leftPanel);

  let rightPanel = document.createElement("div");
  rightPanel.classList.add("right-panel");

  let weatherProperty = document.createElement("div");
  weatherProperty.textContent = property;
  weatherProperty.classList.add("smallest-font");
  rightPanel.appendChild(weatherProperty);

  let weatherPropertyValue = document.createElement("div");
  weatherPropertyValue.textContent = value;
  weatherPropertyValue.classList.add("small-font");
  rightPanel.appendChild(weatherPropertyValue);

  container.appendChild(rightPanel);

  return container;
};

const createWeatherDetails = () => {
  let container = document.createElement("div");

  container.appendChild(createWeatherDetailItem("Feels Like", "25 °C"));
  container.appendChild(createWeatherDetailItem("Humidity", "46 %"));
  container.appendChild(createWeatherDetailItem("Chance of Rain", "1 %"));
  container.appendChild(createWeatherDetailItem("Precipitation", "1.47 cm")); // units depend on what WeatherAPI returns
  container.appendChild(createWeatherDetailItem("Wind Speed", "9.6 km/h"));
  container.appendChild(createWeatherDetailItem("UV Index", "0.56"));
  container.appendChild(createWeatherDetailItem("Sunrise", "23:07"));
  container.appendChild(createWeatherDetailItem("Sunset", "16:07"));

  return container;
};

export default createWeatherDetails;
