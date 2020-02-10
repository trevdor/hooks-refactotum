import React, { useEffect, useRef, useState } from "react";
import "./Tweet.css";

const CHAR_LIMIT = 140;

export default function TweetLength() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = `New Tweet${text ? `: ${text}` : ""}`;

    return () => {
      document.title = "Boring title";
    };
  }, [text]);

  /* useRef to hold onto a reference to the DOM for imperative work*/
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <div className="newTweetForm">
      <h1>Tweeter</h1>
      <textarea
        rows="5"
        cols="50"
        onChange={e => setText(e.target.value)}
        placeholder={"What's on your mind?"}
        ref={textareaRef}
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
