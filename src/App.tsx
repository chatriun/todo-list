import NewTodo from './component/NewTodo';
import TodoList from './component/Todos';
import TodoProvider from './store/todos-context';

const App = () => {
  return (
    <TodoProvider>
      <NewTodo />
      <TodoList />
    </TodoProvider>
  );
}


export default App;
