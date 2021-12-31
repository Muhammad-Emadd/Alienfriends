import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 br2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for aliens"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
