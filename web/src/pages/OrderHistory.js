import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Form, Tab, Tabs } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y } from 'swiper';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function OrderHistory() {
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
  const selectRef4 = useRef();
  useEffect(() => {
$(selectRef4.current).niceSelect();
  }, []);
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
                                <li className="breadcrumb-item active"><a href="/">Order History</a></li>
                            </ol>
                        </nav>
                    </div>
                        </div>
                    </div>                                
                </div>
            </div>
        </article>        
        <article className="wrapper mb-4">
            <div className="container">
                <div className="whiteBg">            
                    <div className="prdctSerchRow py-3 px-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <div className="prdctDtlHdng">
                                    <h3>Order History</h3>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="searchOrdrDiv">
                                    <Form className="formStyle d-flex align-items-center">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Johan"/>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#585858" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <button className="btnCommon btnDark btnSrchOrdr">
                                            Search Orders
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ordrHistyTabs px-3">
                    <Tabs defaultActiveKey="1"  className="mb-3">
                        <Tab eventKey="1" title="All Orders">
                            <div className="tabDataBody">
                                <div className="sortBlkOutr sortOrdrHistry">
                                    <div className="row align-items-center ">
                                        <div className="col-auto">
                                            <div className="row align-items-center py-3 pb-4">
                                                    <div className="col-auto">
                                                        <div className="ordrTitle">Orders Placed in</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="sortByCol">
                                                            <div className="form-group">
                                                                <select ref={selectRef1} className="wide">
                                                                <option value="Featured">Last 30 Days</option>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>                                
                                        </div>                            
                                    </div>                        
                                </div>                    
                                <div className="orderHistryTable">
                                    <Table  bordered>
                                        <thead>
                                            <tr>
                                            <th>Order Id #</th>
                                            <th>Order Date</th>
                                            <th>Order Status</th>
                                            <th>Payment</th>
                                            <th>Shipping</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>#2632</td>
                                            <td>May 05,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>May 08,2022</td> 
                                            <td>$102.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#9865</td>
                                            <td>Mar 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$99.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#5894</td>
                                            <td>Mar 15,2022</td>
                                            <td className="cancled">Cancelled</td>
                                            <td>Cash</td>
                                            <td>May 18,2022</td> 
                                            <td>$85.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2909</td>
                                            <td>Apr 19,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Apr 22,2022</td> 
                                            <td>$109.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#0107</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$120.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2512</td>
                                            <td>May 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$74.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#7490</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$62.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#4549</td>
                                            <td>Mar 05,2022</td>
                                            <td className="cancled">Cancelled </td>
                                            <td className="">Cash</td>
                                            <td>Mar 24,2022</td> 
                                            <td>$112.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="pgntnOuter d-flex flex-row-reverse pb-3">
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
                        </Tab>
                        <Tab eventKey="summary" title="Summary">
                        <div className="tabDataBody">
                                <div className="sortBlkOutr sortOrdrHistry">
                                    <div className="row align-items-center ">
                                        <div className="col-auto">
                                            <div className="row align-items-center py-3 pb-4">
                                                    <div className="col-auto">
                                                        <div className="ordrTitle">Orders Placed in</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="sortByCol">
                                                            <div className="form-group">
                                                                <select ref={selectRef2} className="wide">
                                                                <option value="Featured">Last 30 Days</option>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>                                
                                        </div>                            
                                    </div>                        
                                </div>                    
                                <div className="orderHistryTable">
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                            <th>Order Id #</th>
                                            <th>Order Date</th>
                                            <th>Order Status</th>
                                            <th>Payment</th>
                                            <th>Shipping</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>#2632</td>
                                            <td>May 05,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>May 08,2022</td> 
                                            <td>$102.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#9865</td>
                                            <td>Mar 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$99.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#5894</td>
                                            <td>Mar 15,2022</td>
                                            <td className="cancled">Cancelled</td>
                                            <td>Cash</td>
                                            <td>May 18,2022</td> 
                                            <td>$85.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2909</td>
                                            <td>Apr 19,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Apr 22,2022</td> 
                                            <td>$109.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                             <tr>
                                            <td>#4549</td>
                                            <td>Mar 05,2022</td>
                                            <td className="cancled">Cancelled </td>
                                            <td className="">Cash</td>
                                            <td>Mar 24,2022</td> 
                                            <td>$112.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="pgntnOuter d-flex flex-row-reverse pb-3">
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
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                        <div className="tabDataBody">
                                <div className="sortBlkOutr sortOrdrHistry">
                                    <div className="row align-items-center ">
                                        <div className="col-auto">
                                            <div className="row align-items-center py-3 pb-4">
                                                    <div className="col-auto">
                                                        <div className="ordrTitle">Orders Placed in</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="sortByCol">
                                                            <div className="form-group">
                                                                <select ref={selectRef4} className="wide">
                                                                <option value="Featured">Last 30 Days</option>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>                                
                                        </div>                            
                                    </div>                        
                                </div>                     
                                <div className="orderHistryTable">
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                            <th>Order Id #</th>
                                            <th>Order Date</th>
                                            <th>Order Status</th>
                                            <th>Payment</th>
                                            <th>Shipping</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>#2632</td>
                                            <td>May 05,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>May 08,2022</td> 
                                            <td>$102.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#9865</td>
                                            <td>Mar 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$99.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#5894</td>
                                            <td>Mar 15,2022</td>
                                            <td className="cancled">Cancelled</td>
                                            <td>Cash</td>
                                            <td>May 18,2022</td> 
                                            <td>$85.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2909</td>
                                            <td>Apr 19,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Apr 22,2022</td> 
                                            <td>$109.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#0107</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$120.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2512</td>
                                            <td>May 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$74.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#7490</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$62.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#4549</td>
                                            <td>Mar 05,2022</td>
                                            <td className="cancled">Cancelled </td>
                                            <td className="">Cash</td>
                                            <td>Mar 24,2022</td> 
                                            <td>$112.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="pgntnOuter d-flex flex-row-reverse pb-3">
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
                        </Tab>
                        <Tab eventKey="cancelled" title="Cancelled">
                        <div className="tabDataBody">
                                <div className="sortBlkOutr sortOrdrHistry">
                                    <div className="row align-items-center ">
                                        <div className="col-auto">
                                            <div className="row align-items-center py-3 pb-4">
                                                    <div className="col-auto">
                                                        <div className="ordrTitle">Orders Placed in</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="sortByCol">
                                                            <div className="form-group">
                                                                <select ref={selectRef3} className="wide">
                                                                <option value="Featured">Last 30 Days</option>
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>                                
                                        </div>                            
                                    </div>                        
                                </div>                    
                                <div className="orderHistryTable">
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                            <th>Order Id #</th>
                                            <th>Order Date</th>
                                            <th>Order Status</th>
                                            <th>Payment</th>
                                            <th>Shipping</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>#5894</td>
                                            <td>Mar 15,2022</td>
                                            <td className="cancled">Cancelled</td>
                                            <td>Cash</td>
                                            <td>May 18,2022</td> 
                                            <td>$85.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2909</td>
                                            <td>Apr 19,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Apr 22,2022</td> 
                                            <td>$109.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#0107</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$120.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#2512</td>
                                            <td>May 20,2022</td>
                                            <td className="prcesing">Processing</td>
                                            <td>Cash</td>
                                            <td>Mar 20,2022</td> 
                                            <td>$74.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#7490</td>
                                            <td>Mar 20,2022</td>
                                            <td className="delvrd">Delivered</td>
                                            <td>Paid</td>
                                            <td>Mar 25,2022</td> 
                                            <td>$62.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                            <tr>
                                            <td>#4549</td>
                                            <td>Mar 05,2022</td>
                                            <td className="cancled">Cancelled </td>
                                            <td className="">Cash</td>
                                            <td>Mar 24,2022</td> 
                                            <td>$112.00</td> 
                                            <td><Link to="/">View Details</Link></td>   
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="pgntnOuter d-flex flex-row-reverse pb-3">
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
                        </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
        </article>
        <article className="wrapper py-3 simiLarPrdctBlk prodctDtlSimilr">
        <div className="container">
            <div className="prdctDtlHdng">
                <h3>More Products To explore</h3>
            </div>    
            <div className="newsSliderOuter">
            <div className="similarPrdctSlidr crslCntrls crslCntrls3">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={2} slidesPerView={6} centeredSlides={false} loop={false}>
                <SwiperSlide>
                    <div className="similarItem ">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                    <div className="oferPrice">$65.00</div>
                                    <div className="discntPrice">(31% off)</div>
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="similarItem">
                        <div className="prdctListItem whiteBg">                                       
                            <div className="prdctListMedia">
                                <div className="prdctListImg" style={{backgroundImage: `url("img/productImg4.jpg")`}}>
                                <div className="prdctListOverlay"></div>
                                </div>
                                <div className="prdctHovrCard">
                                <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg"/></span></Link>
                                <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg"/></span></Link>
                                </div>
                                <div  className="prdctHvrBtns">
                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                </div>                                            
                            </div>                                        
                            <div className="prodctListInfoCol text-center">
                                <div className="prdctListTitle">
                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                </div>
                                <div className="rvwRtngPrgrsStars">
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                    <span>(981)</span>
                                </div>
                                <div className="prdctListInfo">
                                    <p>Eeiusmod tempor incididunt</p>
                                </div>
                                <div className="prodctDtlPrice d-flex justify-content-center">
                                    <div className="price">$69.00</div>
                                </div>
                            </div>                                       
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
        </div>
        </article>
    <Footer/>
</section>
  );
}
export default OrderHistory;