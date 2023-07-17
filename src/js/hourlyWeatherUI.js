const MAXIMUM_HOURLY_FORECAST = 25;

const convert24HourTo12Hour = (number) => {
  if (number === 0) {
    return "12AM";
  } else if (number < 12) {
    return number + "AM";
  } else if (number === 12) {
    return "12PM";
  } else if (number > 12 && number < 24) {
    return number - 12 + "PM";
  } else if (number >= 24) {
    return convert24HourTo12Hour(number - 24);
  }
};

const filterForecastDataForHourlyWeather = (forecastData) => {
  let localTime = forecastData.location.localtime.split(" ");
  let currentLocalTime = localTime[1].split(":");
  let startingHour = Number(currentLocalTime[0]);

  let hoursArray = [];

  // need to create 25-index array for each property
  for (let i = 0; i < MAXIMUM_HOURLY_FORECAST; i++) {
    // hours
    if (i === 0) {
      hoursArray[i] = "Now";
    } else {
      hoursArray[i] = convert24HourTo12Hour(startingHour + i);
    }
    // hourly weather icon
    // hourly temperature
    // hourly will it rain
    // hourly will it snow
    // hourly chance of rain
    // hourly chance of snow
  }

  return hoursArray;
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
