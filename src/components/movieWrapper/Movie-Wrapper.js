import React, { useState, useEffect } from "react";

import { MDBRow } from "mdbreact";

import axios from "axios";
import MovieContainer from "../movieContainer/Movie-Container";
//import "./MovieWrapper.style.css";

const MovieWrapper = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `${props.link_url}movie/popular?api_key=${props.api_key}&language=en-US&page=1`
      );

      const data = response.data.results;
      setData(data);
    }
    fetchData();
  }, [props.api_key, props.link_url]);

  return (
    <MDBRow className="movie-wrapper__container">
      {data.map(movieItem => {
        return <MovieContainer movieItem={movieItem} key={movieItem.id} />;
      })}
    </MDBRow>
  );
};

export default MovieWrapper;
