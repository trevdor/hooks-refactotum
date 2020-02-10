import React, { useLayoutEffect, useState } from "react";
// import { useWindowSize } from "../07 - Custom Hooks/useWindowSize.js";
import "./styles.css";

export default function WindowSizer() {
  const [size, setSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { height, width } = size;

  return (
    <div
      className="theBox"
      style={{
        height: height / 2,
        width: width / 2
      }}
    >
      {height} x {width}
    </div>
  );
}
