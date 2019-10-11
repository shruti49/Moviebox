import React, { Component } from "react";

import NavbarPage from "./components/navbar/NavbarPage";
import HomePage from "./components/homePage/HomePage";

// import axios from "axios";

class App extends Component {
  // state = {
  //   query: "",
  //   api: "65a0517cb48eb4ed5ad291617c54a98c"
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = async () => {
  //   let response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${this.state.api}&language=en-US&page=1`
  //   );
  //   let data = response.data;
  //   console.log(data);
  // };

  inputChange = event => {
    console.log(event.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <NavbarPage inputChange={this.inputChange} />
        <HomePage />
      </React.Fragment>
    );
  }
}

export default App;
