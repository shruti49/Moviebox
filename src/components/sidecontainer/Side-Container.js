import React, { useState, useEffect } from "react";

import { MDBRow, MDBCol } from "mdbreact";

import axios from 'axios'; 

const SideContainer = (props) => {
  const { id } = props;

  const [data,setData] = useState([]);

  useEffect(() => {
    const discoverMovies = async () => {
      const response = await axios(
        `${process.env.REACT_APP_LINK_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      );

      const data = response.data.results;
      setData(data);
    };
    discoverMovies();
  }, [id]);


  return (
    <MDBCol xs="12" sm="8" md="9" lg="10">
      <h3 className="orange-text"></h3>
      <MDBRow className="is-flex">
      </MDBRow>
    </MDBCol>
  );
};

export default SideContainer;

