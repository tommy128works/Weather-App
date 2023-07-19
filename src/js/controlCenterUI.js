import { convert24TimeTo12Time } from "./convert24HourTo12Hour";

const createControlCenter = (
  weatherCondition,
  location,
  date,
  time,
  tempC,
  tempF,
  weatherIcon
) => {
  let container = document.createElement("div");

  let currentWeather = document.createElement("div");
  currentWeather.textContent = weatherCondition;
  currentWeather.classList.add("large-font");
  container.appendChild(currentWeather);

  let currentLocation = document.createElement("div");
  currentLocation.textContent = location;
  currentLocation.classList.add("medium-font");
  container.appendChild(currentLocation);

  let currentDate = document.createElement("div");
  currentDate.textContent = date;
  currentDate.classList.add("small-font");
  container.appendChild(currentDate);

  let currentTime = document.createElement("div");
  currentTime.textContent = convert24TimeTo12Time(time);
  currentTime.classList.add("small-font");
  container.appendChild(currentTime);

  let currentTempC = document.createElement("div");
  currentTempC.textContent = tempC + "°C";
  currentTempC.classList.add("large-font", "bold", "metric-units");
  container.appendChild(currentTempC);

  let currentTempF = document.createElement("div");
  currentTempF.textContent = tempF + "°F";
  currentTempF.classList.add("large-font", "bold", "imperial-units");
  container.appendChild(currentTempF);

  let unitsButton = document.createElement("button");
  unitsButton.textContent = "Toggle Units";
  unitsButton.classList.add("small-font", "units-button");
  container.appendChild(unitsButton);

  let imageContainer = document.createElement("div");
  const myIcon = new Image();
  myIcon.src = weatherIcon;
  imageContainer.appendChild(myIcon);
  container.appendChild(imageContainer);

  let searchBoxContainer = document.createElement("div");

  let searchBoxInput = document.createElement("input");
  searchBoxInput.setAttribute("type", "text");
  searchBoxInput.setAttribute("id", "location");
  searchBoxInput.setAttribute("placeholder", "Search Location...");
  searchBoxContainer.appendChild(searchBoxInput);

  let searchBoxMessage = document.createElement("div");
  searchBoxMessage.setAttribute("id", "search-box-message");
  searchBoxContainer.appendChild(searchBoxMessage);

  container.appendChild(searchBoxContainer);

  return container;
};

export default createControlCenter;
