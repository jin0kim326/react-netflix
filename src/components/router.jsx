import React, { Component } from "react";
import {
  BrowserRouter as BaseRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./header";
import Home from "../routes/home";
import Search from "../routes/search";
import TV from "../routes/tv";

class Router extends Component {
  render() {
    return (
      <BaseRouter>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </BaseRouter>
    );
  }
}

export default Router;
