import React, { useEffect, useState } from "react";
import "./styles.css";

const CHAR_LIMIT = 140;

export default function TweetLength() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = `New Tweet${text ? `: ${text}` : ""}`;

    return () => {
      document.title = "Boring title";
    };
  }, [text]);

  return (
    <div className="newTweetForm">
      <textarea
        rows="5"
        cols="50"
        onChange={e => setText(e.target.value)}
        placeholder={"What's on your mind?"}
      >
        {text}
      </textarea>
      <span>
        {text.length} / {CHAR_LIMIT}
      </span>
      <button>Tweet</button>
    </div>
  );
}
