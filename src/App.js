import { useState } from "react"
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setAddTask] = useState(false)
  const [tasks, setTasks] = useState([
		{
			id:1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:00pm',
			reminder: true,
		},  
		{
			id: 2,
			text: 'Meeting at school',
			day: 'Feb 5th at 3:00pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 1:00pm',
			reminder: false,
		}
	])
  //Add Task
  const addTask=(task)=>{
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  //Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(
    tasks.map((task)=>
    task.id === id ?
     {...task, reminder: !task.reminder}: task))
  }
  return (
    <div className="container">

      <Header onAdd={()=> setAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length>0 ? (
      <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):
      'No Task To Show'}
      
    </div>
  );
}

export default App;
