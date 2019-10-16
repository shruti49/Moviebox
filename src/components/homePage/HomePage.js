import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./HomePage.css";

import NavbarPage from "../navbar/NavbarPage";
import MovieWrapperContainer from "../movieWrapperContainer/MovieWrapperContainer";

const HomePage = props => {
  const { api_key, link_url } = props;
  return (
    <React.Fragment>
      <NavbarPage api_key={api_key} link_url={link_url} />
      <MDBContainer>
        <MDBRow>
          <MDBCol className="main-page__header">
            <h1 className="main-page__title">Search your favourite movies</h1>
          </MDBCol>
        </MDBRow>
        <MovieWrapperContainer api_key={api_key} link_url={link_url} />
      </MDBContainer>
    </React.Fragment>
  );
};

export default HomePage;
