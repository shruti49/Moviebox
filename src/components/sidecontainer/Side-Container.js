import React, { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdbreact";

import axios from "axios";

import MovieContainer from "../movieContainer/Movie-Container";

const SideContainer = props => {
  const { id, name } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    const discoverMovies = async () => {
      const response = await axios(
        `${process.env.REACT_APP_LINK_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      );

      const data = response.data.results;
      setData(data);
    };
    discoverMovies();
  }, [id]);

  return (
    <MDBCol>
      <h3 className="orange-text">{name}</h3>
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
    </MDBCol>
  );
};

export default SideContainer;
