import React, { Component} from 'react';
import { Grid, FormControl, ControlLabel, InputGroup, ButtonGroup, Checkbox, Image, Panel, Form, FormGroup, Col, Button, Table, Radio, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import * as loginAction from '../store/actions/loginAction';
import './css/LoginCss.css';
class Login extends Component{

    constructor(props, context) {
        super(props, context);
     this.handleUserChange = this.handleUserChange.bind(this);
     this.handlePassChange = this.handlePassChange.bind(this);
        
     this.state = {
          User: 'brain',
          Pass: 'brain',
          inputType: 'password'        
        };
       
  
      }

      
       handleUserChange(e) {
        this.setState({  User : e.target.value });
      }
  
      handlePassChange(e) {
        this.setState({  Pass : e.target.value });
        }

    inputTypeChange(){
        // alert(this.state.inputType);
        this.setState({
            inputType:this.state.inputType=='password'?'text':'password'
        });
    }


        userLogin(){

   
            //     alert(this.state.Id);
     
            //    alert(this.state.User);
            //    alert(this.state.Pass);
            //    alert(this.state.Image);
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YnJpYW46YnJpYW4=' 
            }
            axios.post('http://wizzio-dev1.westeurope.cloudapp.azure.com:4500/bin/mvc.do/foundation/oauth/authorize', {
                //  puid: this.state.Id,
                 User: this.state.User,
                 Pass: this.state.Pass
                //  image: this.state.Image
               }, {headers: headers})
               .then(function (response) {
                 console.log(response);
                //  let tokenvalue = JSON.parse(response.data);
                //  const token = JSON.stringify(response);
                //   alert("First Data :"+ response.data.accessToken );
                  loginAction.setAccessTokenInStore(response.data.accessToken);
                //   dispatch({type: FOUND_USER, data: response.data[0]})
            //local storage data
                 localStorage.setItem('token', response.data.accessToken);
    

               })
               .catch(function (error) {
                 console.log(error);
                 alert(error);
               }); 
           
             }

    render(){
        return(
            <Grid>
                {/* start md view wizzio image */}
                <Row>
                 <Col md={12} xsHidden smHidden >
                     <img className="mdwizzio" src={require('../resources/wizzio@3x.png')} responsive/>
                 </Col>
                </Row>

                {/* start sm view wizzio image */}
                <Row>
                    <Col sm={12} xsHidden mdHidden lgHidden>
                         <img className="smwizzio" src={require('../resources/wizzio@2x.png')} responsive/>
                   </Col>
                </Row>
                {/* Start xs view wizzio image */}
                <Row>
                    <Col xs={12} smHidden mdHidden lgHidden>
                         <img className="xswizzio" src={require('../resources/wizzio.png')} responsive/>
              
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    {/* start sm wizzio content */}
                    <Col sm={12} xsHidden>
                        <h5 className="wizziocredentials">
                            Login with your <b> wizzio credentials </b> to upload photo
                             of document required to continue the <b> Onboarding </b> process
                        </h5>
                    </Col>

                    {/* Start xs wizzio content */}
                    <Col xs={12} smHidden mdHidden lgHidden>
                        <h5 className="xswizziocredentials">
                            Login with your <b> wizzio credentials </b> to upload photo
                             of document required to continue the <b> Onboarding </b> process
                        </h5>
                    </Col>
                </Row>
                <br></br>
                <br />
                <Row>
                 <Col sm={12}>
                    <Form horizontal>
                     <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col sm={8}>
                         <InputGroup>
                            <InputGroup.Addon className="loginuserinputaddon" bsStyle="default">
                                 <img className="loginuserinputicon" src={require('../resources/fill-1@3x.png')} responsive/>
                            </InputGroup.Addon>
                            <FormControl className="loginuserinput" type="text" placeholder="User" value={this.state.User} onChange={this.handleUserChange} required/>
                            </InputGroup>
                        </Col>
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        </FormGroup>
                        <br />
                        <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col sm={8}>
                            <InputGroup>
                             <InputGroup.Addon className="loginpassinputaddon"> 
                                <img className="loginpassinputicon" src={require('../resources/fill-6@3x.png')} responsive/>
                             </InputGroup.Addon>
                           
                                 <FormControl className="loginpassinput" type={this.state.inputType} placeholder="Password" value={this.state.Pass} onChange={this.handlePassChange} required/>
                            <InputGroup.Addon className="loginpassinputrightaddon"> 
                                 <img onClick={()=>this.inputTypeChange()} className="loginpassinputrighticon" src={require('../resources/eye@3xxx.png')} responsive/>
                            </InputGroup.Addon>
                           
                            </InputGroup>
                        </Col>
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        </FormGroup>
<br /> <br />
                        <FormGroup>
                            <Col smOffset={2} sm={8}>
                            <ButtonGroup vertical block>
                               <Button bsStyle="link" onClick={ () =>this.userLogin()} style={{ border:'1px solid white', textDecoration:'none'}}><Link to={'/ImageList'} bsStyle="default" style={{color: "White", textDecoration: "none"}} > Login </Link></Button>
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

function mapStateToProps(state){
    return({
          User: state.rootReducer.User,
          Pass: state.rootReducer.Pass
    })
  }
  
  const mapDispatchToProps={
    ...loginAction
  }

//   function mapDispatchToProps(dispatch){
//     // alert(dispatch);
//     // return({
        
//     //     setAccessTokenInStore: (accesstoken)=>{
//     //         dispatch({
//     //             type:'LOGINSUCCESS',
//     //             payload:accesstoken
//     //         })
//     //     }
//     // })
  
//     loginAction

    
//   }

export default connect(mapStateToProps,mapDispatchToProps)(Login);