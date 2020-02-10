import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Minutes from "./useState/Minutes_class";
// import Minutes from "./useState/Minutes_fn";

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
        </div>
      </div>
    </Router>
  );
}

export default App;
