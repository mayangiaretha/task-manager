import { useRoutes } from "react-router-dom";

import ListTask from "./features/listTasks/listTask";
import AddTask from "./features/addTask/addTask";

const Routes = ({ addTask, tasks }) =>
  useRoutes([
    {
      path: "/",
      element: <ListTask tasks={tasks} />
    },
    {
      path: "/addTask",
      element: <AddTask addTask={addTask} />
    }
  ]);
export default Routes;
