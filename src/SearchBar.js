import React from "react";
import Axios from "axios";

const SearchBar = () => {
  const clickHandle = () => {
    Axios.get(
      process.env.API_URL +
        "key=" +
        process.env.API_KEY +
        "&q=yellow+flowers&image_type=photo"
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <span>All Stock</span>
      <input type="text" className="photoInput" />
      <button>Home</button>
      <button onClick={clickHandle}>Profile</button>
    </div>
  );
};

export default SearchBar;
