import React, { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdbreact";

import axios from "axios";
import MovieContainer from "../movieContainer/Movie-Container";

const SideContainer = ({ id, name, searchfield, searchResults }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(searchResults);
  }, [searchResults]);

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const discoverMovies = async () => {
        const response = await axios(
          `${process.env.REACT_APP_LINK_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        );

        const data = response.data.results;
        setData(data);
      };
      discoverMovies();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <MDBCol md="9">
      <h3 className="orange-text">{name}</h3>
      {console.log(searchfield)}
      <MDBRow className="movie-wrapper__container">
        {searchfield.length <= 0
          ? data.map(movieItem => {
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
            })
          : movies.map(movieItem => {
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
