import React, { Fragment } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import NavbarPage from "../navbar/Navbar-Page";
import "./BrowseMoviePage.style.css";
import SideNav from "../sidenav/Side-Nav";
import SideContainer from '../sidecontainer/Side-Container';

const BrowseMoviePage = props => {

  return (
    <Fragment>
      <NavbarPage/>
      <MDBContainer fluid>
        <MDBRow>
          <SideNav/>
          <MDBCol xs="12" sm="8" md="9" lg="10">
            <SideContainer />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
