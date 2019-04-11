import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Landing from "./Landing";

const App = () => {
  return (
    <div id="app">
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
