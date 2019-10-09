import React, { Component } from 'react';
import './index.css';
import NavbarPage from './components/Navbar/NavbarPage';

import MainPage from './components/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <MainPage/>
      </React.Fragment>
    );
  }
}

export default App;
