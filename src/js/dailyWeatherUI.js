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

const createDailyWeatherItem = (
  date,
  weatherIcon,
  rainChance,
  snowChance,
  maxTempC,
  minTempC,
  maxTempF,
  minTempF
) => {
  let container = document.createElement("div");

  const d = new Date(date);
  // new Date() subtracts a day automatically.
  // I add 1 to compensate for this bug.
  let day = d.getDay() + 1; 

  let dayOfTheWeek = document.createElement("div");
  switch (day) {
    case 0:
      dayOfTheWeek.textContent = "Sunday";
      break;
    case 1:
      dayOfTheWeek.textContent = "Monday";
      break;
    case 2:
      dayOfTheWeek.textContent = "Tuesday";
      break;
    case 3:
      dayOfTheWeek.textContent = "Wednesday";
      break;
    case 4:
      dayOfTheWeek.textContent = "Thursday";
      break;
    case 5:
      dayOfTheWeek.textContent = "Friday";
      break;
    case 6:
      dayOfTheWeek.textContent = "Saturday";
      break;
  }
  container.appendChild(dayOfTheWeek);

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
  temperatureC.textContent = "High: " + maxTempC + "°C Low: " + minTempC + "°C"; 
  container.appendChild(temperatureC);
  
  let temperatureF = document.createElement("div");
  temperatureF.textContent = "High: " + maxTempF + "°F Low: " + minTempF + "°F"; 
  container.appendChild(temperatureF);

  return container;
};

const createDailyWeather = (
  dates,
  weatherIcons,
  rainChances,
  snowChances,
  maxTempsC,
  minTempsC,
  maxTempsF,
  minTempsF
) => {
  let container = document.createElement("div");
  container.classList.add("daily-weather-container");

  for (let i = 0; i < MAXIMUM_FORECAST_DAYS; i++) {
    container.appendChild(createDailyWeatherItem(
      dates[i],
      weatherIcons[i],
      rainChances[i],
      snowChances[i],
      maxTempsC[i],
      minTempsC[i],
      maxTempsF[i],
      minTempsF[i]
    ));
  }

  return container;
};

export { createDailyWeather, filterForecastDataForDailyWeather };
