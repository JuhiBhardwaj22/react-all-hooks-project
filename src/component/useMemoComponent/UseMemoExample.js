import React, { useMemo, useState } from "react";
import { findNthPrime } from "../../helper/constant/constant";

const UseMemoExample = () => {
  const [text, setText] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  console.log("rendering....");
  //const prime = findNthPrime(text); // whenever state will change this will also update heavy operation make other functionality slow
  //console.log("prime....", prime);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div className={`use-memo ${darkMode && "add-theme"}`}>
      <h1>
        Best Example of hook{" "}
        <button onClick={() => setDarkMode(!darkMode)}>🌙</button>
      </h1>
      <input
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{prime}</h1>
    </div>
  );
};

export default UseMemoExample;
