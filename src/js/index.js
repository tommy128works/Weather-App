import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
// // import { onStartUp } from "./dataHandler";

// UI modules
import createControlCenter from "./controlCenterUI";
import createWeatherDetails from "./weatherDetailsUI";
// // import footer from "./footer";

let topPanel = document.createElement("div");
topPanel.classList.add("top-panel");

let leftPanel = createControlCenter();
leftPanel.classList.add("left-panel");
topPanel.appendChild(leftPanel);

let rightPanel = createWeatherDetails();
rightPanel.classList.add("right-panel");
topPanel.appendChild(rightPanel);

document.body.appendChild(topPanel);

let bottomPanel = document.createElement("div");
bottomPanel.classList.add("bottom-panel");
document.body.appendChild(bottomPanel);
