import FeaturedTasks from "./components/MainInfo.js";
import AddTask from './components/AddTask.js'
import EditTask from './components/EditTask.js'
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/tasks' element={<FeaturedTasks/>} />
      <Route path='/addtask' element={<AddTask/>} />
      <Route path='tasks/:id' element={<EditTask/>} />
      </Routes>
    </div>
  )
}

export default App