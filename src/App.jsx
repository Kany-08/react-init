import './App.css'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { Counter } from './components/Counter/Counter';
import { useState } from 'react';
import { HeartSwitch } from './components/HeartSwitch/HeartSwitch';



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

  const onSwtich = (theme) =>{
    console.log(theme);
    
  }

  const [count, setCount] = useState(0);
  const incCount = () => setCount((x) => x+1);
  
  return (
    <>
    <HeartSwitch />
    <Counter count={count} onIncrement={incCount}/>
    <ThemeSwitch onSwitch={onSwtich}/>
      <TaskList tasks={tasks} />
      <Task />
      
    </>
  )
}

export default App
