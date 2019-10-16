import React, { Component } from "react";

import { MDBRow } from "mdbreact";

import axios from "axios";
import MovieWrapperItem from "../movieWrapperItem/MovieWrapperItem";
import "./MovieWrapperContainer.css";

export default class MovieWrapperContainer extends Component {
  state = {
    popularList: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let response = await axios.get(
      `${this.props.link_url}movie/popular?api_key=${this.props.api_key}&language=en-US&page=1`
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
