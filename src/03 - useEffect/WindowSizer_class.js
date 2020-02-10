import React from "react";
import "./styles.css";

export default class WindowSizer extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  render() {
    const { height, width } = this.state;

    return (
      <div className="theBox" style={{ height: height / 2, width: width / 2 }}>
        {height} x {width}
      </div>
    );
  }
}
