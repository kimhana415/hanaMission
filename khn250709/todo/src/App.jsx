import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTabs from './components/TodoTabs';

function App() {
  return (
    <>
      <div className="todo">
        <TodoTabs />
        <TodoList />
        <TodoAdd />
      </div>
    </>
  );
}

export default App;
