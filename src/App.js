import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Landing from "./Landing";
import { Router } from "@reach/router";
import Profile from "./Profile";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Landing path="/" />
        <SearchBar path="/Search" />
        <Profile path="/Profile" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
