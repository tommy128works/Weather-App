const MAXIMUM_HOURLY_FORECAST = 25;

import convert24HourTo12Hour from "./convert24HourTo12Hour";

const filterForecastDataForHourlyWeather = (forecastData) => {
  let localTime = forecastData.location.localtime.split(" ");
  let currentLocalTime = localTime[1].split(":");
  let startingHour = Number(currentLocalTime[0]);

  let hours = [];
  let weatherIcons = [];
  let tempsC = [];
  let tempsF = [];
  let willItRain = [];
  let willItSnow = [];
  let rainChance = [];
  let snowChance = [];

  for (let i = 0; i < MAXIMUM_HOURLY_FORECAST; i++) {
    if (i === 0) {
      hours[i] = "Now";
    } else {
      hours[i] = convert24HourTo12Hour(startingHour + i);
    }

    if (startingHour + i < 24) {
      weatherIcons[i] =
        forecastData.forecast.forecastday[0].hour[
          startingHour + i
        ].condition.icon;
      tempsC[i] =
        forecastData.forecast.forecastday[0].hour[startingHour + i].temp_c;
      tempsF[i] =
        forecastData.forecast.forecastday[0].hour[startingHour + i].temp_f;
      willItRain[i] =
        forecastData.forecast.forecastday[0].hour[
          startingHour + i
        ].will_it_rain;
      willItSnow[i] =
        forecastData.forecast.forecastday[0].hour[
          startingHour + i
        ].will_it_snow;
      rainChance[i] =
        forecastData.forecast.forecastday[0].hour[
          startingHour + i
        ].chance_of_rain;
      snowChance[i] =
        forecastData.forecast.forecastday[0].hour[
          startingHour + i
        ].chance_of_snow;
    } else {
      weatherIcons[i] =
        forecastData.forecast.forecastday[1].hour[
          startingHour + i - 24
        ].condition.icon;
      tempsC[i] =
        forecastData.forecast.forecastday[1].hour[startingHour + i - 24].temp_c;
      tempsF[i] =
        forecastData.forecast.forecastday[1].hour[startingHour + i - 24].temp_f;
      willItRain[i] =
        forecastData.forecast.forecastday[1].hour[
          startingHour + i - 24
        ].will_it_rain;
      willItSnow[i] =
        forecastData.forecast.forecastday[1].hour[
          startingHour + i - 24
        ].will_it_snow;
      rainChance[i] =
        forecastData.forecast.forecastday[1].hour[
          startingHour + i - 24
        ].chance_of_rain;
      snowChance[i] =
        forecastData.forecast.forecastday[1].hour[
          startingHour + i - 24
        ].chance_of_snow;
    }
  }

  return {
    hours,
    weatherIcons,
    tempsC,
    tempsF,
    willItRain,
    willItSnow,
    rainChance,
    snowChance,
  };
};

const createHourlyWeatherItem = () => {
  let container = document.createElement("div");

  // Hour > put dummy for now because API might give hours for html textContent
  let hour = document.createElement("div");
  hour.textContent = "1 AM";
  container.appendChild(hour);

  // weather icon
  // fetched WeatherAPI data provide weather icon image link
  const myIcon = new Image();
  // myIcon.src = dummyIcon;
  container.appendChild(myIcon);

  // Hourly Temperature > put dummy number for now
  let temperature = document.createElement("div");
  temperature.textContent = "20 °C";
  container.appendChild(temperature);

  return container;
};

const createHourlyWeather = () => {
  let container = document.createElement("div");
  container.classList.add(
    "horizontal-scroll-container",
    "hourly-weather-container"
  );
  container.setAttribute("id", "hourly-weather-container");

  for (let i = 0; i < 24; i++) {
    container.appendChild(createHourlyWeatherItem());
  }

  return container;
};

export { createHourlyWeather, filterForecastDataForHourlyWeather };
