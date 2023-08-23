import React, { useEffect, useRef } from "react";

export const UseRefDomExample = () => {
  const myRef = useRef(null);

  const handleChangeColor = () => {
    console.log(myRef.current);
    // Access and manipulate the DOM element using the ref
    myRef.current.style.backgroundColor = "blue";
  };
  const handleFocusInput = () => {
    console.log(myRef.current);
    myRef.current.focus();
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid ",
          margin: "20px",
          height: "60px",
          width: "300px",
        }}
        ref={myRef}
      >
        {" "}
        dom manipulation
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
      <br />
      <input placeholder="Enter Text" type="text" ref={myRef} />
      <button onClick={handleFocusInput}>FocusInput</button>
    </div>
  );
};
