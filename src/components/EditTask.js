import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
import axios from 'axios'

function EditTask(id){
    const params =  useParams()
    const [tasks, setTasks] = useState(null)
    const [editTask, setEditTask] = useState(null)
    const taskId = params.taskId

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
    axios.put('http://localhost:8000/api/tasks/')
    .then((res) => {
        console.log(res.data)
        fetchTasks()
    })
    console.log(editTask)
    setEditTask((EditTask))
}
const handleChange = (e) => {
    const data = { ...editTask, [e.target.name]: e.target.value}
    setEditTask(data)
}
}
function deleteTask(id){
    axios.delete(`/tasks/${id}`)
    .then((res) => {
        fetchTasks()
    })
    const data = { ...editTask, [e.target.name]: e.target.value}
    setEditTask(data)
}


export default EditTask