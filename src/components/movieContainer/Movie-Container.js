import React, { Fragment } from "react";

import { MDBNavLink } from "mdbreact";

import "./MovieContainer.style.css";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX185.jpg";

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
  const date = new Date(movieItem.release_date).getFullYear();
  const poster =
    movieItem.poster_path !== null
      ? `http://image.tmdb.org/t/p/w185${movieItem.poster_path}`
      : DEFAULT_PLACEHOLDER_IMAGE;
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
