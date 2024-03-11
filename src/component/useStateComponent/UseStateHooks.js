import { useEffect, useState, Profiler } from "react";
import SpreadSpliceExample from "./SpreadSpliceExample";
function UseStateHooks() {
  const [name, setName] = useState("Default Name");
  console.log("name", name);
  useEffect(() => {
    console.log("useEffect");
  });
  console.log("Rendering...........");
  const changeName = () => {
    setName("Juhi Bhardwaj");
  };
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    // console.log("id------------------------>", id);
    // console.log("phase--------------------->", phase);
    // console.log("actualDuration------------->", actualDuration);
    // console.log("baseDuration--------------->", baseDuration);
    // console.log("startTime----------------------->", startTime);
    // console.log("commitTime----------------------->", commitTime);
  }

  return (
    <div>
      <span>{name}</span>
      {console.log("return")}
      <button onClick={() => changeName()}>Show me </button>
      <Profiler id="ap" onRender={onRender}>
        <SpreadSpliceExample />
      </Profiler>
    </div>
  );
}

export default UseStateHooks;
