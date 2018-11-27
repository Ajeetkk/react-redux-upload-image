import React, {Component} from 'react';
import { Carousel, Grid, Row, Col, Button, Thumbnail, Image, ProgressBar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class UploadImages extends Component{
   
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      progress: 0,
      success : false,
    file:null
  
    };


  }

  
  componentDidMount (){
    // alert("componentDidMount "+this.props.selectImage)
    let data = JSON.parse(this.props.selectImage);
// alert("selectImage"+data);
// alert("length"+data.length);
let dataLength = data.length
// this.setState({progress :100 })
  data.map((row, i) => 
    {
        //alert( i+" "+row.type+" "+row.name+" "+row.image );
    
  
    let that = this;
    let typedata = row.type;
    let namedata = row.name;
    let imagedata = row.image;


    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    //  alert("AuthStr::-"+AuthStr);
    axios.post('http://wizzio-dev1.westeurope.cloudapp.azure.com:4500/bin/mvc.do/onboarding/773/document',
    {
      "type": typedata || '',
      "name": namedata || '',
      "content": imagedata || ''
      // "type": "Doc ID - Front",
      // "name": "test.png",
      // "content":""
     } ,
    { headers: { Authorization: AuthStr } }).then(response => {
            // If request is good...
            console.log(response.data);
            //alert(JSON.stringify(response.data));
            // alert(response.data[0].name);
            // alert(response.data[1].type);
            // alert(response.data[2].type);
            let itemArray = JSON.parse(that.props.selectImage)
            let item = {}
            item.name = itemArray[i].name
            item.type = itemArray[i].type
            item.image = itemArray[i].image
            item.uploaded = true
            itemArray[i] = item
            //alert(JSON.stringify(itemArray))
            that.props.imageList(JSON.stringify(itemArray));
             that.setState({progress :100/dataLength })
             that.setState({success : true })
            //  that.refs.successLink.click();
              dataLength--;
          })
          .catch((error) => {
            console.log('error 3 ' + error);
             //alert(error)
            // alert(typedata)
            // alert(namedata)
            // alert(imagedata)
            let itemArray = JSON.parse(that.props.selectImage)
            let item = {}
            item.name = itemArray[i].name
            item.type = itemArray[i].type
            item.image = itemArray[i].image
            item.uploaded = false
            itemArray[i] = item
            //alert(JSON.stringify(itemArray))
            that.props.imageList(JSON.stringify(itemArray));
            that.setState({progress :100/dataLength })
            that.setState({success : false })
              dataLength--;
          });
        })

}

    render(){
      if (this.state.progress==100 && this.state.success) {
            return <Redirect push to="/UploadImagesFailed" />;
          }
     if (this.state.progress==100 && !this.state.success){
        return <Redirect push to="/UploadImagesFailed" />;
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


function mapStateToProps(state){
  return({
       
        selectImage: state.SelectImageReducer.selectImage
  })
}

function mapDispatchToProps(dispatch){
 return({

  imageList: (selectimagevalues)=>{
    //  alert("mapDispatchToProps  "+selectimagevalues)
    dispatch({
        type:'SELECTIMAGE',
        payload:selectimagevalues
    })
}

 });
    }

export default connect(mapStateToProps,mapDispatchToProps)(UploadImages);