import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../../styles/styles.css";
import "./addTask.css";
import Form from "../../components/Form";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: "", description: "", dueDate: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim() || !task.dueDate.trim()) return;
    task.id = uuidv4()
    addTask(task);
    setTask({ name: "", description: "", dueDate: "" });
  };

  return (
    <div className="list-container">
      <Form handleSubmit={handleSubmit} handleChange={handleChange} task={task} />
    </div>
  );
};
export default AddTask;
