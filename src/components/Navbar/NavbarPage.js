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

import "./NavbarPage.css";
import axios from "axios";

class NavbarPage extends Component {
  state = {
    input: "",
    searchList: [],
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  fetchMovies = async input => {
    console.log(input);
    let response = await axios.get(
      `${this.props.link_url}search/movie?api_key=${this.props.api_key}&language=en-US&query=${input}&page=1&include_adult=false`
    );
    let data = response.data;
    this.setState({
      searchList: data.results
    });
    console.log(this.state.searchList);
  };

  searchMovies = event => {
    this.setState({
      input: event.target.value
    });
    this.fetchMovies(this.state.input);
  };

  render() {
    const bgColor = { backgroundColor: "#df691a" };
    return (
      <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text">MovieBox</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/movies">Browse Movies</MDBNavLink>
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
                  onChange={this.searchMovies}
                  value={this.state.input}
                />
              </div>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
