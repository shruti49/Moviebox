import React, { useState, useEffect } from "react";

import { MDBCol, MDBNavLink } from "mdbreact";

import "./SideNav.style.css";

import axios from "axios";

const SideNav = props => {
  const { link_url, api_key } = props;
  const [category, setMovieCategory] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      const response = await axios(
        `${link_url}genre/movie/list?api_key=${api_key}&language=en-US`
      );

      const data = response.data.genres;
      setMovieCategory(data);
    };
    fetchGenre();
  }, [link_url, api_key]);

  return (
    <MDBCol md="12">
      <div className="nav-side-menu">
        <div className="brand">Movie Genre</div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            {category.map(genre => {
              return (
                <li key={genre.id}>
                  <MDBNavLink to={`/${genre.name}`}>{genre.name}</MDBNavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MDBCol>
  );
};

export default SideNav;

