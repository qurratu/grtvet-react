import React, { Component } from 'react';
import logo from './images/logo.png';


class Footer extends Component {
 render() { 
        return (
                <div className="container-fluid footer-container">
                    <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4 ">
                        <a href="#"><img src={logo} alt="logo" className="footer-img"/></a>
                        <p style={{paddingTop:'15px'}}>Helping Great Pets Find Great Vets</p> 
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3" style={{paddingLeft:'75px'}}>
                        <h4>GreatVet</h4>
                        <a href="#">Login</a>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3" style={{paddingLeft:'50px'}} >
                        <h4>For Vets</h4>
                        <a href="#">Learn More</a><br />
                        <a href="#">Platform Login</a> 
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <h4>Support</h4>
                    </div>
                </div>
                <hr/>
                
                <div className="row">
                        <div className="col-sm col-md col-lg footericons">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <div>
                            <p className="footer-para">Copyright © 2020-2021 GreatVet™ | All Rights Reserved | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
                        </div>
                </div>
        </div>
          ); 
    }
}
 
export default Footer;