import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size='12' sm='4' md='3' lg='2'>
              .col-12 .col-sm-6 .col-lg-8
            </MDBCol>
            <MDBCol size='12' sm='8' md='9' lg='10'>
              .col-12 .col-sm-6 .col-lg-8
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
