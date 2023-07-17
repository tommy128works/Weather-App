const FORECAST_DAYS = 3;

const getCurrentWeatherData = async (location) => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=e2f1b813fe00403ca3542726231905&q=" +
        location,
      { mode: "cors" }
    );
    const data = await response.json();
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
