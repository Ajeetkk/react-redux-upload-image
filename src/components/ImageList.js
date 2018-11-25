import React, {Component} from 'react';
import { Carousel, Grid, Row, Col, Button, ButtonGroup, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import './css/LoginCss.css';

class ImageList extends Component{
    count = 0;
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
    productimage:  [],
    selectImage: [],
    file:null,
    imageSelectedSuccess:false
  
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
             that.setState({productimage :response.data });
             that.props.imageListArrays(response.data);
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });


        } 


  handleClick(e) {
   
    this.refs.fileUploader.click();
    
    }

    reloadHandleClick(i, e){
      // alert(i);
    
      this.refs['fileUploader'+i.toString()].click();

    }
    onReloadChangeFile(i,e){
      // alert(e.target.id);

      var file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
     let item = this.state.selectImage;
     item[i] = reader.result;
      this.setState({
        file: reader.result,
        selectImage:item
      })
      this.refs.selectImage.src=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  
    }

onChangeFile(e) {

  var file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({
        file: reader.result,
        selectImage:this.state.selectImage.concat([reader.result])
      })
      // this.refs.selectImage.src=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  onImageList(){
     //alert(JSON.stringify(this.state.selectImage));
   
    this.props.imageList(JSON.stringify(this.state.selectImage));
    this.setState({
      imageSelectedSuccess:true
    })
  }



    render(){
        // const { index, direction } = this.state;

        if (this.state.imageSelectedSuccess) {
          return <Redirect push to="/UploadImages" />;
        }


        return(
        
          <div>
           
                    
        <Grid>
          
          <br />
          {/* Design for md and lg */}
          {
            // alert("imagelist first name:"+this.props.User)
          }
          {
            // alert("imagelist accessToken:"+this.props.AccessToken)
          }
          {
            // alert("imageLength:"+this.state.selectImage.length)
          }

          {/* .. Start md and lg */}
          {
            // alert(this.props.selectImage)
          }

          <Row>
          <Col md={4} xsHidden smHidden></Col>
            <Col md={4} xsHidden smHidden>
           
            {JSON.stringify(this.props.ImageListArray)}
            {/* <h4>Image LIST</h4>
            */}
            <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/>

     {this.state.productimage.map((row, i) =>
       <ul style={{listStyle: "none"}}>
           <li>
          <h5 style={{color:'#19eef1'}}>{row.type}</h5>
          {/* <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this, i)} style={{display: "none"}}/> */}

       
           {
          this.state.file ? 
          <div>
            <input type="file"  id={this.count++} accept="image/*" ref={"fileUploader"+i} onChange={this.onReloadChangeFile.bind(this, i)} style={{display: "none"}}/>

            <Button onClick={this.reloadHandleClick.bind(this, i)} style={{position:'absolute', zIndex: '3', background:'black'}}>
               <img src={require('../resources/reload.png')} responsive/>
           </Button>
           <ButtonGroup vertical block>
            <Button style={{border:'0px', background:'#f3f2f2'}}>
              <img style={{padding:'50px', paddingBottom:'0px', width: '309px'}} ref={"selectImage"+i} src={this.state.selectImage[i]||require('../resources/primary.png')} responsive/>
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

              
           
            <Col md={4} xsHidden smHidden>
            </Col> 
          </Row>

          {/* .. End md lg */}


          {/* .. Design for sm */}
          <Row>
          <Col sm={4} xsHidden mdHidden lgHidden></Col>
            <Col sm={4} xsHidden mdHidden lgHidden>
           
            {JSON.stringify(this.props.ImageListArray)}
            {/* <h4>Image LIST</h4>
            */}
            {/* <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/> */}
            <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/>

     {this.state.productimage.map((row, i) =>
        <ul style={{listStyle: "none"}}>
           <li>
          <h5 style={{color:'#19eef1'}}>{row.type}</h5>
         
           {
          this.state.file ? 
          <div>
            <input type="file"  id={this.count++} accept="image/*" ref={"fileUploader"+i} onChange={this.onReloadChangeFile.bind(this, i)} style={{display: "none"}}/>

            <Button onClick={this.reloadHandleClick.bind(this, i)} style={{position:'absolute', zIndex: '3', background:'black'}}>
               <img src={require('../resources/reload.png')} responsive/>
           </Button>
           <ButtonGroup vertical block>
            <Button style={{border:'0px', background:'#f3f2f2'}}>
              <img style={{padding:'50px', paddingBottom:'0px', width: '192px'}} ref="selectImage" src={this.state.file} responsive/>
            </Button>
           </ButtonGroup>
           </div>
            :
            <div>
              <ButtonGroup vertical block>

                 <Button onClick={this.handleClick} style={{border:'0px', background:'#f3f2f2'}}>
          
                  <img style={{padding:'50px', paddingBottom:'0px'}} src={require('../resources/primary.png')} responsive/>
                <h6 style={{paddingBottom:'10px', paddingTop:'20px', color:'#ada5a3'}}>Press to add a photo <br />of document</h6>
                </Button>
              </ButtonGroup>
            
            </div>
           }
          
           
          
           </li>
           </ul>   // <SingleProductDetail title= {row.name} price={row.price} img={row.image} ></SingleProductDetail>
          
            
            )}
          
          
          
          
              {/* <input type="button" onClick={this.uploadingImages.bind(this)} value="Upload File" style={{display:'block', marginLeft:'auto', marginRight:'auto', paddingLeft:'50px', paddingRight:'90px'}}></input> */}
              <br /><br /></Col>

              
           
            <Col sm={4} xsHidden mdHidden lgHidden>
            </Col> 
          </Row>
         
          {/* design for xs */}

        <Row>
         
            <Col xs={11} smHidden mdHidden lgHidden>

            {/* <h4>Image LIST</h4>
            */}
            {/* <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/> */}
            <input type="file" id="file" accept="image/*" ref="fileUploader" onChange={this.onChangeFile.bind(this)} style={{display: "none"}}/>

     {this.state.productimage.map((row, i) =>
        <ul style={{listStyle: "none"}}>
           <li>
          <h5 style={{color:'#19eef1'}}>{row.type}</h5>
         
           {
          this.state.file ? 
          <div>
            <input type="file"  id={this.count++} accept="image/*" ref={"fileUploader"+i} onChange={this.onReloadChangeFile.bind(this, i)} style={{display: "none"}}/>

            <Button onClick={this.handleClick} style={{position:'absolute', zIndex: '3', background:'black'}}>
               <img src={require('../resources/reload.png')} responsive/>
           </Button>
           <ButtonGroup vertical block>
            <Button style={{border:'0px', background:'#f3f2f2'}}>
              <img style={{padding:'50px', paddingBottom:'0px', width: '167px'}} ref="selectImage" src={this.state.file} responsive/>
            </Button>
           </ButtonGroup>
           </div>
            :
            <div>
              <ButtonGroup vertical block>

                 <Button onClick={this.handleClick} style={{border:'0px', background:'#f3f2f2'}}>
          
                  <img style={{padding:'19px', paddingBottom:'0px'}} src={require('../resources/primary.png')} responsive/>
                <h6 style={{paddingBottom:'10px', paddingTop:'20px', color:'#ada5a3'}}>Press to add a photo <br></br>of document</h6>
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
         {/* {this.state.selectImage.length >=this.count && this.count !== 0? 
           */}
   {this.state.selectImage.length == this.state.productimage.length? 
        
          <Row xsHidden>
            <Col sm={4} xsHidden></Col>
            <Col sm={4} xsHidden>
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
              <ButtonGroup vertical block>
               {/* <Button onClick={this.onImageList}><Link to='/UploadImages'>Upload File</Link></Button> */}
               <Button onClick={this.onImageList.bind(this)}>Upload File</Button>
          
               </ButtonGroup>
              </Col>
            </Row>
            
            </Col>
            <Col sm={4} xsHidden></Col>
          </Row>
         : null}
          {/* button xs */}
{this.state.selectImage.length == this.state.productimage.length? 
          <Row>
            
            <Col xs={1} smHidden mdHidden lgHidden></Col>
            <Col xs={10} smHidden mdHidden lgHidden>
            <ButtonGroup vertical block>
               {/* <Button><Link to='/UploadImages'>Upload File</Link></Button> */}
               <Button onClick={this.onImageList.bind(this)}>Upload File</Button>
          
               </ButtonGroup>
            </Col>
            <Col xs={1} smHidden mdHidden lgHidden></Col>
          </Row>
          :null
          }
          <br /><br />
        </Grid>
</div>

        );
    }
}

function mapStateToProps(state){
  return({
        User: state.LoginReducer.User,
        Pass: state.LoginReducer.Pass,
        AccessToken: state.LoginReducer.AccessToken,
        ImageListArray: state.imageListReducer.ImageListArray,
        selectImage: state.imageListReducer.selectImage
  })
}

function mapDispatchToProps(dispatch){
  // alert(dispatch);
  return({
      dispatch,
      imageListArrays: (imagelistarrays)=>{
          // alert("mapDispatchToProps "+imagelistarrays)
          dispatch({
              type:'IMAGELISTARRAYS',
              payload:imagelistarrays
          })
      },
      imageList: (selectimagevalues)=>{
        //  alert("mapDispatchToProps  "+selectimagevalues)
        dispatch({
            type:'SELECTIMAGE',
            payload:selectimagevalues
        })
    }
      
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageList);