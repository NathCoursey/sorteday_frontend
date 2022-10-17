import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios';

const DefaultForm = {
    username: "",
    email: "",
    password: ""
}
const Login = () => {
    const [user, setUser] = useState("")
   axios.post("http://localhost:8000/auth/", DefaultForm)
   .then(res => {
    console.log(res)
    setUser(user.token)
   }).catch(err => {
    console.log(err)
   })

   const Register = () => {
    axios.post("http://localhost:8000/api/users/", DefaultForm)
    .then(res => {
        console.log(res)
        setUser(res.token)
    }).catch(err => {
        console.log(err)
   })
}

   const handleChange = (e) => {
    const data = { ...user, [e.target.name]: e.target.value}
    setUser(data)
}
   return (
    <div>
     <h1>Log in.</h1>
     <label>
        Username:
        <input type="text" name="username" value={user.username} onChange={handleChange}/>
        Password:
        <input type="password" name="password" value={user.password} onChange={handleChange}/>
     </label>
     <button onClick={Login}>Log in</button>
    </div>
   )
}

export default Login

