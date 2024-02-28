import { useRoutes } from "react-router-dom";

import Homepage from "./pages/hompage";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Homepage />
    }
  ]);
export default Routes;
