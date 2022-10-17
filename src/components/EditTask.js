import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import "./EditTask.css"


function EditTask({id}) {
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
        setTask(task)
    })
}
return (
    <div>
        <form onSubmit={submitForm}>
        <img src="https://i.imgur.com/unK7DjP.png"></img>
        <button className="go-back" name='goback' onClick={() => navigate(-1)}>Go back<IoIosArrowBack/></button>
        <label>
                    Task Title:
                    <input type="text" id="inp-title" name="title" placeholder= "title" onChange={handleChange} value={task.title} />
                    Task Description:
                    <input type='text' id="inp-desc" name="description" placeholder= 'description' onChange={handleChange} value={task.description}/>
                    Task Date:
                    <input type='date' id="inp-date" name='date' placeholder= "date" onChange={handleChange} value={task.date}/>
                </label>
                <div className="save-btn">
                <button type="submit" id="save-btn">Save</button>
                </div>
        </form>
    </div>
    
 )
 }


export default EditTask