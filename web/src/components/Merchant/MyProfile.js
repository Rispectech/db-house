import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import Sidebar from './SideBar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './DashboardStyle';
import userImg from "../../assets/images/joshi.jpg";
import view from "../../assets/images/icons/view-icon.png";
import viewWhite from "../../assets/images/icons/view-white-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import product1 from "../../assets/images/productImg1.jpg";
import product2 from "../../assets/images/productImg2.jpg";
import product3 from "../../assets/images/productImg3.jpg";
import product4 from "../../assets/images/productImg4.jpg";
import product5 from "../../assets/images/productImg5.jpg";

window.jQuery = window.$ = $;
require("jquery-nice-select");
function MyProfile() {
    const selectRef1 = useRef();
    useEffect(() => {
  $(selectRef1.current).niceSelect();
    }, []);
    const selectRef2 = useRef();
    useEffect(() => {
  $(selectRef2.current).niceSelect();
    }, []);
    const selectRef3 = useRef();
    useEffect(() => {
  $(selectRef3.current).niceSelect();
    }, []);
    
     return (
        <>
        <Style/>
         <article id="root">
            <div className="wrapper">
                 <div className="sidebar">
                    <Sidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <NavBar/>
                        </div>
                        <div className="container-fluid">
                            <div className="cardFull p-4">
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>My Profile</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="addPrdctBtn">
                                            <Link to="/merchant/editprofile" className="btnCommon">
                                                <span className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                    </svg>
                                                </span> Edit Profile
                                                
                                            </Link>  
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <div className="usrPrflBlk text-center">
                                                <div className="usrMedia">
                                                    <img src={userImg} alt="" height="190" className="rounded-circle " />
                                                </div>
                                                <div className="usrTitle mt-3">
                                                    <h4 className="mb-0 mt-2">Pankaj Joshi</h4>
                                                    <p>Founder</p>
                                                </div>
                                                <div className="usrInfo text-start mt-3">
                                                    <h5>ABOUT ME :</h5>
                                                    <p>Hi I'm Pankaj Joshi has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                                </div>
                                                <div className="text-start mt-3">
                                                  <p className="text-muted mb-2 font-13"><strong>Full Name :</strong>
                                                  <span className="ms-2">Pankaj Joshi</span></p>
                                                  <p className="text-muted mb-2 font-13">
                                                    <strong>Mobile :</strong>
                                                    <span className="ms-2">+91 98960 98960</span></p>
                                                    <p className="text-muted mb-2 font-13">
                                                        <strong>Email :</strong>
                                                        <span className="ms-2 ">info@email.com</span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Address :</strong>
                                                        <span className="ms-2">123 Near Rama Petrol Pumb  </span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Location :</strong>
                                                        <span className="ms-2">Ambala Cantt, Haryana India </span>
                                                    </p>
                                                </div>
                                                {/* <div className="usrSocial">
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6169d0" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                        </svg>                                                    
                                                    </Link>
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fa5c7c" className="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                                        </svg>                                                    
                                                    </Link>
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6169d0" className="bi bi-instagram" viewBox="0 0 16 16">
                                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                                        </svg>                                               
                                                    </Link>
                                                    <Link to="/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#39afd1" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                        </svg>                                                    
                                                    </Link>

                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <h4>About Me</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                                It was popularised in the 1960s with the release..   </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk mt-5">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>Top Rated Product</h4>
                                        </div>
                                    </div>
                                    <div className="hrStyle pb-5" ><hr/></div>                                   
                                </div> 
                                <div className="prdctListTble common-table table-responsive">
                                    <Table className="table">
                                        <thead>
                                            <tr>
                                            <th><input className="form-check-input" type="checkbox"/></th>
                                            <th >ID</th>
                                            <th >Product Name</th>
                                            <th>Image</th>
                                            <th>Category</th>
                                            <th>Sub Category</th>
                                            <th>Variant</th>
                                            <th>Status</th>
                                            <th align="center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>4827821552</td>
                                                
                                                <td>
                                                    <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg">  
                                                        <img src={product1} alt="" width="80" height="80" />                                              
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                                02
                                                </td>
                                                <td className="status">
                                                    <Link to="/" className="btnCommon">Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                    <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                        <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                    <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>4827821552</td>                                            
                                                <td>
                                                    <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg"> 
                                                    <img src={product2} alt="" width="80" height="80" />                                               
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                            04
                                                </td>
                                                <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                        
                                                                            <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>482715</td>
                                                
                                                <td>
                                                    <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg"> 
                                                    <img src={product3} alt=""width="80" height="80" />                                               
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                                07
                                                </td>
                                                <td className="status">
                                                <Link to="/" className="btnCommon"> Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                    <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>4827821552</td>
                                                
                                                <td>
                                                    <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg">  
                                                        <img src={product4} alt="" width="80" height="80" />                                              
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                                14
                                                </td>
                                                <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                        
                                                                            <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>4827821552</td>
                                                
                                                <td>
                                                    <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg">   
                                                        <img src={product5} alt=""width="80" height="80" />                                             
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                                18
                                                </td>
                                                <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                        
                                                                            <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="whitebgRow">
                                                <td>
                                                    <input className="form-check-input" type="checkbox"/>
                                                </td>
                                                <td>4827821552</td>
                                                
                                                <td>
                                                <div className="prodctTitle"><Link to="/">Granite Pedestal...</Link></div>
                                                </td>
                                                <td>
                                                    <div className="prdctImg"> 
                                                        <img src={product1} alt="" width="80" height="80"/>                                               
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="pdrctCat">
                                                        Stone
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="SubCat">
                                                        Stone White
                                                    </div>
                                                </td>
                                                <td className="price">
                                            32
                                                </td>
                                                <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                                </td>
                                                <td className="actions">
                                                    <div className="tbl-actn">
                                                        <ul>
                                                            <li className="view-btn">
                                                                <div className="">
                                                                <a href="/merchant/viewproduct">
                                                                    <img src={view} alt="" height="18" />
                                                                        <span><img src={viewWhite} alt="" height="18" /></span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li className="edit-btn">
                                                                <div className="">
                                                                <a href="/merchant/editproduct">
                                                                        <img src={editIcon} alt="" height="18" />
                                                                        <span><img src={editWhite} alt="" height="18" /></span>                                                                 
                                                                    </a>                                                                
                                                                </div>
                                                            </li>
                                                            <li className="delete-btn">
                                                                <div className="">
                                                                    <a href="/">
                                                                        <img src={deleteIcon} alt="" height="18" />                                                                    
                                                                        <span>
                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                        </span>                                                                     
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
            </div>
         </article>
         </>
  );
}
export default MyProfile;  
