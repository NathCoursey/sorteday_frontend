import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'

const FeaturedTasks = () => {
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
      {tasks.map((task) => {
         return (
         <div className='tasks-card' key={task.id}>
           <h3 className='tasks-title'>{task.title}</h3> 
           <p className='tasks-description'>{task.description}</p>
            <p className='tasks-date'>{task.date}</p>
            </div>
         )
         })}
    </div>
  )
}


export default FeaturedTasks;
