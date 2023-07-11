const createToDo = (
  title,
  description = null,
  dueDate = "No Due Date",
  isComplete = false,
  favourite = false
) => {
  return { title, description, dueDate, isComplete, favourite };
};

export default createToDo;
