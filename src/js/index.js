import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
import { getCurrentWeatherData, getForecastWeatherData } from "./weatherAPIHandler";

// UI modules
import createControlCenter from "./controlCenterUI";
import createWeatherDetails from "./weatherDetailsUI";
import createHourlyWeather from "./hourlyWeatherUI";
import addDragToScroll from "./addDragToScroll";
import createDailyWeather from "./dailyWeatherUI";
import createFooter from "./footer";


let currentWeatherData = getCurrentWeatherData("lOS ANGELES");
let forecastWeatherData = getForecastWeatherData("lOS ANGELES");


let topPanel = document.createElement("div");
topPanel.classList.add("panel-container", "top-panel");

let leftPanel = createControlCenter();
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

// currently testing WeatherAPI Module

