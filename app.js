// receive string and use API to return data
// fetch and promise stuff
async function getWeather(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=e2f1b813fe00403ca3542726231905&q=" +
      location,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
}

getWeather("london");

// process JSON data for required data

// form input with submit button hm

// update page with weather images
