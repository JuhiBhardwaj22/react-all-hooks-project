import React, { createContext } from "react";
import { ChildCompoent } from "./ChildCompoent";

//create context

export const ContextData = createContext();
export const UseContextHook = () => {
  const userInfo = {
    name: "Juhi Bhardwaj",
    email: "Juhibhardwaj20@gmail.com",
  };
  return (
    <ContextData.Provider value={userInfo}>
      <h1>Context</h1>
      <p>by this way we ca provide data to child component</p>
      <ChildCompoent />
    </ContextData.Provider>
  );
};
