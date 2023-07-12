// Current weather
// Current location setting
// Today's Date
// Current Time
// Toggle temperature units



const createControlCenter = () => {
  let container = document.createElement("div");

  let currentWeather = document.createElement("div");
  currentWeather.textContent = "Current Weather";
  currentWeather.classList.add("large-font");
  container.appendChild(currentWeather);

  let currentLocation = document.createElement("div");
  currentLocation.textContent = "Current Location";
  currentLocation.classList.add("medium-font");
  container.appendChild(currentLocation);

  let currentDate = document.createElement("div");
  currentDate.textContent = "Thursday, July 13th, 2023";
  currentDate.classList.add("small-font");
  container.appendChild(currentDate);

  let currentTime = document.createElement("div");
  currentTime.textContent = "10:00 AM";
  currentTime.classList.add("small-font");
  container.appendChild(currentTime);

  // Need to receive temperature
  let currentTemperature = document.createElement("div");
  currentTemperature.textContent = "10 °C";
  currentTemperature.classList.add("large-font", "bold");
  container.appendChild(currentTemperature);

  let temperatureUnitsButton = document.createElement("button");
  temperatureUnitsButton.textContent = "Display °F";
  temperatureUnitsButton.classList.add("small-font");
  container.appendChild(temperatureUnitsButton);


  return container;
};


export default createControlCenter;