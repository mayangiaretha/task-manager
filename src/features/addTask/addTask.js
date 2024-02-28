import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/styles.css";
import "./addTask.css";
import Button from "../../elements/button/button";
import Form from "../../components/Form";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: "", description: "", dueDate: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim() || !task.dueDate.trim()) return;
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
