import React, { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  // useLayoutEffect runs synchronously after DOM mutations but before the browser repaints.
  useLayoutEffect(() => {
    // Function to measure the dimensions of the element
    const measureElement = () => {
      const element = elementRef.current;
      if (element) {
        //This function uses the getBoundingClientRect method to measure the width and height of the element referenced by elementRef
        const { width, height } = element.getBoundingClientRect();
        console.log(width);
        setDimensions({ width, height });
      }
    };

    // Call the measurement function when the component mounts and when it updates.
    measureElement();

    // Attach a resize event listener to re-measure dimensions when the window is resized.
    window.addEventListener("resize", measureElement);

    // Clean up by removing the resize event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", measureElement);
    };
  }, []); // The empty dependency array means this effect runs once after the initial render.

  return (
    <div>
      <h2 ref={elementRef}>Element Dimensions:</h2>
      <div>This is the element to measure.</div>
      <p>Width: {dimensions.width}px</p>
      <p>Height: {dimensions.height}px</p>
    </div>
  );
}

export default UseLayoutEffect;
