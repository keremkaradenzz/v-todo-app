import './index.scss';
import TodoTextInput from './components/TodoTextInput';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <main className="main">
      Todo
      <TodoTextInput />
      <TodoList />
    </main>
  );
}

export default App;
