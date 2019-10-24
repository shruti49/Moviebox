import React, { Fragment } from "react";

import { Route } from "react-router-dom";

import HomePage from "./components/homePage/Home-Page";
import BrowseMoviePage from "./components/browsemovies/Browse-Movie-Page";

const App = () => {
  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={() => {
          return <HomePage />;
        }}
      />
      <Route
        path="/movies"
        render={() => {
          return <BrowseMoviePage />;
        }}
      />
    </Fragment>
  );
};

export default App;
