import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, } from "react-router-dom";
// import css from "../../assets/css/dashboard.css" ;
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label } from "react-bootstrap";
import Sidebar from './SideBar';
import Style from './DashboardStyle';
import NavBar from './NavBar';
import $ from "jquery";
import plus from "../../assets/images/plus.svg";
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
import { Rest, RestAdmin, RestMerchant } from "../../rest";
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function ManageInventory() {
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
    const selectRef5 = useRef();
    useEffect(() => {
        $(selectRef5.current).niceSelect();
    }, []);
    const selectRef6 = useRef();
    useEffect(() => {
        $(selectRef6.current).niceSelect();
    }, []);
    const selectRef7 = useRef();
    useEffect(() => {
        $(selectRef7.current).niceSelect();
    }, []);
    const selectRef8 = useRef();
    useEffect(() => {
        $(selectRef8.current).niceSelect();
    }, []);
    const selectRef9 = useRef();
    useEffect(() => {
        $(selectRef9.current).niceSelect();
    }, []);
    const selectRef10 = useRef();
    useEffect(() => {
        $(selectRef10.current).niceSelect();
    }, []);

    const [products, setProducts] = useState();

    const refreshProducts = async () => {
        let products = (await RestMerchant.getAllProducts());
        setProducts(products);
    };

    useEffect(() => {
        refreshProducts();
    }, []);

    return (
        <>
            <Style />
            <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <NavBar />
                            </div>
                            <div className="container-fluid ">
                                <div className="cardFull p-4">
                                    <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>Manage Inventory</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        {/* <div className="col-auto">
                                        <div className="prdctsortCol">
                                            <div className="form-group">
                                                <select ref={selectRef1} className="wide">
                                                <option value="Featured">Sort By</option>
                                                <option value="10">Category</option>
                                                <option value="25">Sub Category</option>    
                                                <option value="50">Product Name</option>
                                                <option value="100">Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
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

                                    </div>
                                    <div className="hrStyle pb-5" ><hr /></div>
                                    {!products && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <PuffLoader />
                                    </div>}

                                    {products?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        No products Found. Please add products.
                                    </div>)}

                                    {products?.length > 0 && (
                                        <div className="row">
                                            {products.map(product => {
                                                return (
                                                    <>
                                                        {product.variants.map(variant => {
                                                            return (
                                                                <div className="col-md-3">
                                                                    <div className="inventryListItem">
                                                                        <div className="prdctListMedia">
                                                                            <div className="inventryListImg" style={{ backgroundImage: `url(${Rest + "/documents/get/" + product.images[0].documentId})` }}>
                                                                                <div className="inventryListOverlay"></div>
                                                                            </div>
                                                                            <div className="inventryHovrCard">
                                                                                <div className="checkInventry">
                                                                                    <input className="form-check-input" type="checkbox" />
                                                                                </div></div>
                                                                        </div>
                                                                        <div className="inventryEditRow p-3">
                                                                            <div className="invtryCol">
                                                                                <div className="invntryPrdTitle invntryListInfoCol ">
                                                                                    <div className="inventryListPrice">
                                                                                        <h4>{product.name}</h4>
                                                                                        <div className="price"><span>Market Price:</span> {variant.price}</div>
                                                                                    </div>
                                                                                    <div className="inventryaddForm">
                                                                                        <form className="formStyle " action="#">
                                                                                            <div className="form-group">
                                                                                                <Form.Label>Selling Price</Form.Label>
                                                                                                <Form.Control type="text" placeholder="Price" value={variant.price} />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <Form.Label>Gst/Tax</Form.Label>
                                                                                                <Form.Control type="text" placeholder="Gst" value="18" />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <Form.Label>Stock</Form.Label>
                                                                                                <div className="form-group selectStock">
                                                                                                    <select ref={selectRef3} className="wide">
                                                                                                        <option value="Featured">Stock</option>
                                                                                                        <option value="available">Available </option>
                                                                                                        <option value="not available">Not Available</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <Form.Label>Quantity</Form.Label>
                                                                                                <div className="form-group selectStock">
                                                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    )}
                                    {/* <div className="row">
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/productImg2.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef3} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg1.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef4} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg2.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef5} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg4.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef6} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/productImg5.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef7} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg4.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef8} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg3.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef9} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inventryListItem">                                       
                                            <div className="prdctListMedia">
                                                <div className="inventryListImg" style={{backgroundImage: `url("/img/catListImg1.jpg")`}}>
                                                <div className="inventryListOverlay"></div>
                                                </div>
                                                <div className="inventryHovrCard">
                                                  <div className="checkInventry">
                                                <input className="form-check-input" type="checkbox"/>
                                                </div></div>
                                            </div>
                                            <div className="inventryEditRow p-3">
                                                <div className="invtryCol">                                                    
                                                    <div className="invntryPrdTitle invntryListInfoCol ">
                                                        <div className="inventryListPrice">
                                                        <h4>G654 Pangdang Granite Pedestal.</h4>
                                                        <div className="price"><span>Market Price:</span> 30.45$</div>
                                                        </div>
                                                        <div className="inventryaddForm">
                                                            <form className="formStyle " action="#"> 
                                                                <div className="form-group">
                                                                <Form.Label>Selling Price</Form.Label>                                                            
                                                                <Form.Control type="text" placeholder="Price" />
                                                                </div>
                                                                <div className="form-group">
                                                                <Form.Label>Gst/Tax</Form.Label> 
                                                                <Form.Control type="text" placeholder="Gst" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Stoke</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                        <select ref={selectRef10} className="wide">
                                                                        <option value="Featured">Stock</option>
                                                                        <option value="available">Available </option>
                                                                        <option value="not available">Not Available</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <Form.Label>Quantity</Form.Label>
                                                                    <div className="form-group selectStock">
                                                                    <Form.Control type="text" placeholder="Quantity" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div> */}
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
export default ManageInventory;  
