// This is the testing function provided by MDN (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability)
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function checkStorageAvailability() {
  if (storageAvailable("localStorage")) {
    console.log("Web Storage API is available on this browser!");
  } else {
    alert(
      "Web Storage API is not available on this browser. Your data will not be saved."
    );
  }
}

const updateStorage = (projectsArray) => {
  localStorage.clear();
  projectsArray.forEach((project) => {
    localStorage.setItem(project.title, JSON.stringify(project));
  });
};

const retrieveStorage = () => {
  let values = [],
    keys = Object.keys(localStorage);

  for (let key of keys) {
    values.push(JSON.parse(localStorage.getItem(key)));
  }

  return values;
};

export { checkStorageAvailability, updateStorage, retrieveStorage };
