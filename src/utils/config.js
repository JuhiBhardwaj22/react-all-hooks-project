import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UseStateHooks from "../component/UseStateHooks";
import AboutHooks from "../component/AboutHooks";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/useStateHooks",
        element: <UseStateHooks />,
      },
      {
        path: "/about",
        element: <AboutHooks />,
      },
    ],
  },
]);

export default appRouter;
