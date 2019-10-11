import React, { Component } from "react";

import { MDBRow } from "mdbreact";

import axios from "axios";
import MovieWrapperItem from "../movieWrapperItem/MovieWrapperItem";
import "./MovieWrapperContainer.css";

export default class MovieWrapperContainer extends Component {
  state = {
    api: "65a0517cb48eb4ed5ad291617c54a98c",
    popularList: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.state.api}&language=en-US&page=1`
    );
    let data = response.data;
    // console.log(data.results);
    this.setState({
      popularList: data.results
    });
  };

  render() {
    const { popularList } = this.state;
    return (
      <MDBRow className="movie-wrapper__container">
        {popularList.map(movieItem => {
          return <MovieWrapperItem movieItem={movieItem} key={movieItem.id} />;
        })}
      </MDBRow>
    );
  }
}
