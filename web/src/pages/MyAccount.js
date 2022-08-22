import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, NavLink,} from "react-router-dom";
import { Button, Modal, Dropdown, Offcanvas, Accordion } from "react-bootstrap";
function MyAccount() {
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
                                    <li className="breadcrumb-item active"><a href="/">Contact Us</a></li>
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
                <div className="col-sm-3">
                    <div className="sdbrWdgt">
                        <div className="filterSideBarWgt whtBg">
                            <div className="profileSidebar text-center">
                                <div className="myprofile">                                
                                    <div className="row g-4">
                                        <div className="col-12">
                                        <div className="profileChangeCol">
                                            <div className="row d-sm-flex align-items-center justify-content-center">
                                            <div className="col">
                                                <div className="prflChaneGroup">
                                                
                                                <div className="prflChangeBtn">
                                                    <input type="file" />
                                                    <span style={{backgroundImage: `url("img/userImg1.png")`}}></span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="pflEml">
                                                <p>Pankaj Joshi</p>
                                                <p> <Link to="mailto:jenny.wilson@gmail.com">jenny.wilson@gmail.com</Link></p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>                   
                                    <div className="myprofile--detail pt-3"> 
                                        <ul className="d-flex">
                                            <li>
                                                <Link to="/accountsetting" className="btnCommon btnDark "  data-toggle="tooltip" title="" data-original-title="Edit Profile">
                                                    <i className="fa fa-pencil-square-o"></i> Edit Profile</Link>
                                            </li>
                                            <li>
                                                <Link className="btnCommon" to="/" data-toggle="tooltip" title="" data-original-title="Logout">
                                                    <i className="fa fa-sign-out"></i> Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>   
                            <div className="filtrAcordion drpDownAcountRow pt-3">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><span><img src="img/userIcon.svg"/></span> Account Settings</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="acoutSidebar mb-2"> 
                                                    <ul>
                                                        <li><Link to="/accountsetting"><i className="fa fa-user"></i> Profile Information</Link></li>
                                                        <li><Link to="/accountsetting"><i className="fa fa-address-book-o"></i> Manage Addresses</Link></li>
                                                        <li><Link to="/"><i className="fa fa-id-card-o"></i> Pan Card Information</Link></li>
                                                        {/* <li><Link to="/"> <i className="fa fa-user"></i> My Account</Link></li>
                                                        <li><Link to="/"><i className="fa fa-pencil-square"></i> Edit Account</Link></li>
                                                        <li><Link to="/"><i className="fa fa-key"></i> Change Password</Link></li>
                                                        <li><Link to="/"><i className="fa fa-heart"></i> Wish List</Link></li>
                                                        <li><Link to="/"><i className="fa fa-refresh"></i> Compair</Link></li>
                                                        <li><Link to="/"><i className="fa fa-envelope"></i> Newsletter</Link></li> */}
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
                                                    <li><Link to="/wishlist"><i className="fa fa-heart-o"></i> Wish List</Link></li>
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
                <div className="col-md-9">
                    <div className="dashboard--main">
                        <div className="dashboard--top py-2">
                            <h3 >My Dashboard</h3>
                            <div className="row pt-3">
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/orderhistory" className="boxicon--default boxicon--round">
                                        <span className="icon_cart"> <i className="fa fa-shopping-cart"></i> </span>
                                        <h5><b>1</b> <br/>Total order</h5>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/wishlist" className="boxicon--default boxicon--round" ><div className="icon-box">
                                        <span className="icon_cart"> <i className="fa fa-heart"></i> </span>
                                        <h5><b>1</b><br/>Total Wishlist </h5>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/transactions" className="boxicon--default boxicon--round" >
                                        <span className="icon_cart"> <i className="fa fa-money"></i></span>
                                        <h5> <b>0</b><br/>Total Transactions</h5>
                                    </Link>
                                </div>
                              
                            </div>
                            
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/changepassword" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-key"></i></span>
                                        <h4>Change Password</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/compair" className="boxicon--default">
                                        <span className="icon_cart">  <i className="fa fa-refresh"></i></span>
                                        <h4>Compair</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/wishlist" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-heart"></i></span>
                                        <h4>Wish List (%s)</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/orderhistory" className="boxicon--default">
                                        <span className="icon_cart">  <i className="fa fa-undo"></i></span>
                                        <h4>Order History</h4></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-shield"></i></span>
                                        <h4>Reward Points</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-retweet"></i></span>
                                        <h4>Returns</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/transactions" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-money"></i></span>
                                        <h4>Transactions</h4>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <Link to="/" className="boxicon--default" >
                                        <span className="icon_cart">  <i className="fa fa-envelope"></i></span>
                                        <h4>Newsletter</h4>
                                    </Link>
                                </div>
                            </div>
                            
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
export default MyAccount;