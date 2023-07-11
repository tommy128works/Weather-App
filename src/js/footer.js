import githubLogo from "./images/github-mark-white.svg";

const footer = () => {
  let footer = document.createElement("footer");
  footer.classList.add("bg-dark");
  // footer.setAttribute("data-bs-theme", "dark");

  // credit to icons

  // copyright = Copyright (c) 2023 tommy128works
  let span = document.createElement("span");
  span.textContent = "Copyright © 2023 tommy128works";
  footer.appendChild(span);

  // github icon
  let anchor = document.createElement("a");
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("href", "https://github.com/tommy128works/Todo-List");
  let img = new Image();
  img.src = githubLogo;
  img.classList.add("footer-icon");

  anchor.appendChild(img);
  footer.appendChild(anchor);

  return footer;
};

export default footer;
