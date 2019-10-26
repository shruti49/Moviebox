import React, { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdbreact";

import axios from "axios";
import MovieContainer from "../movieContainer/Movie-Container";
//import "./MovieWrapper.style.css";

const MovieWrapper = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `${process.env.REACT_APP_LINK_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      const data = response.data.results;
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <MDBRow className="movie-wrapper__container">
      {data.map(movieItem => {
        return (
          <MDBCol
            className="movie-wrapper__container--item"
            sm="4"
            md="3"
            key={movieItem.id}
          >
            <MovieContainer movieItem={movieItem} key={movieItem.id} />
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};

export default MovieWrapper;
