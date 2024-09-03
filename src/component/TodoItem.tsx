export interface todoDetail {
  id: string;
  text: string;
}

interface TodoItemProps {
  todoItem: todoDetail;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <li>
      <h3>{todoItem.text}</h3>
    </li>
  );
};

export default TodoItem;
