import './index.scss';
import Todos from './pages/Todos';
const App = () => {
  return (
    <main className="main">
      <div className='container'>
      <h1 className='title'>ToDo List</h1>
      <Todos/>
      </div>
    </main>
  );
}

export default App;
