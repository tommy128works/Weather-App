const createTitle = (currentPage) => {
  let div = document.createElement("div");
  div.classList.add("large-font");
  div.setAttribute("id", "content-title");
  div.textContent = currentPage;

  return div;
};

const createTaskItem = (title, description, dueDate, project) => {
  let container = document.createElement("span");
  container.classList.add("task-item");
  container.setAttribute("data-project", project);
  container.setAttribute("data-task", title);

  let span = document.createElement("span");
  span.classList.add(
    "material-symbols-outlined",
    "is-complete-icon",
    "cursor-pointer"
  );
  container.appendChild(span);

  let textContainer = document.createElement("div");
  textContainer.classList.add("task-item-text");

  let taskTitle = document.createElement("div");
  taskTitle.classList.add("small-font");
  taskTitle.textContent = title;
  textContainer.appendChild(taskTitle);
  let taskDescription = document.createElement("div");
  taskDescription.classList.add("smallest-font");
  taskDescription.textContent = description;
  textContainer.appendChild(taskDescription);
  container.appendChild(textContainer);

  let div = document.createElement("div");
  div.classList.add("smallest-font", "task-due-date");
  div.textContent = dueDate;
  container.appendChild(div);

  span = document.createElement("span");
  span.classList.add(
    "material-symbols-outlined",
    "favourite-icon",
    "cursor-pointer"
  );
  container.appendChild(span);

  let optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  span = document.createElement("span");
  span.classList.add(
    "material-symbols-outlined",
    "task-options-icon",
    "cursor-pointer"
  );
  span.textContent = "more_vert";
  optionsContainer.appendChild(span);

  optionsContainer.appendChild(createTaskOptions());

  container.appendChild(optionsContainer);

  return container;
};

const createAddTaskButton = () => {
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary", "add-task-button");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "add-task-button");

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "add_circle";
  btn.appendChild(span);

  span = document.createElement("span");
  span.classList.add("project-title");
  span.textContent = "Add New Task";
  btn.appendChild(span);

  return btn;
};

const createAddTaskFormModal = () => {
  let taskModal = document.createElement("div");
  taskModal.classList.add("modal-form");
  taskModal.setAttribute("id", "task-form");

  let taskModalForm = document.createElement("form");
  taskModalForm.classList.add("modal-form-content");

  let label = document.createElement("label");
  label.setAttribute("for", "task_title");
  label.textContent = "*Title:";
  taskModalForm.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task_title");
  input.setAttribute("id", "task_title");
  input.required = true;
  taskModalForm.appendChild(input);

  label = document.createElement("label");
  label.setAttribute("for", "task_details");
  label.textContent = "Details:";
  taskModalForm.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task_details");
  input.setAttribute("id", "task_details");
  taskModalForm.appendChild(input);

  label = document.createElement("label");
  label.setAttribute("for", "task_date");
  label.textContent = "Date:";
  taskModalForm.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "task_date");
  input.setAttribute("id", "task_date");
  taskModalForm.appendChild(input);

  let btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  let submitBtn = document.createElement("button");
  // "submit" submits the form and refreshes page, but this specific application may not need to submit to a real database
  // if no real database, you can set type = "button" to stop the automatic page refreshes
  submitBtn.setAttribute("type", "button");
  submitBtn.setAttribute("id", "submit-task-button");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("btn", "btn-success");
  btnsContainer.appendChild(submitBtn);

  let cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("id", "cancel-task-button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("btn", "btn-danger");
  btnsContainer.appendChild(cancelBtn);

  taskModalForm.appendChild(btnsContainer);

  taskModal.appendChild(taskModalForm);

  return taskModal;
};

const createTaskOptions = () => {
  let container = document.createElement("div");
  container.classList.add("task-options", "options");

  let editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-warning");
  editBtn.textContent = "Edit";
  container.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-warning");
  deleteBtn.textContent = "Delete";
  container.appendChild(deleteBtn);

  return container;
};

const contentSection = (currentPage, tasksList) => {
  let container = document.createElement("div");
  container.classList.add("content-section");

  container.appendChild(createTitle(currentPage));

  for (let i = 0; i < tasksList.length; i++) {
    container.appendChild(
      createTaskItem(
        tasksList[i].title,
        tasksList[i].description,
        tasksList[i].dueDate,
        tasksList[i].project
      )
    );
  }

  if (
    !(
      currentPage === "All Tasks" ||
      currentPage === "Today" ||
      currentPage === "Next 7 Days"
    )
  ) {
    container.appendChild(createAddTaskButton());
  }
  container.appendChild(createAddTaskFormModal());

  return container;
};

export default contentSection;
