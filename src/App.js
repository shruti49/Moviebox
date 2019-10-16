import React from "react";

import { Route } from "react-router-dom";

import HomePage from "./components/homePage/HomePage";
import BrowseMoviePage from "./components/browsemovies/BrowseMoviePage";

const App = () => {
  const api_key = "65a0517cb48eb4ed5ad291617c54a98c";
  const link_url = "https://api.themoviedb.org/3/";

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default App;
