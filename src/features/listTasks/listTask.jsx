import React, { useEffect, useState } from "react";
import { TaskList } from "./taskList";
import "./listTask.css";

const ListTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(TaskList);
  }, []);
  return (
    <>
      {tasks.map(({ id, name, description, dueDate, completed }, i) => (
        <div key={id} className="task">
          <div>{name}</div>
          <div>
            <span>{description}</span>&nbsp;&nbsp;&nbsp;<span>{dueDate}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTask;
