import React, { Fragment, useState, useEffect } from "react";

import { MDBContainer, MDBRow } from "mdbreact";

import NavbarPage from "../navbar/Navbar-Page";
import "./BrowseMoviePage.style.css";
import SideNav from "../sidenav/Side-Nav";
import SideContainer from "../sidecontainer/Side-Container";

import axios from "axios";

const BrowseMoviePage = props => {
  const [category, setMovieCategory] = useState([]);

  const [genreId, setGenreId] = useState();
  const [genreName, setGenreName] = useState();

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

  const handleClick = event => {
    setGenreId(event.target.parentElement.id);
    setGenreName(event.target.innerText);
  };

  return (
    <Fragment>
      <NavbarPage />
      <MDBContainer fluid>
        <MDBRow>
          <SideNav genres={category} handleClick={handleClick} />
          <SideContainer name={genreName} id={genreId}/>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
