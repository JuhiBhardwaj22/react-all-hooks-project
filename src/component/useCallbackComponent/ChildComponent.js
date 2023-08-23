import { memo } from "react";
function ChildComponent({ counterTwo, onClick }) {
  console.log("ChildComponent rendering");
  return (
    <div>
      <h2>{counterTwo}</h2>
      <button onClick={onClick}>Child Func</button>
    </div>
  );
}

export default memo(ChildComponent);
