const FORECAST_DAYS = 3;

const getCurrentWeatherData = async (location) => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=e2f1b813fe00403ca3542726231905&q=" +
        location,
      { mode: "cors" }
    );

    const data = await response.json();

    let localtime = data.location.localtime.split(" ");

    let currentData = {
      // location
      location: data.location.name + ", " + data.location.region,
      // today's date
      date: localtime[0],
      // current time
      localTime: localtime[1],
      // current temperature (C and F)
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      // current weather condition + is day or night
      weatherCondition: data.current.condition.text,
      weatherIcon: data.current.condition.icon,
      weatherCode: data.current.condition.code,
      isDay: data.current.is_day,
      // Feels like (C and F)
      tempFeelsLikeC: data.current.feelslike_c,
      tempFeelsLikeF: data.current.feelslike_f,
      // Humidity
      humidity: data.current.humidity,
      // Chance of Rain

      // Precipitation
      precipitation_mm: data.current.precip_mm,
      precipitation_in: data.current.precip_in,
      // Wind Speed
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      // UV Index
      UVIndex: data.current.uv,
      // Sunrise

      // Sunset
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getForecastWeatherData = async (location) => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=e2f1b813fe00403ca3542726231905&q=" +
        location +
        "&days=" +
        FORECAST_DAYS,
      { mode: "cors" }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCurrentWeatherData, getForecastWeatherData };
