import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
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
import gst from "../../assets/images/gst.jpeg";
import pancard from "../../assets/images/panCard.jpg";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend, ResponsiveContainer} from 'recharts';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function MerchantProfile() {
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

    const data = [
        {name: 'Jan', uv: 550, pv: 480, amt: 2400},
        {name: 'Feb', uv:150, pv:420, amt: 1500},
        {name: 'March', uv:240, pv:420, amt: 1500},
        {name: 'April', uv:305, pv:420, amt: 1500},
        {name: 'May', uv:110, pv:420, amt: 1500},
        {name: 'June', uv:340, pv:420, amt: 1500},
        {name: 'July', uv:140, pv:420, amt: 1500},
    ];
    


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
                                            <h4>Profile</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="addPrdctBtn">
                                            <Link to="/admin/editmerchant" className="btnCommon">
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
                                <div className="row justify-content-sm-center">
                                    <div className=" col-sm-4 align-self-center">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <div className="usrPrflBlk text-center">
                                                <div className="usrMedia">
                                                    <img src={userImg} alt="" height="190" className="rounded-circle " />
                                                </div>
                                                <div className="usrTitle mt-3">
                                                    <h4 className="mb-0 mt-2">Pankaj Joshi</h4>
                                                </div>
                                                <div className="text-center mt-3">
                                                  <p className="text-muted mb-2 font-13"><strong>Full Name :</strong>
                                                  <span className="ms-2">Pankaj Joshi</span></p>
                                                    <p className="text-muted mb-2 font-13">
                                                        <strong>Email :</strong>
                                                        <span className="ms-2 ">info@email.com</span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Onboarding Amount</strong>
                                                        <span className="ms-2">20$  </span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Commision Type :</strong>
                                                        <span className="ms-2">% </span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Amount:</strong>
                                                        <span className="ms-2">10$ </span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Commision Value</strong>
                                                        <span className="ms-2">10% </span>
                                                    </p>      
                                                </div>                                             
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-sm-8">
                                        <div className="Bgwhite Shadow radius20 p-4">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="documntData text-center">
                                                        <div className="documtnInfo">
                                                            <div className="docmntMedia">
                                                            <Link to="/static/media/gst.abbf58c8c43c05b42b61.jpeg" target="_blank">
                                                                <img src={gst} height="365"  alt="" className="border rounded" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="status mt-3">
                                                            <div className="aprvCheckBtn">
                                                                <label >
                                                                    <input className="form-check-input" type="checkbox"  checked="true" />
                                                                    <span className="aprvTxt">Approved</span>
                                                                    <span className="dsaprvTxt">Disapproved</span>
                                                                </label>
                                                            </div>
                                                        {/* <Button to="/" className="btnCommon greenBtn">Approved</Button> */}                                                        
                                                        </div>
                                                    </div>                                                
                                                </div>
                                                <div className="col">
                                                    <div className="documntData text-center">
                                                        <div className="documtnInfo">
                                                            <div className="docmntMedia">
                                                            <Link to="/static/media/panCard.e2eef43565c365988e88.jpg" target="_blank">
                                                                <img src={pancard} height="365" alt="" className="border rounded"  />
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        <div className="status mt-3">
                                                            <div className="aprvCheckBtn">
                                                                <label>
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="aprvTxt">Approved</span>
                                                                    <span className="dsaprvTxt">Disapproved</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>                                                
                                                </div>
                                            </div>
                                        </div>
                                       
                                         {/* <div className="col">
                                                <BarChart width={730} height={480} data={data}>
                                            <XAxis dataKey="name" stroke="#767676" />
                                            <YAxis />
                                            <Tooltip />
                                            <CartesianGrid stroke="#ddd" strokeDasharray="4 4" />
                                            <Bar dataKey="uv" fill="#F2672A" barSize={20} />
                                        </BarChart>
                                            </div> */}
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
export default MerchantProfile;