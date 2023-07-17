import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import {
  getCurrentWeatherData,
  getForecastWeatherData,
} from "./weatherAPIHandler";
import createControlCenter from "./controlCenterUI";
import createWeatherDetails from "./weatherDetailsUI";
import {
  createHourlyWeather,
  filterForecastDataForHourlyWeather,
} from "./hourlyWeatherUI";
import addDragToScroll from "./addDragToScroll";
import createDailyWeather from "./dailyWeatherUI";
import createFooter from "./footer";

const loadPage = async (location) => {
  try {
    let [currentData, forecastData] = await Promise.all([
      getCurrentWeatherData(location),
      getForecastWeatherData(location),
    ]);

    let topPanel = document.createElement("div");
    topPanel.classList.add("panel-container", "top-panel");

    let localTime = currentData.location.localtime.split(" ");

    let leftPanel = createControlCenter(
      currentData.current.condition.text,
      currentData.location.name + ", " + currentData.location.region,
      localTime[0],
      localTime[1],
      currentData.current.temp_c,
      currentData.current.temp_f,
      currentData.current.condition.icon
    );
    leftPanel.classList.add("left-panel");
    topPanel.appendChild(leftPanel);

    let rightPanel = createWeatherDetails(
      currentData.current.feelslike_c,
      currentData.current.feelslike_f,
      currentData.current.humidity,
      currentData.current.precip_mm,
      currentData.current.precip_in,
      currentData.current.wind_kph,
      currentData.current.wind_mph,
      currentData.current.uv,
      forecastData.forecast.forecastday[0].astro.sunrise,
      forecastData.forecast.forecastday[0].astro.sunset
    );
    rightPanel.classList.add("right-panel");
    topPanel.appendChild(rightPanel);

    document.body.appendChild(topPanel);

    let bottomPanel = document.createElement("div");
    bottomPanel.classList.add("bottom-panel");

    // hour
    // weather icon + chance of precipitation
    // maybe need weather condition to check if its snowing or raining
    // hourly temperature
    console.log(forecastData);
    let hourlyData = filterForecastDataForHourlyWeather(forecastData);
    console.log(hourlyData);

    bottomPanel.appendChild(createHourlyWeather());
    bottomPanel.appendChild(createDailyWeather());

    document.body.appendChild(bottomPanel);
    addDragToScroll("hourly-weather-container");

    document.body.appendChild(createFooter());
  } catch (error) {
    console.log(error);
    console.log("Unable to retrieve weather data");
  }
};

// loadPage("lOS ANGELES");
loadPage("sudbury");
