import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoListContext } from "../store/todoList-context";


const TodoList = () => {
  const { todoList } = useContext(TodoListContext);

  return (
    <ul>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;