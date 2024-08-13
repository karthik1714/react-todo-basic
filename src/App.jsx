import { useState } from 'react'
import './App.css'
import { Task } from './Task';

function App() {
  const [todoList ,setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask (event.target.value);
  }

  const addTask = () => {
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+1,
      taskName: newTask,
      completed : false,
    }
    const newtodoList = [...todoList,task];
    setTodoList(newtodoList);
  }

  const deleteTask = (id) => {
    const afterList = todoList.filter((task)=>{
      if(task.id==id){
        return false;
      }
      else {
        return true ;
  }})
    setTodoList(afterList)
  }

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if (task.id === id){
          return {...task, completed : true};
        }else{
          return task;
        }
      }))
  }

  const changeColor = (color) => {
    
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input type="text" onChange={handleChange}/>{" "}
        <button onClick={addTask}>Add</button>
      </div>
      <div className='list'>
        <div>
            {todoList.map((task)=>{
              return <Task taskName ={task.taskName} id={task.id} deleteTask = {deleteTask} completedTask = {completedTask} completed = {task.completed}/>
            })}
        </div>
        <div></div>
      </div>
    </div>



  );
}

export default App
