import React, { useState, useEffect } from "react";
import Axios from "axios";
import Results from "./Results";
import { Link } from "../node_modules/@reach/router";
import search_icon from "./assets/search_icon.png";
import "./searchBar.scss";

const SearchBar = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [numberPage, setNumberPage] = useState(0);
  var pageHolder = [];
  const clickHandle = () => {
    console.log(search.split(" ").join("+"));
    console.log(page);
    Axios.get(
      process.env.API_URL +
        "key=" +
        process.env.API_KEY +
        `&q=${search.split(" ").join("+")}&image_type=photo&page=${page}` +
        "&per_page=50"
    )
      .then(res => {
        console.log(search);
        console.log(res.data.hits);
        setImages(res.data.hits);
        setNumberPage(res.data.totalHits / 50);
      })
      .catch(err => console.log(err));
  };
  const changePage = i => {
    setPage(i);
  };
  useEffect(() => {
    clickHandle();
  }, [page]);

  for (let i = 0; i < numberPage; i++) {
    pageHolder.push(
      <li key={i + 1}>
        <button
          onClick={() => {
            changePage(i + 1);
          }}
        >
          {i + 1}
        </button>
      </li>
    );
  }

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

          <button className="search_icon" onClick={clickHandle}>
            <img src={search_icon} alt="search" />
          </button>
        </form>
        <button>Home</button>
        <Link to="/Profile">
          <button>Profile</button>
        </Link>
      </header>
      <Results images={images} />
      <ul className="pagination">{pageHolder}</ul>
    </div>
  );
};

export default SearchBar;
