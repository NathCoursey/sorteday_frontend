import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'

// const updates = {
//     title: "",
//     description: "",
//     date: "",
// }
function EditTask(id){
    const [tasks, setTasks] = useState(null)
    const [editTask, setEditTask] = useState('')

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
        // e.preventDefault()
        // }
    axios.put(`http://localhost:8000/api/tasks/${id}`)
      .then((res) => {
        console.log(res.data)
        fetchTasks()
    }, [])}
    console.log(editTask)

 function deleteTask(id){
    axios.delete(`http://localhost:8000/api/tasks//${id}`)
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
                <button className="edit-task" name='edit' onChange={handleChange} value={editTask}>Save</button>
                <button className="delete-btn" name='delete' onChange={handleChange} value={deleteTask}>Delete</button>
        </form>
    </div>
    
    </>
 )
 }


export default EditTask