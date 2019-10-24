import React, { useState } from "react";

import axios from "axios";

const SearchBar = props => {
  const { link_url, api_key } = props;
  const [data, setData] = useState([]);
  let input;
  const fetchData = async event => {
    input = event.target.value;
    const response = await axios(
      `${link_url}search/movie?api_key=${api_key}&language=en-US&query=${input}&page=1&include_adult=false`
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
      {console.log(data)}
      <input
        type="search"
        className="form-control"
        placeholder="Quick search"
        aria-label="Quick search"
        aria-describedby="basic-addon"
        value="input"
        onChange={fetchData}
      />
    </div>
  );
};

export default SearchBar;
