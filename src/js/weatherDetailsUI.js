// Feels Like
// Humidity
// Chance of Rain
// Precipitation
// Wind Speed
// UV Index
// Sunrise - optional
// Sunset - optional

// put this into its own module because other modules will need this info
// getWeatherIcon();
// needs an additional array that matches API data code with array index
const images = require.context("../assets/weather/64x64/day", true);
const dayImageList = images.keys().map(image => images(image));
const nightImageList = images.keys().map(image => images(image));

// dummy image
// need to replace this with an array of images from folder of weatherDetails icons
import Icon from "../assets/weather/64x64/day/113.png";

const createDetail = (property, value, imagePath) => {
  let container = document.createElement("div");
  container.classList.add("weather-detail-container");

  let leftPanel = document.createElement("div");
  leftPanel.classList.add("left-panel");
  
  // dummy image for now
  const myIcon = new Image();
  myIcon.src = Icon;
  leftPanel.appendChild(myIcon);
  container.appendChild(leftPanel);

  let rightPanel = document.createElement("div");
  rightPanel.classList.add("right-panel");
  
  let weatherProperty = document.createElement("div");
  weatherProperty.textContent = property;
  weatherProperty.classList.add("smallest-font");
  rightPanel.appendChild(weatherProperty);
  
  let weatherPropertyValue = document.createElement("div");
  weatherPropertyValue.textContent = value;
  weatherPropertyValue.classList.add("small-font");
  rightPanel.appendChild(weatherPropertyValue);
  
  container.appendChild(rightPanel);

  return container;
}



const createWeatherDetails = () => {
  let container = document.createElement("div");

  container.appendChild(createDetail("Feels Like", "25 °C"));
  container.appendChild(createDetail("Humidity", "46 %"));
  container.appendChild(createDetail("Chance of Rain", "1 %"));
  container.appendChild(createDetail("Precipitation", "1.47 cm")); // units depend on what WeatherAPI returns
  container.appendChild(createDetail("Wind Speed", "9.6 km/h"));
  container.appendChild(createDetail("UV Index", "0.56"));
  container.appendChild(createDetail("Sunrise", "23:07"));
  container.appendChild(createDetail("Sunset", "16:07"));
  
  return container;
};

export default createWeatherDetails;
