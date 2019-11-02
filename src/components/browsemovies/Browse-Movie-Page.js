import React, { Fragment, useState, useEffect } from "react";

import { MDBContainer, MDBRow } from "mdbreact";

import NavbarPage from "../navbar/Navbar-Page";
import "./BrowseMoviePage.style.css";
import SideNav from "../sidenav/Side-Nav";
import SideContainer from "../sidecontainer/Side-Container";

import axios from "axios";

const BrowseMoviePage = () => {
  const [category, setMovieCategory] = useState([]);
  const [genreId, setGenreId] = useState(28);
  const [genreName, setGenreName] = useState("Action");
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      const response = await axios(
        `${process.env.REACT_APP_LINK_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      const data = response.data.genres;
      setMovieCategory(data);
    };
    fetchGenre();
  }, []);

  const searchMovies = async event => {
    try {
      setInput(event.target.value);
      const response = await axios(
        `${process.env.REACT_APP_LINK_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
      );
      const result = response.data.results;
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = event => {
    setGenreId(event.target.parentElement.id);
    setGenreName(event.target.innerText);
  };

  return (
    <Fragment>
      <NavbarPage searchMovies={searchMovies} />
      <MDBContainer fluid>
        <MDBRow>
          <SideNav genres={category} handleClick={handleClick} />
          <SideContainer
            name={genreName}
            id={genreId}
            searchfield={input}
            searchResults={data}
          />
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
