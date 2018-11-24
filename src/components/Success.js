import React, {Component} from 'react';
import { Carousel, Grid, Row, Col, Glyphicon, FormControl, Button, FormGroup, InputGroup, ButtonGroup, ProgressBar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from 'react-router-dom';

class UploadImages extends Component{
   
  constructor(props, context) {
    super(props, context);
   
  }

  
 
    render(){
     
        return(
        
          <div>
           
                    
        <Grid>
          
          <br />< br/>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4} style={{textAlign:'center'}}>
          
           <img style={{height:'240px', position:'absolute', marginLeft: '-39px'}} src={require('../resources/confetis@3x.png')} responsive/>
          
           <img style={{height:'147px', marginTop:'98px', position:'relative'}} src={require('../resources/mascot@3x.png')} responsive/>
           <br /><br />
           <h3 style={{color:'#19eef1', fontWeight: '400', fontSize: '30px'}}>Success!</h3>
           <br />
           
           <br />
           <FormGroup>
            <InputGroup>
              <FormControl type="text" value="ID" style={{background:'#e6e6e6',color:'#05ccd0'}}/>
              <InputGroup.Addon style={{background:'#25a06d', border:'0px', color:'white'}}>
                <Glyphicon glyph="check" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup> 
          <FormGroup>
            <InputGroup>
            <FormControl type="text" value="ID" style={{background:'#e6e6e6',color:'#05ccd0'}}/>
              <InputGroup.Addon style={{background:'#25a06d', border:'0px', color:'white'}}>
                 <Glyphicon glyph="check" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup> 
          <br /><br /><br /> 
          <FormGroup>              
                <ButtonGroup vertical block>
                  <Button bsStyle="link"  style={{ border:'1px solid white', textDecoration:'none', color:'white'}}>
                  Close
                  </Button>
                </ButtonGroup>
           </FormGroup> 
          </Col>
          <Col sm={4}></Col>
          </Row>
        </Grid>
</div>

        );
    }
}
export default UploadImages;