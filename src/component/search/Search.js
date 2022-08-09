import React from "react";
import "./Search.css";
import icon from "../../images/icon-arrow.svg";

const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search">
      <input
        name="search"
        value={search}
        onChange={handleChange}
        className="search__input"
      />
      <div className="search__icon">
        <img src={icon} alt="right arrow" />
      </div>
    </div>
  );
};

export default Search;
