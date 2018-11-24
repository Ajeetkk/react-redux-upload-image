import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {changeState} from '../store/actions/action';
class Home extends Component {
  

  constructor(props) {
		super(props);
    this.state = {      
      User:'',
      Pass:''
    };
    
    }
  _changeState(){
    this.props.changeStateToReducerOne(this.state.User);
    this.setState({
      User:this.state.User,
      Pass:this.state.Pass
     
    })
  }
 
  _changeUserInput(event){
    this.setState({
      User: event.target.value
    })
  }
  _changePassInput(event){
    this.setState({
        Pass: event.target.value
    })
  }

  render() {
    return (
  
         <div>
            <h1>Hello Home {this.props.User} &nbsp; {this.props.Pass}</h1>


                <Button onClick={this._changeState.bind(this)}>Change State</Button>
                <input type='text' value={this.state.User} onChange={this._changeUserInput.bind(this)}></input>
                <input type='text' value={this.state.Pass} onChange={this._changePassInput.bind(this)}></input>
               
                <Link to='/About'>Go to About</Link>
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
      changeStateToReducerOne: (updatedUserName)=>{
          dispatch(changeState(updatedUserName))
      }
  })

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
