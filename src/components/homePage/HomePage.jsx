import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./HomePage.css";

import MovieWrapperContainer from "../movieWrapperContainer/MovieWrapperContainer";

const HomePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="main-page__header">
          <h2>Search your favourite movies</h2>
        </MDBCol>
      </MDBRow>
      <MovieWrapperContainer />
    </MDBContainer>
  );
};

export default HomePage;
