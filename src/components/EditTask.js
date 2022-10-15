import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function EditTask(id) {
    const navigate = useNavigate()
const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
})
const handleChange = (e) => {
    const data = { ...task, [e.target.name]: e.target.value}
    setTask(data)
    }

const submitForm = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(task)

    axios.put(`http://localhost:8000/api/tasks/${id}/`, task)
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
 
    
    return (
    <>
    <div>
        <form onSubmit={submitForm}>
        <label>
                    Task Title:
                    <input type="text" name="title" placeholder= "title" onChange={handleChange} value={task.title} />
                    Task Description:
                    <input type='text' name="description" placeholder= 'description' onChange={handleChange} value={task.description}/>
                    Task Date:
                    <input type='date' name='date' placeholder= "date" onChange={handleChange} value={task.date}/>
                </label>
                <button type="submit">Save Changes</button>
                <button type="reset" value="Reset">Cancel</button>
                <button className="go-back" name='goback' onClick={() => navigate(-1)}>Go Back</button>
        </form>
    </div>
    
    </>
 )
 }


export default EditTask