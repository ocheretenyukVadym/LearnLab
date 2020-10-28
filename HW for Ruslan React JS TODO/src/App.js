import React, {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [todoTasks, setTask] = useState([ ]);
  const [idTask, setId] = useState(0);

  return (
    <div className="container">
      <TodoList 
        todoTasks = {todoTasks}
        setTask = {setTask}
        idTask = {idTask}
        setId = {setId}
      />
    </div>
  );
}

export default App;
