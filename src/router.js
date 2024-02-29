import { useRoutes } from "react-router-dom";

import ListTask from "./features/listTasks/listTask";
import AddTask from "./features/addTask/addTask";
import EditTask from "./features/editTask/editTask";

const Routes = ({ addTask, tasks, setEvent, event}) =>
  useRoutes([
    {
      path: "/",
      element: <ListTask tasks={tasks} setEvent={setEvent} event={event} />
    },
    {
      path: "/addTask",
      element: <AddTask addTask={addTask} />
    },
      {
          path: "/editTask",
          element: <EditTask tasks={tasks} setEvent={setEvent} event={event} />
      }
  ]);
export default Routes;
