import FeaturedTasks from "./components/MainInfo.js";
import AddTask from './components/AddTask.js'
import EditTask from './components/EditTask.js'
import Login from "./components/Login.js";
import { Routes, Route } from "react-router-dom";
import './App.css'



function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/tasks' element={<FeaturedTasks/>} />
      <Route path='/addtask' element={<AddTask/>} />
      <Route path='tasks/:id' element={<EditTask/>} />
      </Routes>
    </div>
  )
}

export default App