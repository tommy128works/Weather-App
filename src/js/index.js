import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
import {
  getCurrentWeatherData,
  getForecastWeatherData,
} from "./weatherAPIHandler";

// UI modules
import createControlCenter from "./controlCenterUI";
import createWeatherDetails from "./weatherDetailsUI";
import createHourlyWeather from "./hourlyWeatherUI";
import addDragToScroll from "./addDragToScroll";
import createDailyWeather from "./dailyWeatherUI";
import createFooter from "./footer";

const loadPage = async (location) => {
  try {
    const currentData = await getCurrentWeatherData(location);
    let forecastData = getForecastWeatherData(location);

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

    let rightPanel = createWeatherDetails();
    rightPanel.classList.add("right-panel");
    topPanel.appendChild(rightPanel);

    document.body.appendChild(topPanel);

    let bottomPanel = document.createElement("div");
    bottomPanel.classList.add("bottom-panel");
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

loadPage("lOS ANGELES");
