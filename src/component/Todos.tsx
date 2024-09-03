import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const TodoList = () => {
  const { item: todoList} = useContext(TodosContext)

  return (
    <ul>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;