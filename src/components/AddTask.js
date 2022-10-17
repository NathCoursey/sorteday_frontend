import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import "./AddTask.css"

const AddTaskForm = {
    title: "",
    description: "",
    date: "",
}
function AddTask() {
    const [tasks, setTasks] = useState(null)
    const [taskForm, setTaskForm] = useState(AddTaskForm)
    const navigate = useNavigate()

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
        <div className="Add-form">
            <form onSubmit={handleSubmit}>
                <img src="https://i.imgur.com/unK7DjP.png"></img>
                <button className="go-back" name='goback' onClick={() => navigate(-1)}>Go back<IoIosArrowBack/></button>
                <h3>Add a task</h3>
                <label>
                    Task Title:
                    <input type="text" id="inp-title" name="title" placeholder= "title" onChange={handleChange} value={taskForm.title} />
                    Task Description:
                    <input type='text' id="inp-desc" name="description" placeholder= 'description' onChange={handleChange} value={taskForm.description}/>
                    Task Date:
                    <input type='date' id="inp-date"name='date' placeholder= "date" onChange={handleChange} value={taskForm.date}/>
                </label>
                <div className="add-task-btn">
                <button type='submit' id="add-btn">Save</button>
                </div>
            </form>
        </div>
        </>
    )
}
 



export default AddTask
