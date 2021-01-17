import React from "react";
import axios from "axios";

const SearchBar = (props) => {
  return (
    //error on onSubmit ?
    <form onSubmit={props.handleSearch}>
      <input
        className="searchbar"
        name="search"
        onChange={props.handleChange}
        type="search"
        // value=""
        placeholder="Research..."
      />
      {/* <button >GO</button> */}
    </form>
  );
};

export default SearchBar;
