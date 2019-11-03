import React, { Fragment, useState, useEffect } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./HomePage.style.css";

import NavbarPage from "../navbar/Navbar-Page";
import MovieWrapper from "../movieWrapper/Movie-Wrapper";

import axios from "axios";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState([]);

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

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

  return (
    <Fragment>
      <NavbarPage
        input={searchValue}
        handleSearchInputChanges={handleSearchInputChange}
      />
      <MDBContainer>
        <MDBRow>
          <MDBCol className="main-page__header">
            <h1 className="main-page__title">Search your favourite movies</h1>
          </MDBCol>
        </MDBRow>
        <MovieWrapper searchfield={searchValue} searchResults={data} />
      </MDBContainer>
    </Fragment>
  );
};

export default HomePage;
