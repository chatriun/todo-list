import { FormEvent, useContext } from "react";
import { TodoListContext } from "../store/todoList-context";

const NewTodo = () => {
  const { handleAddTodo } = useContext(TodoListContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = formData.get("new-text")?.toString().trim() ?? ""

    handleAddTodo(newTodo)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-text">new text: </label>
      <input type="text" id="new-text" name="new-text" />
      <button>add</button>
    </form>
  );
}

export default NewTodo;