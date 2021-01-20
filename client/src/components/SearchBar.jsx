import React from "react";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSearch}>
      <input
        className="searchbar"
        name="search"
        onChange={props.handleChange}
        type="search"
        value={props.inputValue}
        placeholder="Research..."
      />
    </form>
  );
};

export default SearchBar;
