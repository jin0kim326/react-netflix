import React, { Component } from "react";
import Router from "./components/router";
import GlobalStyles from "./components/globalstyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
