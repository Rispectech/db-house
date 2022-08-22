import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button, Modal, Dropdown, Offcanvas, Accordion ,Form } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import 'rc-slider/assets/index.css';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Checkout() {
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
    <section className="wrapper">
    <Header/>
    <article className="wrapper greyDarkBg checkOutBlk py-20">
        <div className="container">
            <div className="checkOutOuterDiv">
                <div className="row d-flex justify-content-between g-5 py-3">
                    <div className="col-md">
                        <div className="checkoutMainBlk">
                            <div className="whiteBg py-3 px-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col">
                                        <div className="checkOutLoginBts">
                                            <Link to="/" className="btnCommon btnDark">Register Account</Link>
                                            <Link to="/" className="btnCommon">Login</Link>
                                        </div>
                                    </div>
                                    <div className="col-auto ">
                                        <div className="prflUser d-flex align-items-center">
                                            <div className="prflUsrTitle">
                                                <p>Sophia</p>
                                            </div>
                                            <div className="prflUsrImg">
                                                <img src="img/userImgIcon.png"/>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="whiteBg phoneNumbrBlk my-4 py-3 px-3">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col">
                                        <div className="callTxt">
                                        +123-456-7890
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="callChange">
                                         <Link to="/">Change</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bilingBlk ">
                                <div className="prdctDtlHdng pb-4">
                                    <h3>Billing Details</h3>
                                </div>
                                <div className="conttForm conttFormWidth">
                                    <Form className="formStyle">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <label htmlFor="firstNameFld" className="form-label">First Name*</label>
                                                <input type="text" className="form-control" placeholder="Johan" />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="lastaNameFld" className="form-label">Last Name*</label>
                                                <input type="text" className="form-control" placeholder="Doe" />
                                            </div>
                                            <div className="col-12">
                                            <label htmlFor="emailFld" className="form-label">Address*</label>
                                            <input type="text" className="form-control" placeholder="4709 Shadowmar Drive, Bristol" />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="cityFld" className="form-label">City*</label>
                                                <input type="text" className="form-control" placeholder="Bristol" />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="countrField" className="form-label">Country*</label>
                                                <input type="text" className="form-control" placeholder="Australia" />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="passwordFld" className="form-label">Postal Code*</label>
                                                <input type="number" className="form-control" placeholder="70062" />
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                <div className="shpnMthodBlk formStyle my-4 py-4">
                                    <div className="prdctDtlHdng pb-3">
                                        <h3>Shipping Method</h3>
                                    </div>  
                                    <div className="row">
                                        <div className="col-12 ">
                                        <div className="form-check pb-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Free Shipping
                                            </label>
                                        </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            EMS (Express Mail Service): $18.00
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="saveMthodBlk formStyle pt-2 mb-4 pb-4">
                                    <div className="prdctDtlHdng pb-3">
                                        <h3>Saved Payment Method</h3>
                                    </div>  
                                    <div className="row d-flex align-items-center text-center pb-3">
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                <span> <img src="img/visaCard.png"/></span> 41xx xxxx xxxx 5609
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm">
                                        Johan Doe
                                        </div>
                                        <div className="col-sm">
                                        10/2022
                                        </div>
                                        <div className="col-sm">
                                            <div className="saveCvvInput">
                                                <input type="text" className="form-control" placeholder="CVV" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex align-items-center text-center">
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                <span> <img src="img/mastrCard.png"/></span> 69xx xxxx xxxx 5845 
                                                </label>                                                    
                                            </div>
                                        </div>
                                        <div className="col text-center">
                                        Johan Doe
                                        </div>
                                        <div className="col-sm">
                                        10/2022
                                        </div>
                                        <div className="col-sm">
                                            <div className="saveCvvInput">
                                            <input type="text" className="form-control" placeholder="CVV" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="paymentMthodBlk formStyle">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="prdctDtlHdng pb-1">
                                                <h3>Payment Method</h3>
                                            </div>
                                            <div className="paymntCreditForm">
                                                <div className="creditRadio">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                                                        <label className="form-check-label  d-flex align-items-center justify-content-between" htmlFor="flexRadioDefault5">
                                                            <h4>Credit/Debit Cards </h4>
                                                        <span><img src="img/allCardImg.png"/></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="cardNmbrInput pt-3">
                                                <label htmlFor="cityFld" className="form-label">Cartd Number</label>
                                                <input type="text" className="form-control" placeholder="1234 5678 0123 456789"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="cardNmbrInput pt-3">
                                                <label htmlFor="cityFld" className="form-label">Expiration date</label>
                                                <div className="row  d-flex align-items-center justify-content-between pb-3">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <select ref={selectRef1} className="wide">
                                                            <option value="Month">Month</option>
                                                            <option value="Jan">Jan</option>
                                                            <option value="Feb">Feb</option>
                                                            <option value="Mar">Mar</option>
                                                            <option value="Apr">Apr</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <select ref={selectRef2} className="wide">
                                                            <option value="Featured">Year</option>
                                                            <option value="10">2022</option>
                                                            <option value="25">2021</option>
                                                            <option value="50">2020</option>
                                                            <option value="100">2019</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="CVV"/>
                                                        </div>                                            
                                                    </div>
                                                    <div className="col-sm">
                                                        <div className="questnIcon">
                                                            <Link to="/"><img src="img/questionIcon.svg"/></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="paymntCreditForm">
                                                <div className="creditRadio">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
                                                        <label className="form-check-label  d-flex align-items-center justify-content-between" htmlFor="flexRadioDefault6">
                                                            <h4>PayPal </h4>
                                                        <span><img src="img/paypal.png"/></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="byClickTxt">
                                                    <p>By Clicking The Button, You Agree To The Terms And Conditions</p>
                                                </div>
                                                <div className="saveBtnDiv">
                                                    <button className="saveBtn btnCommon btnDark ">Save </button>
                                                </div>
                                            </div>
                                    </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sdbrWdgt">
                            <div className=" checkoutSideProdct sideBarBg ">
                                <div className="sdbrHdng checkOutSdeHdng mb-4"><h4>Your Order</h4></div>
                                    <div className="sideBrPrdct">
                                        <div className="row g-3 d-sm-flex align-items-center">
                                            <div className="col-auto">
                                                <div className="sdbrProMedia">
                                                    <a href="/product-detail">
                                                        <div className="sdbrProImg" style={{backgroundImage: `url("img/productDtilImg.png")`}}>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="sdbrProInfo">
                                                    <div className="prdctListTitle"><h4><a href="/">K2 Solid Oak Rustic Lacquered Floor 18 x 125mm 2.2m²</a></h4></div>
                                                    <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    </div>
                                                    <div className="prodctListPrice">
                                                        <div className="price">£83.69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chckoutPymtSideBrBlk">
                                        <div className="d-flex justify-content-between">
                                            <ul className="prodctListPrice checkotPymntList">
                                                <li>Total MRP<span>£100.43</span></li>
                                                <li>Discount on MRP<span className="discntPrice" >-$05</span></li>
                                                <li>Convenience Fee<span className="oferPrice">$1 <span className="discntPrice">Free</span></span></li>
                                            </ul>
                                        </div> 
                                                                       
                                    </div>
                                    <div className="row g-0 d-flex justify-content-row">
                                        <div className="col">
                                            <div className="totlAmntHdng">
                                                <h3>Total Amount </h3>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="totlGstBlk">
                                                <h5>£94.43</h5>
                                                <p>Inc. GST</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>                            
                            <div className="checkOutbrn pt-4">
                                <Link to="/">
                                    <img src="img/couponCode.png"/>
                                </Link>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        </div>
    </article>

    <article className="homeAboutBlk whiteBg wrapper py-5">
        <div className="container">
            <div className="abtHomeInfo">
                <h3>Different Types of Marble  </h3>
                <p>Quartzite Marble Collection | Onyx Marble Collection | Granite Marble Collection | White Marble | Beige Marble | Grey Marble | Green Marble | 
                Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble  | Onyx Marble Collection | Granite Marble Collection | White Marble | 
                Beige Marble | Grey Marble | Green Marble | Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble</p>
                <h3>Other Categories</h3>
                <p>Bathroom Tiles | Kitchen Tiles | Living Room Tiles | Bedroom Tiles | Outdoor Tiles | Commercial Tiles | Ceramic Wall Tiles |
                Vitrified Double Charge Tiles | Made In Italy Tiles | Floor Tiles | Wall Tiles | Marble | Mosaico</p>
                <h3>Product</h3>
                <p>Quartzite Marble Collection | Onyx Marble Collection | Granite Marble Collection | White Marble | Beige Marble | Grey Marble | Green Marble | 
                Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble  | Onyx Marble Collection | Granite Marble Collection | White Marble | 
                Beige Marble | Grey Marble | Green Marble | Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble</p>     
            </div>
        </div>
    </article>       
    <Footer/>
    </section>
  );
}
export default Checkout;