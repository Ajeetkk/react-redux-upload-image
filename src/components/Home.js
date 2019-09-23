import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: 0
    };
  }
  logOut() {
    this.setState({
      logout: 1
    });
  }
  render() {
    if (this.state.logout === 1) {
      return <Redirect push to="/" />;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <Button onClick={this.logOut.bind(this)} style={{ float: "right" }}>
          Logout
        </Button>
        <h1>
          {" "}
          Home Page <br />
        </h1>
        <h3>
          User Name: <b>{this.props.User}</b>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // alert("homemapStateToProps:" + state.LoginReducer.User);
  return {
    User: state.LoginReducer.User
  };
}

export default connect(mapStateToProps)(Home);
