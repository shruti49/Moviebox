import React, { Fragment } from "react";

import { MDBNavLink } from "mdbreact";

import "./MovieContainer.style.css";

//Limiting the movie title characters
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

const MovieContainer = ({ movieItem }) => {

  //Setting Date 
  const date = new Date(movieItem.release_date).getFullYear();

  //Setting Movie Images
  const poster =
    (movieItem.poster_path &&
      `${process.env.REACT_APP_IMAGE_URL}${movieItem.poster_path}`) ||
    (movieItem.backdrop_path &&
      `${process.env.REACT_APP_IMAGE_URL}${movieItem.backdrop_path}`) ||
    `${process.env.REACT_APP_DEFAULT_PLACEHOLDER_IMAGE}`;

  return (
    <Fragment>
      <MDBNavLink to="/" className="browse-movie__link">
        <figure>
          <img src={poster} alt={movieItem.title} className="img-fluid" />
          <figcaption className="hidden-xs hidden-sm">
            <span className="icon-star">
              <i className="fas fa-star"></i>
            </span>
            <h4 className="rating">{`${movieItem.vote_average}/10`}</h4>
          </figcaption>
        </figure>
      </MDBNavLink>
      <div className="browse-movie">
        <div className="browse-movie__title">
          {limitMovieTitle(movieItem.title)}
        </div>
        <div className="browse-movie__year">{!isNaN(date) && date}</div>
      </div>
    </Fragment>
  );
};

export default MovieContainer;
