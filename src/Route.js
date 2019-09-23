import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import history from "./History";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}>
            {" "}
          </Route>
          <Route exact path="/Home" component={Home}>
            {" "}
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Routers;
