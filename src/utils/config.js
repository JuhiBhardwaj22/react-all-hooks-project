import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UseStateHooks from "../component/useStateComponent/UseStateHooks";
import AboutHooks from "../component/AboutHooks";
import UseMemoHooks from "../component/useMemoComponent/UseMemoHooks";
import UseRefHook from "../component/useRefComponent/UseRefHook";

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
        path: "/useRefHooks",
        element: <UseRefHook />,
      },
      {
        path: "/about",
        element: <AboutHooks />,
      },
    ],
  },
]);

export default appRouter;
