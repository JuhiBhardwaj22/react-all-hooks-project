import React, { useRef, useState } from "react";
import { UseRefDomExample } from "./UseRefDomExample";
import ForwardRef from "./ForwardRef";

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const [refCount, setRefCount] = useState(100);

  const inputRef = useRef(null);
  let i = 0;
  //ref will maintain the state even component is re-rendering
  const ref = useRef(0);
  console.log("ref -------->", ref);
  console.log("rendering....");
  const chnageInputFocus = () => {
    inputRef.current.focus();
  };

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
          console.log("ref -------->", ref);
        }}
      >
        {" "}
        Ref Inc
      </button>
      <hr />
      <h1>Dom manipulate example</h1>
      <UseRefDomExample />
      <hr />
      <h1> forwardRef Example </h1>
      <button onClick={chnageInputFocus}>Focus</button>
      <ForwardRef ref={inputRef} />
    </div>
  );
};

export default UseRefHook;
