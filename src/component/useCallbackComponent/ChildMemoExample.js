import { memo } from "react";
function ChildMemoExample() {
  console.log("ChildComponent rendering");
  return <h1>Child Memo Example : -memo(ChildComponent)</h1>;
}

export default memo(ChildMemoExample);
