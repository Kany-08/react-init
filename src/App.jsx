import './App.css'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'

const tasks = [
  {
    id: 1,
    title: 'Покормить кота',
    deadline: '23:59',
    completed: true,
  },
  {
    id:2,
    title: 'Поспать 10 часов',
    deadline: '01-01-2026',
    
  },
]

function App() {

  
  return (
    <>
      <TaskList tasks={tasks} />
      <Task />
    </>
  )
}

export default App
