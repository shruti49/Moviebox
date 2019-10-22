import React, { Fragment } from "react";

import { Route } from "react-router-dom";

import HomePage from "./components/homePage/Home-Page";
import BrowseMoviePage from "./components/browsemovies/Browse-Movie-Page";

const App = () => {
  const api_key = "65a0517cb48eb4ed5ad291617c54a98c";
  const link_url = "https://api.themoviedb.org/3/";

  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={() => {
          return <HomePage api_key={api_key} link_url={link_url} />;
        }}
      />
      <Route
        path="/movies"
        render={() => {
          return <BrowseMoviePage api_key={api_key} link_url={link_url} />;
        }}
      />
    </Fragment>
  );
};

export default App;
