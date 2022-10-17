import { FaTrashAlt } from 'react-icons/fa'
import { AiTwotoneEdit } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import "./Todo.css"

const Todo = ({ tasks, onUpdateTask, onDelete, EditTask}) => {
    return (
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item">
            <p className="task-title">{task.title}</p>
            <input
              type="checkbox"
              id="checkbox"
              checked={task.completed}
              onChange={() => onUpdateTask(task)}
            />
            <p className="task-description">
            {task.description}
            </p>
            <p className='tasks-date'>{task.date}</p>
            <Link to={`/tasks/${task.id}`}>
            <button type="button" id="edit-btn" onClick={() => EditTask(task.id)}><AiTwotoneEdit/></button>
            </Link>
            <button type="button" id="delete-btn" onClick={() => onDelete(task.id)}><FaTrashAlt /></button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Todo;