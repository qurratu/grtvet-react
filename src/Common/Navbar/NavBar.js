import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Link, NavLink} from "react-router-dom";
import logo from '../images/logo.png';
import './NavBar.css';



class NavBar extends Component {
    state={
        clicked:false
    }

handleClick=() =>{
    this.setState({clicked:!this.state.clicked})
}
    render() { 
        return ( 
            <nav className="NavbarItems">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="">
                    <img src={logo} alt="Logo" className="nav-logo"/>
                  </Link>
                  <p className="navbar-text">Helping Great Pets Find Great Vets</p>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active':'navmenu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                              <li key={index}>
                                <Link clNavLinkssNNavLinkme={item.cNNavLinkme} to='Greatvet'>{item.title}</Link>
                              </li>
                             )
                    })}
                     
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;