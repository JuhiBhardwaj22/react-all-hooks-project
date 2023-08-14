import { useState } from "react";
import SpreadSpliceExample from "./SpreadSpliceExample";
function UseStateHooks() {
  const [name, setName] = useState("Default Name");

  const changeName = () => {
    setName("Juhi Bhardwaj");
  };
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => changeName()}>Show me </button>
      <SpreadSpliceExample />
    </div>
  );
}

export default UseStateHooks;
