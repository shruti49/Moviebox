import React from "react";

const SearchBar = ({ input, handleSearchInputChanges }) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className="fas fa-search prefix"></i>
        </span>
      </div>
      <input
        type="search"
        className="form-control"
        placeholder="Quick search"
        aria-label="Quick search"
        aria-describedby="basic-addon"
        value={input}
        onChange={handleSearchInputChanges}
      />
    </div>
  );
};

export default SearchBar;
