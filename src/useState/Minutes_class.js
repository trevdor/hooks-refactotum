import "./styles.css";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default class Minutes extends React.Component {
  state = {
    minutes: 5
  };

  handleAdd = () =>
    this.setState(prevState => ({
      minutes: prevState.minutes + 1
    }));

  handleSubtract = () =>
    this.setState(prevState => ({
      minutes: prevState.minutes - 1
    }));

  render() {
    return (
      <div>
        <div className="Minutes">
          <button
            onClick={this.handleSubtract}
            type="button"
            className="icon_button Minutes_button"
          >
            <FaMinus />
          </button>
          <div className="Minutes_label" htmlFor="minutes">
            {this.state.minutes} Minutes
          </div>
          <button
            onClick={this.handleAdd}
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
