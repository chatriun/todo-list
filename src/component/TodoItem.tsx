import { useContext } from "react";
import { TodoListContext } from "../store/todoList-context";

export interface todoDetail {
  id: string;
  text: string;
}

interface TodoItemProps {
  todoItem: todoDetail;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const { handleRemoveTodo } = useContext(TodoListContext);

  return (
    <li onClick={() => handleRemoveTodo(todoItem.id)}>
      <div style={{backgroundColor: "gray"}}>
        <h3>{todoItem.text}</h3>
      </div>
    </li>
  );
};

export default TodoItem;
