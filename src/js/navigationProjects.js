const createProjectButton = (title) => {
  let btn = document.createElement("button");
  btn.classList.add(
    "btn",
    "btn-secondary",
    "btn-primary",
    "sidebar-item",
    "navigation-button"
  );
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.setAttribute("data-title", title);

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "drag_indicator";
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("sidebar-text");
  span.textContent = title;
  btn.appendChild(span);

  let optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  span = document.createElement("span");
  span.classList.add("material-symbols-outlined", "project-options-icon");
  span.textContent = "more_vert";
  optionsContainer.appendChild(span);

  optionsContainer.appendChild(createProjectOptions());

  btn.appendChild(optionsContainer);

  return btn;
};

const createAddButton = () => {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary", "btn-primary", "sidebar-item");
  btn.classList.toggle("btn-primary");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "add-project-button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);

  span = document.createElement("span");
  span.textContent = "Add Project";
  btn.appendChild(span);

  return btn;
};

const createAddProjectFormModal = () => {
  let projectModal = document.createElement("div");
  projectModal.classList.add("modal-form");

  let projectModalForm = document.createElement("form");
  projectModal.setAttribute("id", "project-form");
  projectModalForm.classList.add("modal-form-content");

  let label = document.createElement("label");
  label.setAttribute("for", "project_name");
  label.textContent = "*Project Name:";
  projectModalForm.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "project_name");
  input.setAttribute("id", "project_name");
  input.required = true;
  projectModalForm.appendChild(input);

  let btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  let submitBtn = document.createElement("button");
  // "submit" submits the form and refreshes page, but this specific application may not need to submit to a real database
  // if no real database, you can set type = "button" to stop refreshes
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit-project-button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("btn", "btn-success");
  btnsContainer.appendChild(submitBtn);

  let cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("id", "cancel-project-button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("btn", "btn-danger");
  btnsContainer.appendChild(cancelBtn);
  projectModalForm.appendChild(btnsContainer);

  projectModal.appendChild(projectModalForm);

  return projectModal;
};

const createProjectOptions = () => {
  let container = document.createElement("div");
  container.classList.add("project-options", "options");

  let editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-warning");
  editBtn.textContent = "Rename";
  container.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-warning");
  deleteBtn.textContent = "Delete";
  container.appendChild(deleteBtn);

  return container;
};

const navigationProjects = (projectsTitles) => {
  let container = document.createElement("div");
  container.classList.add("btn-group-vertical");

  let heading = document.createElement("h1");
  heading.classList.add("medium-font", "sidebar-heading");
  heading.textContent = "Projects";
  container.appendChild(heading);

  if (projectsTitles.length > 0) {
    for (let i = 0; i < projectsTitles.length; i++) {
      container.appendChild(createProjectButton(projectsTitles[i]));
    }
  }

  container.appendChild(createAddButton());
  container.appendChild(createAddProjectFormModal());

  return container;
};

export default navigationProjects;
