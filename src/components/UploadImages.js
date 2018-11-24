import React, {Component} from 'react';
import { Carousel, Grid, Row, Col, Button, Thumbnail, Image, ProgressBar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from 'react-router-dom';
import axios from 'axios';
class UploadImages extends Component{
   
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      progress: 0,
    file:null
  
    };


  }

  
  componentWillMount (){
    let that = this;
    //  const headersValues = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': 'Bearer '+localStorage.getItem('token')
    // }
    // alert("headers data Image List:"+headersValues.Authorization);

    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    // alert("AuthStr::-"+AuthStr);
    axios.post('http://wizzio-dev1.westeurope.cloudapp.azure.com:4500/bin/mvc.do/onboarding/773/document',
    {
      "type": "Doc ID - Front",
      "name": "test.png",
      "content": "base64"
  } ,
    { headers: { Authorization: AuthStr } }).then(response => {
            // If request is good...
            console.log(response.data);
            // alert(JSON.stringify(response.data));
            // alert(response.data[0].name);
            // alert(response.data[1].type);
            // alert(response.data[2].type);
             that.setState({progress :100 })
             that.refs.successLink.click();
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });
        }

    render(){
      if (this.state.progress==100) {
            return <Redirect push to="/Success" />;
          }
        return(
        
          <div>
           
                    
        <Grid>
          
          <br />< br/>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4} style={{textAlign:'center'}}>
          
           <img style={{height:'91px', position:'absolute', marginLeft: '-58px'}} src={require('../resources/clock@3x.png')} responsive/>
          
           <img style={{height:'147px', marginTop:'56px', position:'relative'}} src={require('../resources/mascot@3x.png')} responsive/>
           <br /><br />
           <h3 style={{color:'#19eef1', fontWeight: '400', fontSize: '30px'}}>Submitting Photos</h3>
           <br />
           <p style={{textAlign:'left', color:'white'}}>
             Please wait a few moments while we are adding your photo to the onboarding process
           </p>
           <br />
           <ProgressBar active now={this.state.progress} />
           <h5 style={{color:'white', textAlign:'left'}}>Sending...</h5>
           <Link to='/Success' ref="successLink"></Link>
          </Col>
          <Col sm={4}></Col>
          </Row>
        </Grid>
</div>

        );
    }
}
export default UploadImages;