import React, { createContext, ReactNode, useState } from "react";
import { todoDetail } from "../component/TodoItem";

interface TodoContextProps {
  item: todoDetail[];
  handleAddTodo: (newText: string ) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodosContext =
  createContext <TodoContextProps>({
    item: [],
    handleAddTodo: () => {},
  });


const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<todoDetail[]>([]);

  const handleAddTodo = (newText: string) => {
    const newTodo = {
      id: new Date().toString(),
      text: newText,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // TODO: handleRemoveTodo

  const todoValue: TodoContextProps = {
    item: todos,
    handleAddTodo,
  };

  return (
    <TodosContext.Provider value={todoValue}>{children}</TodosContext.Provider>
  );
};

export default TodoProvider;
