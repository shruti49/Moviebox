import React from "react";

import { MDBCol } from "mdbreact";

import "./MovieWrapperItem.css";

const MovieWrapperItem = movieItem => {
  const date = new Date(movieItem.movieItem.release_date).getFullYear();
  return (
    <MDBCol className="movie-wrapper__container--item" sm="4" md='3'>
      <a className="browse-movie__link">
        <figure>
          <img
            src={`http://image.tmdb.org/t/p/w185/${movieItem.movieItem.poster_path}`}
            alt={movieItem.movieItem.title}
            className="img-fluid"
          />
          <figcaption className="hidden-xs hidden-sm">
            <span className="icon-star"></span>
            <h4 className="rating">{movieItem.movieItem.vote_average}</h4>
            <span></span>
          </figcaption>
        </figure>
      </a>
      <div className="browse-movie">
        <a href="" className='browse-movie__title'>{movieItem.movieItem.title}</a>
        <div className="browse-movie__year">{date}</div>
      </div>
    </MDBCol>
  );
};

export default MovieWrapperItem;
