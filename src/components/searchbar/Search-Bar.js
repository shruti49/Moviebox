import React, { useState } from "react";

import axios from "axios";

const SearchBar = props => {

  const [data, setData] = useState([]);
  let input;
  const fetchData = async event => {
    input = event.target.value;
    const response = await axios(
      `${process.env.REACT_APP_LINK_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
    );
    const data = response.data.results;
    setData(data);
  };

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
        onChange={fetchData}
      />
    </div>
  );
};

export default SearchBar;
