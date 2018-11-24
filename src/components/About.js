import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
  render() {
    return (
  
         <div>
            <h1>Hello About {this.props.User} &nbsp; {this.props.Pass} </h1> 
            <Link to='/'>Go to Home</Link>
         </div>
    );
  }
}

function mapStateToProps(state){
  return({
     User: state.rootReducer.User,
     Pass: state.rootReducer.Pass
  })
 }
 function mapDispatchToProps(dispatch){
   return({
 
   })
 }

export default connect(mapStateToProps,mapDispatchToProps)(About);
