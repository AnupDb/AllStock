import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";
import "./searchBar.scss";

const SearchBar = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const clickHandle = e => {
    console.log(search.split(" ").join("+"));
    Axios.get(
      process.env.API_URL +
        "key=" +
        process.env.API_KEY +
        `&q=${search.split(" ").join("+")}&image_type=photo&page=`
    )
      .then(res => {
        console.log(res);
        console.log(res.data.hits);
        setImages(res.data.hits);
      })
      .catch(err => console.log(err));
  };

  return (
    <header>
      <span>All Stock</span>
      <form
        onSubmit={e => {
          clickHandle();
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="photoInput"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={clickHandle}>Search</button>
      </form>
      <button>Home</button>
      <button>Profile</button>
      <Results images={images} />
    </header>
  );
};

export default SearchBar;
