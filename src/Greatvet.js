import React, { Component } from 'react';
import './great.css';
import NavBar from "./components/navbar"
import Body from "./components/body"
import Blog from "./components/blog"
import App from "./App"



import { Redirect, Route, Switch } from "react-router-dom";
class Greatvet extends Component {
  state = {  
  }
  render() { 
    
    return ( 
      <React.Fragment>
        <NavBar/>
        <Switch>
        <Route path="/body" component={Body} />
        <Route path="/blog" component={Blog} />
        <Route path="/login" component={App} />
        <Redirect from="/" to="/Body"/>
        </Switch>

        
      
      

         
       </React.Fragment>  
     );
  }
}
 
export default Greatvet ;