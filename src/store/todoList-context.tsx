import React, { createContext, ReactNode, useState } from "react";
import { todoDetail } from "../component/TodoItem";

interface TodoListContextProps {
  todoList: todoDetail[];
  handleAddTodo: (newText: string) => void;
  handleRemoveTodo: (id: string) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  handleAddTodo: () => {},
  handleRemoveTodo: () => {},
});

const TodoListProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<todoDetail[]>([]);

  const handleAddTodo = (newText: string) => {
    const newTodo = {
      id: new Date().toString(),
      text: newText,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodoList((prevTodoList) => {
      const newTodo = prevTodoList.filter((item) => item.id !== id);

      return newTodo;
    });
  };

  const todoListValue: TodoListContextProps = {
    todoList,
    handleAddTodo,
    handleRemoveTodo,
  };

  return (
    <TodoListContext.Provider value={todoListValue}>{children}</TodoListContext.Provider>
  );
};

export default TodoListProvider;
