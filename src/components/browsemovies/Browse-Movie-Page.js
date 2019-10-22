import React, { Fragment } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import NavbarPage from "../navbar/Navbar-Page";
// import MovieWrapperContainer from "../movieWrapperContainer/MovieWrapperContainer";

const BrowseMoviePage = props => {
  const { api_key, link_url } = props;
  return (
    <Fragment>
      <NavbarPage api_key={api_key} link_url={link_url} />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol xs="12" sm="4" md="3" lg="2">
            <nav className="navbar navbar-default" role="navigation">
              <div className="navbar-header"></div>
            </nav>
          </MDBCol>
          <MDBCol xs="12" sm="4" md="3" lg="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
