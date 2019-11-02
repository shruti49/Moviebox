import React from "react";

import { MDBCol, MDBNavLink } from "mdbreact";

import "./SideNav.style.css";

const SideNav = ({ genres, handleClick }) => {
  return (
    <MDBCol md="3">
      <div className="nav-side-menu">
        <div className="brand">Movie Genre</div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            {genres.map(genre => {
              return (
                <li key={genre.id} id={genre.id}>
                  <MDBNavLink
                    to={`/movies/?id=${genre.id}&name=${genre.name}`}
                    onClick={handleClick}
                  >
                    {genre.name}
                  </MDBNavLink>
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
