// These are tests for Web Storage API to be run in browser.
// This is because Jest testing does not simulate the API.

import storageAvailable from "../js/dataStorage";
import createToDo from "./createToDo";
import createProject from "./createProject";

// check web storage api availability on browser
// if no, display a warning indicating data will not be saved because..
function testAvailability() {
  if (storageAvailable("localStorage")) {
    console.log("Web Storage API is available on this browser!");
  } else {
    alert(
      "Web Storage API is not available on this browser. Your data will not be saved."
    );
  }
}

// TESTING = create todo and console.log it for now
function testAddToDo() {
  let testTodo = createToDo("Assignment");
  console.log(testTodo);

  localStorage.clear();
  localStorage.setItem(testTodo.title, JSON.stringify(testTodo));
  let retrievedData = JSON.parse(localStorage.getItem("Assignment"));
  console.log(retrievedData.priority);
}

// TESTING = create project and console.log it for now
function testAddProject() {
  let testProject = createProject("Physics");
  let toDo1 = createToDo("Assignment");
  let toDo2 = createToDo("Study for Test");
  let toDo3 = createToDo("Project");
  let toDo4 = createToDo("NEW");
  testProject.addToDo(toDo1);
  testProject.addToDo(toDo2);
  testProject.addToDo(toDo3);

  console.log(toDo1);
  console.log(testProject);

  localStorage.clear();
  localStorage.setItem(testProject.title, JSON.stringify(testProject));

  let retrievedData = JSON.parse(localStorage.getItem(testProject.title));
  let retrievedProject = createProject(retrievedData.title);
  retrievedProject.addToDos(retrievedData.toDos);

  retrievedProject.addToDo(toDo4);
  console.log(retrievedProject);
}

export { testAvailability, testAddToDo, testAddProject };
