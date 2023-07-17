import feelsLikeIcon from "../assets/weather-details-icons/feels-like.png";
import humidityIcon from "../assets/weather-details-icons/humidity.png";
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

const createWeatherDetails = (
  tempCFeelsLike,
  tempFFeelsLike,
  humidity,
  precipitation_mm,
  precipitation_in,
  wind_kph,
  wind_mph,
  UVIndex,
  sunrise,
  sunset
) => {
  let container = document.createElement("div");

  container.appendChild(
    createWeatherDetailItem("Feels Like", tempCFeelsLike + " °C")
  );
  container.appendChild(
    createWeatherDetailItem("Feels Like", tempFFeelsLike + " °F")
  );
  container.appendChild(createWeatherDetailItem("Humidity", humidity));
  container.appendChild(
    createWeatherDetailItem("Precipitation", precipitation_mm + " mm")
  );
  container.appendChild(
    createWeatherDetailItem("Precipitation", precipitation_in + " in")
  );
  container.appendChild(
    createWeatherDetailItem("Wind Speed", wind_kph + " km/h")
  );
  container.appendChild(
    createWeatherDetailItem("Wind Speed", wind_mph + " mph")
  );
  container.appendChild(createWeatherDetailItem("UV Index", UVIndex));
  container.appendChild(createWeatherDetailItem("Sunrise", sunrise));
  container.appendChild(createWeatherDetailItem("Sunset", sunset));

  return container;
};

export default createWeatherDetails;
