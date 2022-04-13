import './index.scss';
import TodoTextInput from './components/TodoTextInput/TodoTextInput';
import TodoList from './components/TodoList/TodoList';
import TodoButton from './components/TodoButton/TodoButton';
import Container from './components/Container/Container';

const App = () => {
  return (
    <main className="main">
      <div className='container'>
      <h1 className='title'>ToDo List</h1>
        <Container>
       
          <TodoTextInput />
          <TodoButton  value="Add"/>
        </Container>
        <Container>
          <TodoList />
        </Container>
      </div>
    </main>
  );
}

export default App;
