// Testing function does not work with Jest Testing
// It seems to require to be run on a browser to work

import storageAvailable from "../js/dataStorage";

test("MDN storage testing function", () => {
  expect(storageAvailable("localStorage")).toBe(true);
});
