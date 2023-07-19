import { convert24HourTo12Hour } from "./convert24HourTo12Hour";

const MAXIMUM_HOURLY_FORECAST = 25;

const filterForecastDataForHourlyWeather = (forecastData) => {
  let localTime = forecastData.location.localtime.split(" ");
  let currentLocalTime = localTime[1].split(":");
  let startingHour = Number(currentLocalTime[0]);

  let hours = [];
  let weatherIcons = [];
  let tempsC = [];
  let tempsF = [];
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
    rainChance,
    snowChance,
  };
};

const createHourlyWeatherItem = (
  hour,
  weatherIcon,
  tempC,
  tempF,
  rainChance,
  snowChance
) => {
  let container = document.createElement("div");

  let hourContainer = document.createElement("div");
  hourContainer.textContent = hour;
  container.appendChild(hourContainer);

  let weatherContainer = document.createElement("div");

  const myIcon = new Image();
  myIcon.src = weatherIcon;
  weatherContainer.appendChild(myIcon);

  let precipitationChance = document.createElement("div");
  if (rainChance > snowChance) {
    precipitationChance.textContent = rainChance + "%";
  } else if (snowChance > rainChance) {
    precipitationChance.textContent = snowChance + "%";
  } else if (rainChance === snowChance && rainChance !== 0) {
    precipitationChance.textContent = rainChance + "%";
  }
  weatherContainer.appendChild(precipitationChance);
  container.appendChild(weatherContainer);

  let temperatureC = document.createElement("div");
  temperatureC.textContent = tempC + "°C";
  container.appendChild(temperatureC);

  let temperatureF = document.createElement("div");
  temperatureF.textContent = tempF + "°F";
  container.appendChild(temperatureF);

  return container;
};

const createHourlyWeather = (
  hours,
  weatherIcons,
  tempsC,
  tempsF,
  rainChance,
  snowChance
) => {
  let container = document.createElement("div");
  container.classList.add(
    "horizontal-scroll-container",
    "hourly-weather-container"
  );
  container.setAttribute("id", "hourly-weather-container");

  for (let i = 0; i < MAXIMUM_HOURLY_FORECAST; i++) {
    container.appendChild(
      createHourlyWeatherItem(
        hours[i],
        weatherIcons[i],
        tempsC[i],
        tempsF[i],
        rainChance[i],
        snowChance[i]
      )
    );
  }

  return container;
};

export { createHourlyWeather, filterForecastDataForHourlyWeather };
