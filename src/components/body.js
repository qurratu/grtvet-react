import React, { Component } from 'react';
import img2 from './../Common/images/forvets-doctor.png'
import img3 from './../Common/images/forvets-why-vets-love-us-1.jpg'
import img4 from './../Common/images/forvets-why-vets-love-us-2.jpg'
import img5 from './../Common/images/forvets-why-vets-love-us-3.jpg'
import img6 from './../Common/images/forvets-service-1.jpg'
import img7 from './../Common/images/forvets-service-2.jpg'
import img8 from './../Common/images/forvets-service-3.jpg'
import img9 from './../Common/images/forvets-service-4.jpg'
import img10 from './../Common/images/forvets-service-5.jpg'
import img11 from './../Common/images/forvets-service-6.jpg'

class  Body extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="container-fluid school">
        <div className="row">
             <div className="col-md-6 ">
                
                   <img src={img2}  alt="demo"className="img-fluid image"/>
             </div>
             
            <div className="col-md-6 col">
                      <div className=" grow">
                        <h1> Grow You Veterinarian<br></br>Practice With a Platform<br></br> Dedicated to You</h1>
                        <p className=" built">  Built exclusively to help matching highly qualified<br></br>pet patients to great vets,we help you promote<br></br>to,engage, and acquire new pet patient.</p>
                        <button class="btn"> Get Verified</button>
                      </div>
                    </div>
          </div>
         </div>
                   <div className="footer">Home<small className="content"> / For Veterinarians</small></div>

                   <div className="container">
                       <h2 className="votes">Why Votes Love Us</h2>
                     
                        <p className="greate ">We build greatvet side by side vaterinarians,veterinarian clincs and animal hospitals to empower<br></br> them  with a first flateform genuinely showcases who they are and their quality</p>
                   </div>
           <div className="container">
              <div className="row">
                  <div className="col-md-4">
                       <img src={img3} width="300px" alt="top" className="image-fluid trend"/>
                       <h6 className="promote"> Promote Your Practice and Veterinarians</h6>
                       <p className="makes"> We feature what makes your practice great and<br></br> help you acquire high quality pet parents and<br></br>their pets</p>

                    </div>
                    <div className="col-md-4">
                         <img src={img4} width="340px"  height="190px"alt="top" className="image-fluid trend1"/>
                          <h6 className="badget"> Build Creatbility</h6>
                           <p className="badget1"> Get Greatvet badges and be a part of our Top<br></br> Vets lists thatcan be marketing and creaibility<br></br> differetiator to enhance and build your<br></br> reputation</p>
                    </div>
                    <div className="col-md-4">
                          <img src={img5}  width="250px" height="190px" alt="top" className="image-fluid trend2"/>
                          <h6 className="patient"> Find New Patients</h6>
                           <p className="badget2">Our Platform matching you to searching per <br></br>parents looking for a new vaterinarian Grow your <br></br> practice with GreatVet doing the heavy lifting </p>
                    </div>
               </div>  
        </div>
      <div className="vet">
          <h3 className="difference"> The GreatVet Difference</h3>
          <p className="honest"> Greatvat was built side by  side with practices and veterinarians to<br></br> empower their digital presence and built a transparants and honest<br></br> plateform to promote what them special</p>
                  
      </div>
          <div className="container">
                       <h2 className="vote">Why Votes Love Us</h2>
                     
                        <p className="greates">We build greatvet side by side vaterinarians,veterinarian clincs and animal hospitals to empower<br></br> them  with a first flateform genuinely showcases who they are and their quality</p>
            </div>
        <div className="container gallery">
          <div className="row">
            <div className="col-md-6">
            <img src={img6} width="500px" height="270px"  alt="top" className="image-fluid trend3"/>
              <h6 className="manage"> Reputation ManagementMonotor</h6>
              <p className="third"> Manage third party review scores in one dashboard from review source<br></br> like google.facebook,yelp and first party review on GreatVet</p>
            </div>
            <div className="col-md-6">
            <img src={img7} width="500px" height="270px" alt="top" className="image-fluid trend4"/>
            <h6 className="portal"> Lead Management Portal</h6>
            <p className="sets"> Manage new patient request and scheduling in a CRM that drives<br></br> internal processes and sets you up for success</p>
            </div>
          </div>
        </div>
        <div className="container wrapper">
          <div className="row">
            <div className="col-md-6">
            <img src={img8} width="500px" height="270px"  alt="top" className="image-fluid trend3"/>
              <h6 className="manage">Online Scheduling Manage</h6>
              <p className="third">Manage Your availability and bookung with an online scheduling<br></br> plateform that can represents your open appointment slotes  immediate<br></br> booking and manage all scheduled appointment</p>
            </div>
            <div className="col-md-6">
            <img src={img9} width="500px" height="270px" alt="top" className="image-fluid trend4"/>
            <h6 className="portal">Dashboards and Reports</h6>
            <p className="sets"> Manage your Greatvat engagement metrics to track appointment.<br></br> profile view and view</p>
            </div>
          </div>
        </div>
        <div className="container wrapper">
          <div className="row">
            <div className="col-md-6">
            <img src={img10} width="500px" height="270px"  alt="top" className="image-fluid trend3"/>
              <h6 className="manage">360 Management</h6>
              <p className="third">Manage Your availability and bookung with an online scheduling<br></br> plateform that can represents your open appointment slotes  immediate<br></br> booking and manage all scheduled appointment</p>
            </div>
            <div className="col-md-6">
            <img src={img11} width="500px" height="270px" alt="top" className="image-fluid trend4"/>
            <h6 className="portal">marketing Service</h6>
            <p className="sets"> Leverage our digital team to build websites.manage SEO and PPC <br></br> campaigins and help with eamilengagement</p>
            </div>
          </div>
        </div>
        </React.Fragment>

         );
        }
}
 
export default  Body;