import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UseStateHooks from "../component/useStateComponent/UseStateHooks";
import AboutHooks from "../component/AboutHooks";
import UseMemoHooks from "../component/useMemoComponent/UseMemoHooks";
import UseRefHook from "../component/useRefComponent/UseRefHook";
import UseCallbackHook from "../component/useCallbackComponent/UseCallbackHook";
import { UseContextHook } from "../component/useContextComponent/UseContextHook";

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
        path: "/useCallback",
        element: <UseCallbackHook />,
      },
      {
        path: "/useRefHooks",
        element: <UseRefHook />,
      },
      {
        path: "/useContextHooks",
        element: <UseContextHook />,
      },
      {
        path: "/about",
        element: <AboutHooks />,
      },
    ],
  },
]);

export default appRouter;
