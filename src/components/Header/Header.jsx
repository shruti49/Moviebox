import React, { Component } from 'react';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <header className='App-header'>
        <Navbar>
          <Navbar.Brand href='#home'>Movie Box</Navbar.Brand>
          <Nav className='ml-auto'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-info'>Search</Button>
              <Nav.Link href='#pricing'>Browse Movies</Nav.Link>
            </Form>
          </Nav>
        </Navbar>
      </header>
    );
  }
}
