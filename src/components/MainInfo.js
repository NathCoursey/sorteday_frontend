import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import axios from 'axios'
import Todo from './Todo';

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);

  const onUpdateTask = (task) => {
    const taskTodoIndex = tasks.findIndex((x) => x.id == task.id);
    const newTasks = [...tasks];

    const newTask = newTasks[taskTodoIndex];
    newTask.completed = !newTask.completed;
    newTasks[taskTodoIndex] = newTask;
    setTasks(newTasks)
  }
  useEffect(() => {
    getDisplay()
  }, [])
  const getDisplay = () => {
    axios.get('http://localhost:8000/api/tasks/')
    .then(res => {
      console.log(res)
      setTasks(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/api/tasks/${id}/`)
    .then(() => {
        getDisplay()
    }).catch(err => {
        console.log(err)
    })
}
  return (
    <div className='App'>
        <h2>All tasks</h2>
        <div className='add-btn'>
            <Link to={'/addtask'}>
                <button type="Submit">Add Task</button>
            </Link>
            </div>
            <div>
            <Todo tasks={tasks} onUpdateTask={onUpdateTask} onDelete={onDelete}/>
      </div>
      </div>
                
  )
}



export default FeaturedTasks;
