import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
import view from "../../assets/images/icons/view-icon.png";
import viewWhite from "../../assets/images/icons/view-white-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function AdminTransactionList() {
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
                                            <h4>Transactions List</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Search Transactions"/>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef3} className="wide">
                                                    <option value="Featured">Transactions</option>
                                                    <option value="10">  All Transactions</option>
                                                    <option value="50">Completed</option>
                                                    <option value="25">Processing</option>    
                                                    <option value="50">Pending</option>
                                                                                                                                                                                     
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef2} className="wide">
                                                <option value="Featured">Sort By</option>
                                                <option value="10">Last 10 Days</option>
                                                <option value="25">Last 20 Days</option>
                                                <option value="50">Last 30 Days</option>
                                                <option value="100">Last 45 Days</option>
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
                                        <th >Transactions ID </th>
                                        <th >Transactions Date</th>
                                        <th>Transactions Status</th>
                                        <th>Payment</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="whitebgRow">
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                            <td className="ordeID"><Link to ="/">4595454</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="green">
                                                Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                           <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                      <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">4595454</Link></td>
                                            
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="blue">
                                                Processing
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                           <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">48795455</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="red">
                                                Pending
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                            <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                       <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">89578951</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="green">
                                                Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                           <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">4595454</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="green">
                                                Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                            <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">87798754984</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="blue">
                                                Processing
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                           <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">79889554</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="green">
                                                Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                            <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                         <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">02458995595</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="green">
                                                Completed
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                           <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">4990055785</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="red">
                                                Pending
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                            <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
                                            <td className="ordeID"><Link to ="/">289678556</Link></td>
                                            <td>
                                                <div className="SubCat">May 05,2022</div>
                                            </td>
                                            <td>
                                                <div className="red">
                                                Pending
                                                </div>
                                            </td>
                                            <td>
                                                <div className="paid">
                                                    Paid
                                                </div>
                                            </td>
                                             <td className="price">
                                            $102.00
                                            </td>
                                            <td className="actions">
                                                <div className="tbl-actn">
                                                    <ul>
                                                        <li className="edit-btn">
                                                            <div className="">
                                                                <a href="/admin/editmerchant">
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
export default AdminTransactionList;