import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UseStateHooks from "../component/useStateComponent/UseStateHooks";
import AboutHooks from "../component/AboutHooks";
import UseMemoHooks from "../component/useMemoComponent/UseMemoHooks";

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
        path: "/useMemoHooks",
        element: <UseMemoHooks />,
      },
      {
        path: "/about",
        element: <AboutHooks />,
      },
    ],
  },
]);

export default appRouter;
