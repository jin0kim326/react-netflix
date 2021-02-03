import React, { Component } from "react";
import Header from "./components/header";
import Router from "./components/router";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
