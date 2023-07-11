import createToDo from "../js/createToDo";

const tempTitle = "tempTitle";
const tempDescription = "tempDescription";
const tempDueDate = "tempDueDate";
const tempNotes = "tempNotes";

test("update toDo property", () => {
  let toDo = createToDo(tempTitle, tempDescription, tempDueDate, tempNotes);

  expect(toDo.title).toBe(tempTitle);
  toDo.title = "yup";
  expect(toDo.title).toBe("yup");
});
