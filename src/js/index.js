import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

// logic-related modules
// // import { onStartUp } from "./dataHandler";

// UI modules
// // import { header } from "./header";
// // import footer from "./footer";

let topPanel = document.createElement("div");
topPanel.classList.add("top-panel");

let leftPanel = document.createElement("div");
leftPanel.classList.add("left-panel");
topPanel.appendChild(leftPanel);

let rightPanel = document.createElement("div");
rightPanel.classList.add("right-panel");
topPanel.appendChild(rightPanel);

document.body.appendChild(topPanel);

let bottomPanel = document.createElement("div");
bottomPanel.classList.add("bottom-panel");
document.body.appendChild(bottomPanel);
