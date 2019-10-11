import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol xs='12' sm='4' md='3' lg='2'>
              .col-12 .col-sm-6 .col-lg-8
            </MDBCol>
            <MDBCol xs='12' sm='8' md='9' lg='10'>
              .col-12 .col-sm-6 .col-lg-8
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}
