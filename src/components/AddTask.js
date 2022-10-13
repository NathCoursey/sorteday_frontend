import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios';

const AddTaskForm = {
    title: '',
    description: '',
    date: Date(),
}
function AddTask() {
    const [tasks, setTasks] = useState(null)
    const [taskForm, setTaskForm] = useState(AddTaskForm)

useEffect(() => {
    fetchTasks()
}, [])
 
function fetchTasks(){
    axios.get('http://localhost:8000/api/tasks/')
    .then(res => {
        console.log(res)
        setTasks(res.data)
      }).catch(err => {
        console.log(err)
      })
}

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/tasks/', taskForm)
    .then((res) => {
        console.log(res.data)
        fetchTasks()
    })
    console.log(taskForm)
    setTaskForm((AddTaskForm))
}
const handleChange = (e) => {
    const data = { ...taskForm, [e.target.name]: e.target.value}
    setTaskForm(data)
}

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Task Title:
                    <input type="text" name="title" placeholder= "title" onChange={handleChange} value={taskForm.title} />
                    Task Description:
                    <input type='text' name="description" placeholder= 'description' onChange={handleChange} value={taskForm.description}/>
                    Task Date:
                    <input type='date' name='date' placeholder= "date" onChange={handleChange} value={Date}/>
                </label>
                <button type='submit'>Add Task</button>
            </form>
        </div>
        </>
    )
}
 



export default AddTask
