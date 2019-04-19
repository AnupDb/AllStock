import React, { useState, useEffect } from "react";
import Axios from "axios";
import Results from "./Results";
import search_icon from "./assets/search_icon.png";
import "./searchBar.scss";

const SearchBar = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const clickHandle = () => {
    console.log(search.split(" ").join("+"));
    Axios.get(
      process.env.API_URL +
        "key=" +
        process.env.API_KEY +
        `&q=${search.split(" ").join("+")}&image_type=photo&page=${page}` +
        "&per_page=50"
    )
      .then(res => {
        console.log(res);
        console.log(res.data.hits);
        setImages(res.data.hits);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
      }
    });
  });

  return (
    <div>
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

          <button className="search_icon" onClick={clickHandle}><img src={search_icon}/></button>
        </form>
        <button>Home</button>
        <button>Profile</button>
      </header>
      <Results images={images} />
    </div>
  );
};

export default SearchBar;
