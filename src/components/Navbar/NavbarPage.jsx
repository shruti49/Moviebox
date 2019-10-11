import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

import "./NavbarPage.css";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    const bgColor = { backgroundColor: "#df691a" };
    return (
      <Router>
        <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand>
            <strong className="white-text">MovieBox</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Browse Movies</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fas fa-search prefix"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Quick search"
                    aria-label="Quick search"
                    aria-describedby="basic-addon"
                    onChange={this.props.inputChange}
                  />
                </div>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
          
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
