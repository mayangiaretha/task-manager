import React from "react";
import { Link } from "react-router-dom";

import "../../styles/styles.css";
import "./listTask.css";
import Button from "../../elements/button/button";

const ListTask = ({ tasks }) => {
  return (
    <div className="list-container">
      <h1>Welcome </h1>

      {tasks.length === 0 ? (
        <div className="task-title">No current tasks</div>
      ) : (
        tasks.map(({ id, name, description, dueDate, completed }, i) => (
          <div key={id} className="task">
            <div>{name}</div>
            <div>
              <span>{description}</span>&nbsp;&nbsp;&nbsp;<span>{dueDate}</span>{" "}
              <span>
                <Link to="/">Edit</Link>
              </span>
            </div>
          </div>
        ))
      )}

      <Link to="/addTask">
        <Button name="Add Task" width="100%" />
      </Link>
    </div>
  );
};

export default ListTask;
