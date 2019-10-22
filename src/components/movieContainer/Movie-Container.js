import React from "react";

import { MDBCol, MDBBtn } from "mdbreact";

import "./MovieContainer.style.css";

const limitMovieTitle = (title, limit = 20) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    //return the result
    return `${newTitle.join(" ")}...`;
  }
  return title;
};

const MovieContainer = props => {
  const { movieItem } = props;
  const date = new Date(movieItem.release_date).getFullYear();
  return (
    <MDBCol className="movie-wrapper__container--item" sm="4" md="3">
      <a className="browse-movie__link">
        <figure>
          <img
            src={`http://image.tmdb.org/t/p/w185/${movieItem.poster_path}`}
            alt={movieItem.title}
            className="img-fluid"
          />
          <figcaption className="hidden-xs hidden-sm">
            <span className="icon-star">
              <i className="fas fa-star"></i>
            </span>
            <h4 className="rating">{`${movieItem.vote_average}/10`}</h4>
            <MDBBtn color="success">View Details</MDBBtn>
          </figcaption>
        </figure>
      </a>
      <div className="browse-movie">
        <div className="browse-movie__title">
          {limitMovieTitle(movieItem.title)}
        </div>
        <div className="browse-movie__year">{date}</div>
      </div>
    </MDBCol>
  );
};

export default MovieContainer;
