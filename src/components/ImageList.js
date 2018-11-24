import React, {Component} from 'react';
import { Carousel, Grid, Row, Col, Button, ButtonGroup, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
class ImageList extends Component{
   
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
    productimage:  [],
    file:null
  
    };


  }

  
  componentWillMount (){
    let that = this;
   
    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    // alert("AuthStr::-"+AuthStr);
    axios.get('http://wizzio-dev1.westeurope.cloudapp.azure.com:4500/bin/mvc.do/onboarding/773/document', { headers: { Authorization: AuthStr } }).then(response => {
            // If request is good...
            console.log(response.data);
            // alert(JSON.stringify(response.data));
            // alert(response.data[0].name);
            // alert(response.data[1].type);
            // alert(response.data[2].type);
             that.setState({productimage :response.data })
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });


        } 


  handleClick(e) {
    this.refs.fileUploader.click();
    
    }
onChangeFile(e) {

  var file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({
        file: reader.result
      })
      // this.refs.selectImage.src=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }



    render(){
        // const { index, direction } = this.state;
        return(
        
          <div>
           
                    
        <Grid>
          
          <br />
          {/* Design for md and lg */}
          <Row>
          <Col sm={4} xsHidden></Col>
            <Col sm={4} xsHidden>

            {/* <h4>Image LIST</h4>
            */}
            <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/>

     {this.state.productimage.map((row, i) =>
        <ul style={{listStyle: "none"}}>
           <li>
          <h5 style={{color:'#19eef1'}}>{row.type}</h5>
         
           {
          this.state.file ? 
          <div>
            <Button onClick={this.handleClick} style={{position:'absolute', background:'black'}}>
               <img src={require('../resources/reload.png')} responsive/>
           </Button>
           <ButtonGroup vertical block>
            <Button style={{border:'0px', background:'#f3f2f2'}}>
              <img style={{padding:'50px', paddingBottom:'0px'}} ref="selectImage" src={this.state.file} responsive/>
            </Button>
           </ButtonGroup>
           </div>
            :
            <div>
              <ButtonGroup vertical block>

                 <Button onClick={this.handleClick} style={{border:'0px', background:'#f3f2f2'}}>
          
                  <img style={{padding:'50px', paddingBottom:'0px'}} src={require('../resources/primary.png')} responsive/>
                <h6 style={{paddingBottom:'10px', paddingTop:'20px', color:'#ada5a3'}}>Press to add a photo of document</h6>
                </Button>
              </ButtonGroup>
            
            </div>
           }
          
           
          
           </li>
           </ul>   // <SingleProductDetail title= {row.name} price={row.price} img={row.image} ></SingleProductDetail>
          
            
            )}
          
          
          
          
              {/* <input type="button" onClick={this.uploadingImages.bind(this)} value="Upload File" style={{display:'block', marginLeft:'auto', marginRight:'auto', paddingLeft:'50px', paddingRight:'90px'}}></input> */}
              <br /><br /></Col>

              
           
            <Col md={4} xsHidden>
            </Col> 
          </Row>
         
          {/* design for xs */}

        <Row>
         
            <Col xs={11} smHidden mdHidden lgHidden>

            {/* <h4>Image LIST</h4>
            */}
            <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/>

     {this.state.productimage.map((row, i) =>
        <ul style={{listStyle: "none"}}>
           <li>
          <h5 style={{color:'#19eef1'}}>{row.type}</h5>
         
           {
          this.state.file ? 
          <div>
            <Button onClick={this.handleClick} style={{position:'absolute', background:'black'}}>
               <img src={require('../resources/reload.png')} responsive/>
           </Button>
           <ButtonGroup vertical block>
            <Button style={{border:'0px', background:'#f3f2f2'}}>
              <img style={{padding:'50px', paddingBottom:'0px'}} ref="selectImage" src={this.state.file} responsive/>
            </Button>
           </ButtonGroup>
           </div>
            :
            <div>
              <ButtonGroup vertical block>

                 <Button onClick={this.handleClick} style={{border:'0px', background:'#f3f2f2'}}>
          
                  <img style={{padding:'50px', paddingBottom:'0px'}} src={require('../resources/primary.png')} responsive/>
                <h6 style={{paddingBottom:'10px', paddingTop:'20px', color:'#ada5a3'}}>Press to add a photo of document</h6>
                </Button>
              </ButtonGroup>
            
            </div>
           }
           </li>
           </ul>     
            )}
          </Col>  
          <Col xs={11} smHidden mdHidden lgHidden>
       </Col>
          </Row>



          {/* Button xs lg md */}
          <Row xsHidden>
            <Col sm={4} xsHidden></Col>
            <Col sm={4} xsHidden>
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
              <ButtonGroup vertical block>
               <Button><Link to='/UploadImages'>Upload File</Link></Button>
          
               </ButtonGroup>
              </Col>
            </Row>
            
            </Col>
            <Col sm={4} xsHidden></Col>
          </Row>
          
          {/* button xs */}

          <Row>
            
            <Col xs={1} smHidden mdHidden lgHidden></Col>
            <Col xs={10} smHidden mdHidden lgHidden>
            <ButtonGroup vertical block>
               <Button><Link to='/UploadImages'>Upload File</Link></Button>
          
               </ButtonGroup>
            </Col>
            <Col xs={1} smHidden mdHidden lgHidden></Col>
          </Row>
          <br /><br />
        </Grid>
</div>

        );
    }
}
export default ImageList;