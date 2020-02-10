import "./styles.css";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default class Minutes extends React.Component {
  state = {
    minutes: 5
  };

  add = () =>
    this.setState(prevState => ({
      minutes: prevState.minutes + 1
    }));

  subtract = () =>
    this.setState(prevState => ({
      minutes: prevState.minutes - 1
    }));

  render() {
    return (
      <div>
        <div className="Minutes">
          <button
            onClick={this.subtract}
            type="button"
            className="icon_button Minutes_button"
          >
            <FaMinus />
          </button>
          <div className="Minutes_label" htmlFor="minutes">
            {this.state.minutes} Minutes
          </div>
          <button
            onClick={this.add}
            type="button"
            className="icon_button Minutes_button"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    );
  }
}
