import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

export default function Minutes() {
  const [minutes, setMinutes] = useState(5);

  const handleAdd = () => setMinutes(minutes + 1);
  const handleSubtract = () => setMinutes(minutes - 1);

  return (
    <div>
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
    </div>
  );
}
