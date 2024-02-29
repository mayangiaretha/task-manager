import React from "react";
import TaskList from "../listTasks/taskList";
import {storedTasks} from "../../utils/utils";
import {Link} from "react-router-dom";
import Button from "../../elements/button/button";

const EditTask = ({ tasks, setEvent, event }) => {
const handleEdit = (taskId, updatedTask) => {

  const taskIndex = storedTasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {

    storedTasks[taskIndex] = updatedTask;


    localStorage.setItem("tasks", JSON.stringify(storedTasks));


    setEvent(!event);

    console.log("Task with ID:", taskId, "edited successfully.");
  } else {
    console.log("Task with ID:", taskId, "not found.");
  }
};
  return (
      <div className="list-container">
        <h1>Tasks</h1>

        {tasks.length === 0 ? (
            <div className="task-title">No current tasks</div>
        ) : (
            <>
              <TaskList tasks={tasks} onEdit={handleEdit} />
            </>
        )}

        <Link to="/addTask">
          <Button name="Add Task" width="100%" />
        </Link>
      </div>
  );


}

export default EditTask;
