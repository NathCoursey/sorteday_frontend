import { useState, useEffect } from 'react'
// import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import React from 'react';
import axios from 'axios'

const FeaturedTasks = () => {
// const params = useParams()
//  const taskId = `${params.taskId}`
  const [tasks, setTasks] = useState([]);
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
  return (
    <div className='App'>
        <h2>All tasks</h2>
        <div className='add-btn'>
            <Link to={'/addtask'}>
                <button type="Submit">Add Task</button>
            </Link>
            </div>
      {tasks.map((task) => {
         return (
            <>
         <div className='tasks-card' key={task.id}>
            <Link to={'/tasks/:id/edit'}>
           <h3 className='tasks-title'>{task.title}</h3> 
           </Link>
           <p className='tasks-description'>{task.description}</p>
            <p className='tasks-date'>{task.date}</p>
            </div>
            </>
         )
         })}
    </div>
  )
}


export default FeaturedTasks;
