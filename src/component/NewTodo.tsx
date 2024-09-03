import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const { handleAddTodo } = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = formData.get("new-text");

    if (newTodo) {
      handleAddTodo(String(newTodo));
    }
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
