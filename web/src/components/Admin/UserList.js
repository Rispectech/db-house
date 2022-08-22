import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import userImg from "../../assets/images/user1.jpg";

window.jQuery = window.$ = $;
require("jquery-nice-select");
function UserList() {
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
                 <AdSidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <AdNavBar/>
                        </div>
                        <div className="container-fluid ">
                            <div className="cardFull p-4">
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>User List</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="User Search.."/>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef3} className="wide">
                                                <option value="Featured">Search By</option>
                                                <option value="10">Name</option>
                                                <option value="25">Email</option>    
                                                <option value="50">Status</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef2} className="wide">
                                                <option value="Featured">Sort</option>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>
                            <div className="prdctListTble common-table">
                                <Table className="table">
                                    <thead>
                                        <tr>
                                        <th><input className="form-check-input" type="checkbox"/></th>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>User Name</th>                                       
                                        <th>Email</th>
                                        <th >Phone</th>
                                        <th >Password</th>
                                        <th>Status</th>
                                        <th align="center" width="150">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="whitebgRow">
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon btnDark">In Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                       <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                                            <td>4827821</td>
                                            <td className="usrImgIcon">
                                            <span><img src={userImg} alt="" height="50" className="rounded-circle" /></span>
                                            </td>
                                            <td>
                                                <div className="prodctTitle">
                                                    <div className="d-flex">
                                                    <div><Link to="/admin/merchantprofile">Pankaj</Link></div>
                                                    </div>                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    joshi1309@gmail.com
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="pdrctCat">
                                                 9896098960
                                                </div>
                                            </td>
                                            <td >
                                                <div className="">
                                                  Duple@323
                                                </div>
                                            </td>
                                            <td className="status">
                                                <Link to="/" className="btnCommon">Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/useredit">
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
                            <div className="pgntnOuter text-center pt-3 ">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">
                                            <span aria-hidden="true">‹</span>
                                        <span className="visually-hidden">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">3</a>
                                    </li>
                                     <li className="page-item active">
                                        <span className="page-link">4<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">…</span>
                                        <span className="visually-hidden">More</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">22</a></li>
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">›</span><span className="visually-hidden">Next</span></a>
                                    </li>
                                </ul>
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
export default UserList;  
