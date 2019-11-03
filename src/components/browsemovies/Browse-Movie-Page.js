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

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

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

  useEffect(() => {
    const searchMovies = async () => {
      let response = await axios(
        `${process.env.REACT_APP_LINK_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
      );
      const result = response.data.results;
      setData(result);
    };
    if (searchValue.length > 0) {
      searchMovies();
    }

    //resetInputField();
  }, [searchValue]);

  const handleClick = event => {
    setGenreId(event.target.parentElement.id);
    setGenreName(event.target.innerText);
  };

  return (
    <Fragment>
      <NavbarPage
        input={searchValue}
        handleSearchInputChanges={handleSearchInputChange}
      />
      <MDBContainer fluid>
        <MDBRow>
          <SideNav genres={category} handleClick={handleClick} />
          <SideContainer
            name={genreName}
            id={genreId}
            searchfield={searchValue}
            searchResults={data}
          />
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
