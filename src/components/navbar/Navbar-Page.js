import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

import "./NavbarPage.style.css";
import SearchBar from "../searchbar/Search-Bar";

const NavbarPage = ({ input, handleSearchInputChanges }) => {
  const [state, setState] = useState(false);

  //Collapsing of navbar
  const toggleCollapse = () => {
    setState(!state);
  };

  const bgColor = { backgroundColor: "#df691a" };

  return (
    <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
      <MDBNavbarBrand>
        <strong className="white-text">MovieBox</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/movies">Categories</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarNav right>
          <MDBNavItem>
            <SearchBar
              input={input}
              handleSearchInputChanges={handleSearchInputChanges}
            />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavbarPage;
