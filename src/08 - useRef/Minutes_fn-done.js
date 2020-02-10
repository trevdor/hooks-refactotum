import React, { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

const DEFAULT_MINUTES = 0;
export default function Minutes() {
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES);

  const handleAdd = () => setMinutes(minutes + 1);
  const handleSubtract = () => setMinutes(minutes - 1);

  /* useRef to hold onto an arbitrary value */
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      setMinutes(m => m + 1);
    }, 1000);
    intervalRef.current = id;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const clearTimer = () => {
    clearInterval(intervalRef.current);
    setMinutes(DEFAULT_MINUTES);
  };

  return (
    <div>
      <h1 className="Title">How Long Was Your Workout?</h1>
      <div className="Minutes">
        <button
          onClick={handleSubtract}
          type="button"
          className="icon_button Minutes_button"
        >
          <FaMinus />
        </button>
        <div className="Minutes_label" htmlFor="minutes">
          {minutes} Minutes
        </div>
        <button
          onClick={handleAdd}
          type="button"
          className="icon_button Minutes_button"
        >
          <FaPlus />
        </button>
      </div>
      <center>
        <button className="Clear" onClick={clearTimer}>
          Clear
        </button>
      </center>
    </div>
  );
}
