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
import {
  createDailyWeather,
  filterForecastDataForDailyWeather,
} from "./dailyWeatherUI";
import createFooter from "./footer";

const addEventListenersToSearchBox = (id) => {
  let location = document.getElementById(id);

  location.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      loadPage(location.value);
    }
  });
};

const loadPage = async (location) => {
  try {
    let [currentData, forecastData] = await Promise.all([
      getCurrentWeatherData(location),
      getForecastWeatherData(location),
    ]);

    document.body.innerHTML = "";
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

    let hourlyData = filterForecastDataForHourlyWeather(forecastData);
    bottomPanel.appendChild(
      createHourlyWeather(
        hourlyData.hours,
        hourlyData.weatherIcons,
        hourlyData.tempsC,
        hourlyData.tempsF,
        hourlyData.rainChance,
        hourlyData.snowChance
      )
    );

    let dailyData = filterForecastDataForDailyWeather(forecastData);
    bottomPanel.appendChild(
      createDailyWeather(
        dailyData.dates,
        dailyData.weatherIcons,
        dailyData.rainChances,
        dailyData.snowChances,
        dailyData.maxTempsC,
        dailyData.minTempsC,
        dailyData.maxTempsF,
        dailyData.minTempsF
      )
    );

    document.body.appendChild(bottomPanel);
    addDragToScroll("hourly-weather-container");

    document.body.appendChild(createFooter());

    addEventListenersToSearchBox("location");
  } catch (error) {
    console.log(error);
    console.log("Unable to retrieve weather data");
    // let searchBoxMessage = document.getElementById("search-box-message");
    // searchBoxMessage.textContent =
    //   'Location not found. Search must be in the form of "City", "City, State" or "City, Country"';
  }
};

// loadPage("lOS ANGELES");
loadPage("Vancouver");
