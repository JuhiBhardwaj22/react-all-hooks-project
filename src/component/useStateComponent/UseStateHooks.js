import { useEffect, useState } from "react";
import SpreadSpliceExample from "./SpreadSpliceExample";
function UseStateHooks() {
  const [name, setName] = useState("Default Name");
  useEffect(() => {
    console.log("useEffect");
  });
  console.log("Rendering...........");
  const changeName = () => {
    setName("Juhi Bhardwaj");
  };
  return (
    <div>
      <span>{name}</span>
      {console.log("return")}
      <button onClick={() => changeName()}>Show me </button>
      <SpreadSpliceExample />
    </div>
  );
}

export default UseStateHooks;
