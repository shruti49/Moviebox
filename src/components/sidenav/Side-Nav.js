import React from "react";

import { MDBCol, MDBNavLink } from "mdbreact";

import "./SideNav.style.css";

const SideNav = props => {
  const { genres, handleClick } = props;

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
            {genres.map(genre => {
              return (
                <li key={genre.id} id={genre.id}>
                  <MDBNavLink
                    to={`/movies/${genre.name}`}
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
