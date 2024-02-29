import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./router";
import { storedTasks } from "./utils/utils";

function App() {
  const [tasks, setTasks] = useState([]);
  const [event, setEvent] = useState(false);

  useEffect(() => {
    setTasks(storedTasks);
  }, [event]);

  const addTask = newTask => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  return (
    <div className="app">
      <Router>
        <Routes addTask={addTask} tasks={tasks} setEvent={setEvent} event={event} />
      </Router>
    </div>
  );
}

export default App;
