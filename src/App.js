import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Minutes from "./02 - useState/Minutes_class";
// import Minutes from "./useState/Minutes_fn-done";
import TweetLength from "./03 - useEffect/TweetLength_class";
// import TweetLength from "./03 - useEffect/TweetLength_fn-done";
import WindowSizer from "./03 - useEffect/WindowSizer_class";
// import WindowSizer from "./03 - useEffect/WindowSizer_fn-done";
import ReducerMinutes from "./04 - useReducer/Minutes_fn-done";
import TweetLengthRef from "./08 - useRef/TweetLength_fn-done";
import MinutesIntervalRef from "./08 - useRef/Minutes_fn-done.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <div className="content">
          <Route path="/useState">
            <Minutes />
          </Route>
          <Route path="/useEffect">
            <TweetLength />
          </Route>
          <Route path="/listener">
            <WindowSizer />
          </Route>
          <Route path="/useReducer">
            <ReducerMinutes />
          </Route>
          <Route path="/useRefI">
            <TweetLengthRef />
          </Route>
          <Route path="/useRefII">
            <MinutesIntervalRef />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
