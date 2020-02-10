import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Minutes from "./02 - useState/Minutes_class";
// import Minutes from "./useState/Minutes_fn";
import TweetLength from "./03 - useEffect/TweetLength_class";
// import TweetLength from "./03 - useEffect/TweetLength_fn";
import WindowSizer from "./03 - useEffect/WindowSizer_class";
// import WindowSizer from "./03 - useEffect/WindowSizer_fn";
import ReducerMinutes from "./04 - useReducer/Minutes_fn";

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
          <Route path="/usereducer">
            <ReducerMinutes />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
