import React, { Fragment } from "react";

import { Route } from "react-router-dom";

import HomePage from "./components/homePage/Home-Page";
import BrowseMoviePage from "./components/browsemovies/Browse-Movie-Page";

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={BrowseMoviePage} />
    </Fragment>
  );
};

export default App;
