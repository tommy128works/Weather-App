// receive string and use API to return data
// fetch and promise stuff
const weather = (tempC, tempF, condition) => {
  const getTempC = () => tempC;
  const getName = () => tempF;
  const getCondition = () => condition;
  return { getTempC, getName, getCondition };
};

async function getWeather(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=e2f1b813fe00403ca3542726231905&q=" +
        location,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
    console.log(data.current.temp_c);
    const obj = weather(
      data.current.temp_c,
      data.current.temp_f,
      data.current.condition.text
    );
    return obj;
  } catch (err) {
    console.log(err);
  }
}

const london = getWeather("london");
console.log(london.getTempC);

// form input with submit button hm

// update page with weather images
