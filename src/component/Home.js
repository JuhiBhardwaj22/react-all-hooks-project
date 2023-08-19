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
          <Link to="/useStateHooks">useState Hooks</Link>
        </li>
        <li>
          <Link to="/useMemoHooks">useMemo Hooks</Link>
        </li>
        <li>
          <Link to="/useRefHooks">useRf Hooks</Link>
        </li>
        <li>
          <Link to="/about">About Hooks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
