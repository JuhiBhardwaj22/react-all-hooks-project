import "./App.css";
import Home from "./component/Home";
import { Outlet, useHref, useNavigate } from "react-router-dom";
import back_button from "./assets/back_button.png";
import { useEffect, useMemo } from "react";

function App() {
  const param = useHref();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="App">
        {console.log("Redner")}
        <img
          className="img-back-button"
          src={back_button}
          alt="⬅"
          onClick={handleNavigation}
        />
        <h1 className="title">React.Js Project List For Interviews 😄</h1>
      </div>
      {param === "/" && <Home />}
      <Outlet />
    </div>
  );
}

export default App;
