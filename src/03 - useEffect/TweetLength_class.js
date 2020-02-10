import React from "react";
import "./styles.css";

const CHAR_LIMIT = 140;

export default class TweetLength extends React.Component {
  state = {
    text: ""
  };

  componentDidMount() {
    document.title = "New Tweet";
  }

  componentDidUpdate() {
    document.title = this.state.text;
  }

  componentWillUnmount() {
    document.title = "Boring title";
  }

  updateText = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div className="newPostForm">
        <textarea rows="5" cols="50" onChange={this.updateText}>
          What's on your mind?
        </textarea>
        <span>
          {this.state.text.length} / {CHAR_LIMIT}
        </span>
        <button>Tweet</button>
      </div>
    );
  }
}
