import React, {Component} from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import ImageList from './components/ImageList';
import UploadImages from './components/UploadImages';
import Success from './components/Success';
import history from './History'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UploadImagesFailed from './components/UploadImagesFailed';


class Routers extends Component{
    render(){
        return(
            <Router history={history}>
               <Switch>
                    <Route exact path="/" component={Login}> </Route>
                    <Route exact path="/ImageList" component={ImageList}> </Route>
                    <Route exact path="/UploadImages" component={UploadImages}> </Route>
                    <Route exact path="/UploadImagesFailed" component={UploadImagesFailed}> </Route>
                   
                    <Route exact path="/Success" component={Success}> </Route>
                    <Route exact path="/Home" component={Home}> </Route>
                    <Route exact path="/About" component={About}> </Route>
                </Switch>
            </Router>
        )
    }
}
export default Routers;