import { useLayoutEffect, useState } from "react";

// by Sophie Alpert
// https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#19014495
export function useWindowSize() {
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

  return size;
}
