import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

import './NavbarPage.css';

class NavbarPage extends Component {
  render() {
    const bgColor = { backgroundColor: '#df691a' };
    return (
      <Router>
        <MDBNavbar style={bgColor} dark expand='md' scrolling fixed='top'>
          <MDBNavbarBrand>
            <strong className='white-text'>MovieBox</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav>
            <MDBNavItem>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon'>
                    <i className='fas fa-search prefix'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Quick search'
                  aria-label='Quick search'
                  aria-describedby='basic-addon'
                />
              </div>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
