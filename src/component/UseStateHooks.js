import { useState } from "react";
function UseStateHooks() {
  const [name, setName] = useState("Default Name");

  const changeName = () => {
    setName("Juhi Bhardwaj");
    console.log("name", name);
  };
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => changeName()}>Show me </button>
    </div>
  );
}

export default UseStateHooks;
