import React, { useReducer } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

function somewhatRidiculousReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const moreMinutes = state.minutes + state.increment;
      return moreMinutes > 10
        ? { ...state, error: "Ok, let's not go crazy." }
        : { ...state, error: "", minutes: moreMinutes };
    case "SET_INCREMENT":
      return { ...state, increment: action.increment };
    case "SUBTRACT":
      const fewerMinutes = state.minutes - state.increment;
      return fewerMinutes < 1
        ? { ...state, error: "You can't log a zero." }
        : { ...state, error: "", minutes: fewerMinutes };
    default:
      throw new Error("Unrecognized action type");
  }
}

export default function Minutes() {
  const [minutesState, dispatch] = useReducer(somewhatRidiculousReducer, {
    error: "",
    increment: 1,
    minutes: 5
  });

  const handleAdd = () => dispatch({ type: "ADD" });
  const handleSubtract = () => dispatch({ type: "SUBTRACT" });

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
          {minutesState.minutes} Minutes
        </div>
        <button
          onClick={handleAdd}
          type="button"
          className="icon_button Minutes_button"
        >
          <FaPlus />
        </button>
      </div>
      <div className="Error">{minutesState.error}</div>
    </div>
  );
}
