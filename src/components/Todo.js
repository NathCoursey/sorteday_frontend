import { FaTrashAlt } from 'react-icons/fa'
import { AiTwotoneEdit } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import EditTask from './EditTask';

const Todo = ({ tasks, onUpdateTask, onDelete }) => {
    return (
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdateTask(task)}
            />
            <p className="task-description">
            {task.description}
            </p>
            <p className='tasks-date'>{task.date}</p>
            <Link to={'/tasks/:id'}>
            <button type="button" onClick={() => EditTask(task.id)}><AiTwotoneEdit/></button>
            </Link>
            <button type="button" onClick={() => onDelete(task.id)}><FaTrashAlt /></button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Todo;