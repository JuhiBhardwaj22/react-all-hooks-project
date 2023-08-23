import { Link } from "react-router-dom";
import "./index.css";
function Home() {
  return (
    <div className="home">
      <ul className="router-link-home">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useStateHooks">useState Hook</Link>
        </li>
        <li>
          <Link to="/useMemoHooks">useMemo Hook</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback Hook</Link>
        </li>
        <li>
          <Link to="/useRefHooks">useRf Hook</Link>
        </li>
        <li>
          <Link to="/useContextHooks">useContext Hook</Link>
        </li>
        <li>
          <Link to="/useTransitionHooks">useTransition Hook</Link>
        </li>
        <li>
          <Link to="/useLayoutEffectHooks">useLayoutEffect Hook</Link>
        </li>
        <li>
          <Link to="/about">About Hooks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
