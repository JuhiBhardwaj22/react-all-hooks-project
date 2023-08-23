import React, { forwardRef } from "react";

const ForwardRef = ({}, ref) => {
  //console.log(props, "value");
  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

export default forwardRef(ForwardRef);
