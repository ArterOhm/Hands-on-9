import { useState } from 'react'
import './App.css'
import { TaskDTO } from './types/dto'

const initTasks: TaskDTO[] = [
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn HTML',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn React',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn Node.js',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn useState',
    isDone: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>(initTasks)
  const [newTask, setNewTask] = useState<string>('')

  const handleAdd = () => {}

  const handleToggle = () => {}

  return (
    <div className="App">
      <h1>React Todo List</h1>
      <form>
        <label>Add Todo List:</label>
        <input type="text" required />
        <input type="submit" value="Add" />
      </form>
      <div className="todo-container">{/* * fill here */}</div>
    </div>
  )
}

export default App
