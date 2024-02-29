import React from "react";
import "./listTask.css";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task">
          <div className="task-details">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
          </div>
          <div className="task-buttons">
            <button onClick={() => onEdit(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
