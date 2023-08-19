import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);

  let i = 0;
  //ref will maintain the state even component is re-rendering
  const ref = useRef(0);
  console.log("ref.current = ", ref.current);
  console.log("rendering....");
  return (
    <div>
      <h1>Local Value-{i}</h1>
      <button
        onClick={() => {
          i = i + 1;
          console.log("i = ", i);
        }}
      >
        Local Inc
      </button>
      <h1>State-{count}</h1>
      <button onClick={() => setCount(count + 1)}> State Inc</button>

      <h1>Ref-{ref.current}</h1>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref.current = ", ref.current);
        }}
      >
        {" "}
        Ref Inc
      </button>
    </div>
  );
};

export default UseRefHook;
