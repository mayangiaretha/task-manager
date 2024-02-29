import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../elements/button/button";
import TaskList from "./taskList";

import { storedTasks } from "../../utils/utils";

const ListTask = ({ tasks, setEvent, event }) => {


  const handleDelete = taskId => {
    // Find the index of the task to delete
    const taskIndex = storedTasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      // Remove the task from storedTasks
      storedTasks.splice(taskIndex, 1);

      // Update local storage with the modified storedTasks
      localStorage.setItem("tasks", JSON.stringify(storedTasks));

      setEvent(!event);

      console.log("Task with ID:", taskId, "deleted successfully.");
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
          <TaskList tasks={tasks} onDelete={handleDelete} />
        </>
      )}

      <Link to="/addTask">
        <Button name="Add Task" width="100%" />
      </Link>
    </div>
  );
};

export default ListTask;
