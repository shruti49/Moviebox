import React, { Fragment } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import NavbarPage from "../navbar/Navbar-Page";
import "./BrowseMoviePage.style.css";
import SideNav from "../sidenav/Side-Nav";
import SideContainer from '../sidecontainer/Side-Container';

const BrowseMoviePage = props => {
  const { api_key, link_url } = props;
  return (
    <Fragment>
      <NavbarPage api_key={api_key} link_url={link_url} />
      <MDBContainer fluid>
        <MDBRow>
          <SideNav api_key={api_key} link_url={link_url} />
          <MDBCol xs="12" sm="8" md="9" lg="10">
            <SideContainer />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default BrowseMoviePage;
