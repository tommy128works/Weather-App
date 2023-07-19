const addEventListenersToUnitsButtons = () => {
  let unitsButton = document.querySelector(".units-button");

  let metricUnits = document.querySelectorAll(".metric-units");
  let imperialUnits = document.querySelectorAll(".imperial-units");

  unitsButton.addEventListener("click", (event) => {
    metricUnits.forEach((element) => {
      if (element.style.display === "none") {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
    imperialUnits.forEach((element) => {
      if (element.style.display === "none") {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
  });

  imperialUnits.forEach((element) => {
    element.style.display = "none";
  });
};

export default addEventListenersToUnitsButtons;
