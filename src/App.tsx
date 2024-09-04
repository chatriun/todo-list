import NewTodo from './component/NewTodo';
import TodoList from './component/Todos';
import TodoListProvider from './store/todoList-context';

const App = () => {
  return (
    <TodoListProvider>
      <NewTodo />
      <TodoList />
    </TodoListProvider>
  );
}


export default App;
