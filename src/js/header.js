const addToggleSidebarEventListener = () => {
  let btn = document.getElementById("toggleSidebarButton");

  btn.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");

    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
    }
  });
};

const createTogglerButton = () => {
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  let span = document.createElement("span");
  span.classList.add("navbar-toggler-icon");
  btn.appendChild(span);
  btn.setAttribute("id", "toggleSidebarButton");

  return btn;
};

const header = () => {
  let header = document.createElement("header");
  header.classList.add("navbar", "bg-dark", "large-font");
  header.setAttribute("data-bs-theme", "dark");
  let div = document.createElement("div");
  div.classList.add("container-fluid");

  div.appendChild(createTogglerButton());

  let span = document.createElement("span");
  span.classList.add("navbar-brand", "large-font");
  span.textContent = "Todo List";
  div.appendChild(span);

  header.appendChild(div);
  return header;
};

export { header, addToggleSidebarEventListener };
