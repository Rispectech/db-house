import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
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
function BlogCategoryList() {
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
const [noOfRows, setNoOfRows] = useState(1);
     return (
        <>
        <Style/>
       
         <article id="root" className="mainRoot">
            <div className="wrapper">
                 <div className="sidebar">
                    <Sidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <NavBar/>
                        </div>
                        <div className="container-fluid ">
                            <div className="cardFull p-4">
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>Category List</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Search Category"/>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef3} className="wide">
                                                <option value="Featured">Sort By</option>
                                                <option value="10">Active</option>
                                                <option value="25">In Active</option>    
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef2} className="wide">
                                                <option value="Featured">Type</option>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="addPrdctBtn">
                                            <Link to="/admin/addcategory" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>  
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>
                            <div className="prdctListTble common-table">
                                <Table className="table">
                                    <thead>
                                        <tr>
                                        <th><input className="form-check-input" type="checkbox"/></th>
                                         <th>Image</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th align="center" width="150">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="whitebgRow">
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                           <td>
                                                <div className="prdctImg">  
                                                    <img src={product1} alt="" height="80" />                                              
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                                   30-05-2022
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
                                                                <a href="/admin/editblogcategory">
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
                                           <td>
                                                <div className="prdctImg"> 
                                                <img src={product2} alt="" height="80" />                                               
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                                22-04-2022
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
                                                            <a href="/admin/editblogcategory">
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
                                           <td>
                                                <div className="prdctImg"> 
                                                <img src={product3} alt="" height="80" />                                               
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                                05-06-2022
                                                </div>
                                            </td>
                                            <td className="status">
                                            <Link to="/" className="btnCommon"> Active</Link>
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                            <a href="/admin/editblogcategory">
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
                                           <td>
                                                <div className="prdctImg">  
                                                    <img src={product4} alt="" height="80" />                                              
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                                29-03-2022
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
                                                            <a href="/admin/editblogcategory">
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
                                           <td>
                                                <div className="prdctImg">   
                                                    <img src={product5} alt="" height="80" />                                             
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                               02-03-2022
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
                                                            <a href="/admin/editblogcategory">
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
                                            <td>
                                                <div className="prdctImg"> 
                                                    <img src={product1} alt="" height="80" />                                               
                                                </div>
                                            </td>
                                            <td>
                                                <div className="pdrctCat">
                                                    Stone
                                                </div>
                                            </td>
                                            <td>
                                                <div className="SubCat">
                                               18-06-2022
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
                                                            <a href="/admin/editblogcategory">
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
export default BlogCategoryList;