import React, { Fragment } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./HomePage.style.css";

import NavbarPage from "../navbar/Navbar-Page";
import MovieWrapper from "../movieWrapper/Movie-Wrapper";

const HomePage = props => {

  return (
    <Fragment>
      <NavbarPage />
      <MDBContainer>
        <MDBRow>
          <MDBCol className="main-page__header">
            <h1 className="main-page__title">Search your favourite movies</h1>
          </MDBCol>
        </MDBRow>
        <MovieWrapper />
      </MDBContainer>
    </Fragment>
  );
};

export default HomePage;
