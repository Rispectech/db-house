import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import product1 from "../../assets/images/productImg1.jpg";
import product2 from "../../assets/images/productImg2.jpg";
import product3 from "../../assets/images/productImg3.jpg";
import product4 from "../../assets/images/productImg4.jpg";
import product5 from "../../assets/images/productImg5.jpg";
import callIcon from "../../assets/images/icons/callIcon.svg";

window.jQuery = window.$ = $;
require("jquery-nice-select");
function ViewOrder() {
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
                                <div className="row align-items-center justify-content-center  hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>View Order</h4>
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>

                                <div className="">
        {/* <div className="card-body">
            <div className="invoice">
                <div className="d-md-flex justify-content-between align-items-center mb-4">
                    <div>Invoice No : #000756</div>
                    <div>Date: 	3/29/2021</div>
                </div>
               <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <strong>Bill From</strong>
                        </p>
                        <p>81 Fulton Park, <br/>Brazil/Pedro Leopoldo</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-start text-md-end">
                            <strong>Bill to</strong>
                        </p>
                        <p className="text-start text-md-end">81 Fulton Park, <br/>Brazil/Pedro Leopoldo</p>
                    </div>
                </div>
                <div className="table-responsive" tabIndex="1">
                    <table className="table mb-4 mt-4">
                        <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th className="text-end">Quantity</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-end">
                            <td className="text-start">1</td>
                            <td className="text-start">Digital clock</td>
                            <td>1</td>
                            <td>$1.190,90</td>
                            <td>$1.190,90</td>
                        </tr>
                        <tr className="text-end">
                            <td className="text-start">1</td>
                            <td className="text-start">Toy Car</td>
                            <td>1</td>
                            <td>$139.58</td>
                            <td>$139.58</td>
                        </tr>
                        <tr className="text-end">
                            <td className="text-start">2</td>
                            <td className="text-start">Sunglasses</td>
                            <td>1</td>
                            <td>$50,90</td>
                            <td>$101,80</td>
                        </tr>
                        <tr className="text-end">
                            <td className="text-start">3</td>
                            <td className="text-start">Cake</td>
                            <td>1</td>
                            <td>$10,50</td>
                            <td>$10,50</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-end">
                    <p>Sub Total: $1.442,78</p>
                    <p>Shipping: Free</p>
                    <p>Tax(18%) : $259.70</p>
                    <h4 className="fw-bold">Total: $1.702,48</h4>
                </div>
            </div>
        </div> */}

        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="card mb-4">
                    <div className="Bgwhite Shadow radius20 p-4 mx-4">
                        <div className="mb-5 d-flex align-items-center justify-content-between">
                            <span>Order No : <a href="#">#5355619</a></span>
                            <span className="badge bg-success">Completed</span>
                        </div>
                        <div className="row mb-5 g-4">
                            <div className="col-md-3 col-sm-6">
                                <p className="fw-bold">Order Created at</p>
                                16/06/2021 at 04:23 PM
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <p className="fw-bold">Name</p>
                                Sayres Seater
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <p className="fw-bold">Email</p>
                                sayres@sayres.com
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <p className="fw-bold">Contact No</p>
                                767-251-8637
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body d-flex flex-column gap-3">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0">Delivery Address</h5>
                                            <a href="#">Edit</a>
                                        </div>
                                        <div>Name: Pankaj joshi</div>
                                        <div>123 Mahesh Nagar Ambala Cantt </div>
                                        <div>81 Fulton Park, Brazil/Pedro Leopoldo</div>
                                        <div>
                                            <img src={callIcon} alt=""  height="18" />      
                                            <span className="px-2">+91 9896098960</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body d-flex flex-column gap-3">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0">Billing Address</h5>
                                            <a href="#">Edit</a>
                                        </div>
                                        <div>Name: Workplace</div>
                                        <div>Josephin Villa</div>
                                        <div>29543 South Plaza, Canada/Sydney Mines</div>
                                        <div>
                                            <i className="bi bi-telephone me-2"></i> 484-948-8535
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card widget orderListCard">
                    <h5 className="card-header ">Order Items</h5>
                    <div className="card-body">
                        <div className="table-responsive" tabIndex="1">
                            <table className="table table-custom mb-0">
                                <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr >
                                    <td>
                                        <a href="#">
                                        <img src={product1} alt="" className="rounded" height="60"  />     
                                        </a>
                                    </td>
                                    <td>Stone</td>
                                    <td>1</td>
                                    <td>$1.190,90</td>
                                    <td>$1.190,90</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                        <img src={product2} alt="" className="rounded" height="60"  />     
                                        </a>
                                    </td>
                                    <td>Wall Stone</td>
                                    <td>2</td>
                                    <td>$139,58</td>
                                    <td>$279,16</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">
                                        <img src={product3} alt="" className="rounded" height="60" />     
                                        </a>
                                    </td>
                                    <td>Floor Shine Tiles</td>
                                    <td>1</td>
                                    <td>$50,90</td>
                                    <td>$50,90</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                <div className="card mb-4">
                    <div className="card-body">
                        <h6 className="card-title mb-4">Price</h6>
                        <div className="row justify-content-center mb-3">
                            <div className="col-4 text-end">Sub Total :</div>
                            <div className="col-4">$1.520,96</div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-4 text-end">Shipping :</div>
                            <div className="col-4">Free</div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-4 text-end">Tax(18%) :</div>
                            <div className="col-4">$273,77</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4 text-end">
                                <strong>Total :</strong>
                            </div>
                            <div className="col-4">
                                <strong>$1.794,73</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title mb-4">Invoice</h6>
                        <div className="row justify-content-center mb-3">
                            <div className="col-6 text-end">Invoice No :</div>
                            <div className="col-6">
                                <a href="#">#5355619</a>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-6 text-end">Seller GST :</div>
                            <div className="col-6">12HY87072641Z0</div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-6 text-end">Purchase GST :</div>
                            <div className="col-6">22HG9838964Z1</div>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btnCommon ">Download PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
export default ViewOrder;  
