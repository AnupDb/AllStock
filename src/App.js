import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Landing from "./Landing";
import { Router } from "@reach/router";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Landing path="/" />
        <SearchBar path="/Search" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
