import React, { useContext } from "react";
import { ContextData } from "./UseContextHook";

export const ChildCompoent = () => {
  const useContextData = useContext(ContextData);

  return (
    <div>
      <h1> Child Compoent</h1>
    </div>
  );
};
