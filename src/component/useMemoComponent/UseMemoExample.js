import React, { useMemo, useState } from "react";
import { findNthPrime } from "../../helper/constant/constant";

const UseMemoExample = () => {
  const [text, setText] = useState(3);
  const [darkMode, setDarkMode] = useState(false);
  const [countOne, setCountOne] = useState(1);
  const [counttwo, setCounttwo] = useState(0);

  console.log("rendering....");
  //const prime = findNthPrime(text); // whenever state will change this will also update heavy operation make other functionality slow
  // console.log("prime....", prime);
  const prime = useMemo(() => findNthPrime(text), [text]);

  //Another memo example
  const handleCountOne = () => {
    setCountOne(countOne + 1);
  };
  const handleCounttwo = () => {
    setCounttwo(counttwo + 1);
  };

  //If we will do this so that will also slow count-2 functionality
  // const isEven = () => {
  //   console.log("warn........");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return countOne % 2 === 0;
  // };

  //so we will wrap this into memo

  const isEven = useMemo(() => {
    console.log("warn........");
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

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

      <h1>Another Use Memo Example using Even number check</h1>
      <button onClick={handleCountOne}>Counter One - {countOne}</button>
      <span>
        Count :{isEven ? "Even Number Counter One" : "Odd number counter One"}
      </span>
      <button onClick={handleCounttwo}>Counter Two - {counttwo}</button>
    </div>
  );
};

export default UseMemoExample;
