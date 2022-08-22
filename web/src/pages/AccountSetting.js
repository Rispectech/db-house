import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, NavLink,} from "react-router-dom";
import { Button, Modal, Dropdown, Offcanvas, Accordion } from "react-bootstrap";
function AccountSetting() {
  return (
    <section className="wrapper greyBg3 dashboardBlk ">
      <Header/>
      <article className="categoryInrBlk hdrBrNone wrapper">
            <div className=" py-2 ">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-auto">
                            <div className="breadcrumbsCol py-20">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active"><a href="/">Account Settings</a></li>
                                </ol>
                            </nav>
                        </div>
                            </div>
                        </div>
                                
                    </div>
            </div>
        </article>
        
        <article className="wrapper ">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 pb-4">
                    <div className="sdbrWdgt ">
                        <div className="filterSideBarWgt whtBg">
                            <div className="filtrAcordion drpDownAcountRow">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><span><img src="img/userIcon.svg"/></span> Account Settings</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="acoutSidebar mb-2"> 
                                                    <ul>
                                                        <li><Link to="accountsetting"><i className="fa fa-user"></i> Profile Information</Link></li>
                                                        <li><Link to="/"><i className="fa fa-address-book-o"></i> Manage Addresses</Link></li>
                                                        <li><Link to="/"><i className="fa fa-id-card-o"></i> Pan Card Information</Link></li>
                                                    </ul>
                                            </div>                                        
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item  eventKey="0">
                                        <Accordion.Header><span><img src="img/pymntIcon.svg"/></span> Payments</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="acoutSidebar mb-2"> 
                                                <ul>
                                                    <li>
                                                        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7f7f7f" className="bi bi-gift" viewBox="0 0 16 16">
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
</svg> &nbsp; Gift Cards</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7f7f7f" className="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg> &nbsp;  Saved UPI</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/"><i className="fa fa-credit-card"></i> Saved Cards</Link>
                                                    </li>
                                                </ul>                                                   
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item  eventKey="0">
                                        <Accordion.Header><span><img src="img/stuffIcon.svg"/></span> My Stuff</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="acoutSidebar mb-2"> 
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-id-card-o"></i> My Coupons</Link></li>
                                                    <li><Link to="/"><i className="fa fa-star-o"></i> My Reviews & Ratings </Link></li>
                                                    <li><Link to="/"><i className="fa fa-bell-o"></i> All Notifications</Link></li>
                                                    <li><Link to="wishlist"><i className="fa fa-heart-o"></i> Wish List</Link></li>
                                                </ul>                                                   
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item  eventKey="0" className="sideLogOut">
                                        <Link to="/">
                                            <span><img src="img/logoutIcon.svg"/></span> Logout
                                        </Link>
                                    </Accordion.Item>                                      
                                </Accordion>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-md-9 pb-4">
                    <div className="dashboard--main">
                        <div className="dashboard--top py-2">
                            <h4 >Personal Information</h4>
                        </div> 
                        <div className="accountSetingForm">
                            <form className="formStyle">
                            <div className="row g-3">
                                <div className="col-4">
                                    <div className="form-group">
                                        <span><img src="img/userAcntIcn.svg"/></span>
                                        <input type="text" className="form-control" placeholder="First name*"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <span><img src="img/userAcntIcn.svg"/></span>
                                        <input type="text" className="form-control" placeholder="Last name*"/>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                            <hr/>
                            </div> 
                            <div className="row g-3">
                                <div className="col-12">
                                    <label>Your Gender</label>
                                </div>
                                <div className="">
                                        <div className="col d-flex">
                                            <div className="form-check ">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Male
                                                </label>
                                            </div>
                                            <div className="form-check px-5" >
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="py-2">
                            <hr/>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="firstNameFld" className="form-labelLrge">Email Address</label>
                                </div>
                                <div className="col-5">
                                    <div className="form-group">
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5B5B5B" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Johan"/>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                            <hr/>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <label htmlFor="firstNameFld" className="form-labelLrge">Phone Number </label>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <span>
                                            <img src="img/callIcon.svg"/>
                                        </span>
                                        <input type="text" className="form-control" placeholder="123 456 7890"/>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                            <hr/>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="firstNameFld" className="form-labelLrge">Password</label>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <span>
                                            <img src="img/lockIcon.svg"/>
                                        </span>
                                        <input type="password" className="form-control" placeholder="Current Password"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <span>
                                            <img src="img/lockIcon.svg"/>
                                        </span>
                                        <input type="Password" className="form-control" placeholder="New Password"/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <span>
                                            <img src="img/lockIcon.svg"/>
                                        </span>
                                        <input type="Password" className="form-control" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                            <hr/>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <button className="btnCommon">Update and Save</button>
                                </div>
                            </div>
                            </form>
                        </div>          			
                    </div>
                </div>
            </div>
        </div>
      </article>     
  
     
      <Footer/>
    </section>
  );
}
export default AccountSetting;