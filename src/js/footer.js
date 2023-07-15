import githubLogo from "../assets/github-mark-white.svg";

const createFooter = () => {
  let footer = document.createElement("footer");

  let copyrightContainer = document.createElement("span");

  let copyright = document.createElement("span");
  copyright.textContent = "Copyright © 2023 tommy128works";
  copyrightContainer.appendChild(copyright);

  let githubAnchor = document.createElement("a");
  githubAnchor.setAttribute("target", "_blank");
  githubAnchor.setAttribute(
    "href",
    "https://github.com/tommy128works/Weather-App"
  );
  let img = new Image();
  img.src = githubLogo;
  img.classList.add("footer-icon");

  githubAnchor.appendChild(img);
  copyrightContainer.appendChild(githubAnchor);
  footer.appendChild(copyrightContainer);

  let divider = document.createElement("span");
  divider.textContent = "|";
  divider.classList.add("divider");
  footer.appendChild(divider);

  let weatherAPIContainer = document.createElement("span");
  weatherAPIContainer.textContent = "Powered by ";

  let weatherAPI = document.createElement("a");
  weatherAPI.setAttribute("href", "https://www.weatherapi.com/");
  weatherAPI.setAttribute("target", "_blank");
  weatherAPI.textContent = "WeatherAPI.com";

  weatherAPIContainer.appendChild(weatherAPI);
  footer.appendChild(weatherAPIContainer);

  return footer;
};

export default createFooter;
