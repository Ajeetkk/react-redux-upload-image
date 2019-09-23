import React, { Component } from "react";
import {
  Grid,
  FormControl,
  ControlLabel,
  InputGroup,
  ButtonGroup,
  Form,
  FormGroup,
  Col,
  Button,
  Row
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.userLogin = this.userLogin.bind(this);

    this.state = {
      UserPlaceHolder: "",
      PassPlaceHolder: "",
      redirectPage: 0
    };
  }

  handleUserChange(e) {
    this.setState({ UserPlaceHolder: e.target.value });
  }

  handlePassChange(e) {
    this.setState({ PassPlaceHolder: e.target.value });
  }

  userLogin() {
    //     alert(this.state.Id);

    // alert(this.state.UserPlaceHolder);
    // alert(this.state.PassPlaceHolder);
    //    alert(this.state.Image);
    // var that = this;
    // var loginData = {
    //   UserPhd: that.state.UserPlaceHolder,
    //   PassPhd: that.state.PassPlaceHolder
    // };
    // alert(loginData.);

    // that.props.setAccessTokenInStore(response.data.accessToken);

    this.props.setUserName(this.state.UserPlaceHolder);
    if (this.props.User) {
      this.setState({
        redirectPage: 1
      });
    }
  }

  render() {
    if (this.state.redirectPage === 1) {
      return <Redirect push to="/Home" />;
    }
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            {/* userName : {this.props.User} */}
            <Form horizontal>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2} />
                <Col sm={8}>
                  <br />
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="User"
                      value={this.state.UserPlaceHolder}
                      autoComplete="new-user"
                      onChange={this.handleUserChange}
                      required
                    />
                  </InputGroup>
                </Col>
                <Col componentClass={ControlLabel} sm={2} />
              </FormGroup>
              <br />
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2} />
                <Col sm={8}>
                  <InputGroup>
                    <FormControl
                      type="Password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={this.state.PassPlaceHolder}
                      onChange={this.handlePassChange}
                      required
                    />
                  </InputGroup>
                </Col>
                <Col componentClass={ControlLabel} sm={2} />
              </FormGroup>
              <br /> <br />
              <FormGroup>
                <Col smOffset={2} sm={8}>
                  <ButtonGroup vertical>
                    <Button onClick={() => this.userLogin()}>Login </Button>
                  </ButtonGroup>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // alert("mapStateToProps");
  // alert("state: " + state.LoginReducer.User);
  return {
    User: state.LoginReducer.User
  };
}

function mapDispatchToProps(dispatch) {
  // alert(dispatch);
  return {
    dispatch,

    setUserName: username => {
      // alert("mapDispatchToProps " + username);
      dispatch({
        type: "USERNAME",
        payload: username
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
