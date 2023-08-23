import React, { useContext } from "react";
import { ContextData } from "./UseContextHook";

export const ChildCompoent = () => {
  const useContextData = useContext(ContextData);
  console.log("useContextData", useContextData);
  return (
    <div>
      <h1> Child Compoent</h1>
    </div>
  );
};
