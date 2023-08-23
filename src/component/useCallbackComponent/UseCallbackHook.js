import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
import ChildMemoExample from "./ChildMemoExample";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [counttwo, setCounttwo] = useState(0);

  const IncCount = () => {
    setCount(count + 1);
  };
  const IncTwo = useCallback(() => {
    setCounttwo(counttwo + 1);
  }, [counttwo]);
  console.log("Parent rendering");
  return (
    <div
      style={{ border: "1px solid black", height: "400px", width: "600px" }}
      className={`use-memo ${darkMode && "add-theme"}`}
    >
      <button onClick={() => setDarkMode(!darkMode)}>🌙</button>
      <hr />
      <button onClick={IncCount}>Counter One - {count}</button>
      <ChildComponent counterTwo={counttwo} onClick={IncTwo} />
      <ChildMemoExample />
    </div>
  );
};

export default UseCallbackHook;
