import React from "react";
import Button from "../elements/button/button";
import { Link } from "react-router-dom";
import Textfield from "../elements/textField/textfield";

const Form = ({ handleSubmit, handleChange, task }) => {
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <Textfield type="text" name="name" placeholder="Task Name" value={task.name} onChange={handleChange} />
        <br />
        <Textfield name="description" placeholder="Task Description" value={task.description} onChange={handleChange} />
        <br />
        <Textfield type="date" name="dueDate" placeholder="Due Date" value={task.dueDate} onChange={handleChange} />
        <br />
        <div className="button-grid">
          <Button type="submit" name="Submit Task" />
          <Link to="/">
            <Button name="Go To Home" color="#757876" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
