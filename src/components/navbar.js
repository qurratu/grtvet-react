import React, { Component } from 'react';
import logo from './../Common/images/logo.png'
import './../App.css'

import { NavLink } from "react-router-dom";
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            
         
              
            
          
          <nav className="navbar navbar-expand-md  ">
          <img src={logo} width="180px" alt="top" className="image-fluid img"/><small className="text"> Helping Great pets Find Great Vets</small>
          
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-dark"></span>
            
         </button>
         
         
          <div className="collapse navbar-collapse  contact " id="navbarSupportedContent">
           
              
                <NavLink className="nav-item" to="#">Home</NavLink>
              
           
                <NavLink className="nav-item" to="#">About</NavLink>
              
            
                <NavLink className="nav-item" to="/body"> For Veterinarian</NavLink>
              
              
              
                <NavLink className="nav-item" to="/blog">Blog</NavLink>
                
             
                <NavLink className="nav-item" to="login">Log</NavLink>

                
               
          </div>  
        </nav>
         
      
        
     
         );
    }
}
 
export default NavBar;