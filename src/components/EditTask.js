import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'

// const editTaskForm = {
//     title: '',
//     description: '',
//     date: Date(),
// }
function EditTask(id){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate]= useState('')
    const [tasks, setTasks] = useState(null)
    const [editTask, setEditTask] = useState(null)

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
        const data = {
            title: title,
            description: description,
            date: date
        }
    axios.put(`/tasks/${id}/edit`)
    .then((res) => {
        console.log(res.data)
        fetchTasks()
    })
    console.log(editTask)
    setTitle('')
    setDescription('')
    setDate('')
}
 function deleteTask(id){
    axios.delete(`/tasks/${id}`)
    .then((res) => {
        fetchTasks()
    })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setEditTask(prevTask => ({
                ...prevTask,
                [name]: value,
        }))
}
console.log(tasks)
 return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <label>
                    Task Title:
                    <input type="text" name="title" placeholder= "title" onChange={handleChange} value={editTask.title} />
                    Task Description:
                    <input type='text' name="description" placeholder= 'description' onChange={handleChange} value={editTask.description}/>
                    Task Date:
                    <input type='date' name='date' placeholder= "date" onChange={handleChange} value={Date}/>
                </label>
                <input className='delete' name='delete' type='Submit' onChange={handleChange} value={deleteTask.id} />
        </form>
    </div>
    
    </>
 )
}


export default EditTask