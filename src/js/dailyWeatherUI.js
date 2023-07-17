const MAXIMUM_FORECAST_DAYS = 3;

const filterForecastDataForDailyWeather = (forecastData) => {
  let dates = [];
  let weatherIcons = [];
  let rainChances = [];
  let snowChances = [];
  let maxTempsC = [];
  let minTempsC = [];
  let maxTempsF = [];
  let minTempsF = [];

  for (let i = 0; i < MAXIMUM_FORECAST_DAYS; i++) {
    dates[i] = forecastData.forecast.forecastday[i].date;
    weatherIcons[i] = forecastData.forecast.forecastday[i].day.condition.icon;
    rainChances[i] =
      forecastData.forecast.forecastday[i].day.daily_chance_of_rain;
    snowChances[i] =
      forecastData.forecast.forecastday[i].day.daily_chance_of_snow;
    maxTempsC[i] = forecastData.forecast.forecastday[i].day.maxtemp_c;
    minTempsC[i] = forecastData.forecast.forecastday[i].day.mintemp_c;
    maxTempsF[i] = forecastData.forecast.forecastday[i].day.maxtemp_f;
    minTempsF[i] = forecastData.forecast.forecastday[i].day.maxtemp_f;
  }

  return {
    dates,
    weatherIcons,
    rainChances,
    snowChances,
    maxTempsC,
    minTempsC,
    maxTempsF,
    minTempsF,
  };
};

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

  // Daily Temperature > use H:temp L:Temp format
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

export { createDailyWeather, filterForecastDataForDailyWeather };
