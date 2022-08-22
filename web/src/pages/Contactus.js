import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Form,textarea, Button, Modal, Input,} from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import 'rc-slider/assets/index.css';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Contactus() {
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
      <article className="categoryInrBlk hdrBrNone wrapper">
            <div className="greyBg2 py-4 mb-5">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col">
                                <div className="bredCrumbHdng">
                                    <h3>Contact Us</h3>
                                </div>
                            </div>
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
      <article className="wrapper contactBlk py-20">
        <div className="container">
            <div className="contactOuterDiv">
                <div className="mainHeading headingCenter pb-30">
                    <h2>Get in touch</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-sm-5">
                        <div className="contact__info  mt-3">
                            <div className="contact__info--items">
                                <h4 className="contact__info--content__title text-white mb-3">Contact Us</h4>
                                <div className="contact__info--items__inner d-flex">
                                    <div className="contact__info--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31.568 31.128">
                                            <path id="ic_phone_forwarded_24px" d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" transform="translate(-3 -1)" fill="#fff"></path>
                                        </svg>
                                    </div>
                                    <div className="contact__info--content">
                                        <p className="contact__info--content__desc text-white">Change the design through a range <br/> <a href="tel:+01234-567890">+01234-567890</a> <a href="tel:++01234-5688765">+01234-5688765</a>   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info--items">
                                <h4 className="contact__info--content__title text-white mb-3">Email Address</h4>
                                <div className="contact__info--items__inner d-flex">
                                    <div className="contact__info--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31.57 31.13">
                                            <path id="ic_email_24px" d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" fill="#fff"></path>
                                        </svg>  
                                    </div>
                                    <div className="contact__info--content">
                                        <p className="contact__info--content__desc text-white"> <a href="mailto:info@example.com">info@example.com</a> <br/> <a href="mailto:info@example.com">info@example.com</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info--items">
                                <h4 className="contact__info--content__title text-white mb-3">Office Location</h4>
                                <div className="contact__info--items__inner d-flex">
                                    <div className="contact__info--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31.57 31.13">
                                            <path id="ic_account_balance_24px" d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" transform="translate(-2 -1)" fill="#fff"></path>
                                        </svg> 
                                    </div>
                                    <div className="contact__info--content">
                                        <p className="contact__info--content__desc text-white">  123 Stree New York City ,<br/>
                                            United States Of America
                                            NY 750065.</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info--items">
                                <h4 className="contact__info--content__title text-white mb-15">Follow Us</h4>
                                <ul className="contact__info--social d-flex">
                                    <li className="contact__info--social__list">
                                        <a className="contact__info--social__icon" target="_blank" href="https://www.facebook.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"></path>
                                            </svg>
                                            <span className="visually-hidden">Facebook</span>
                                        </a>
                                    </li>
                                    <li className="contact__info--social__list">
                                        <a className="contact__info--social__icon" target="_blank" href="https://twitter.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"></path>
                                            </svg>
                                            <span className="visually-hidden">Twitter</span>
                                        </a>
                                    </li>
                                    <li className="contact__info--social__list">
                                        <a className="contact__info--social__icon" target="_blank" href="https://www.instagram.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
                                                <path data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor"></path>
                                            </svg>
                                            <span className="visually-hidden">Instagram</span>
                                        </a>
                                    </li>
                                    <li className="contact__info--social__list">
                                        <a className="contact__info--social__icon" target="_blank" href="https://www.youtube.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"></path>
                                            </svg>
                                            <span className="visually-hidden">Youtube</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-sm-7">
                        <div className="contctFrmBlk py-5 px-5">
                            <h3 className="pb-3">Contact</h3>
                            <form className="formStyle" action="#">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className=" mb-3">
                                        <label className="form-label" htmlFor="input1">First Name <span className="contact_star">*</span></label>
                                        <input className="form-control" name="firstname" id="input1" placeholder="Your First Name" type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className=" mb-3">
                                        <label className="form-label" htmlFor="input2">Last Name <span className="contact__form--label__star">*</span></label>
                                        <input className="form-control" name="lastname" id="input2" placeholder="Your Last Name" type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className=" mb-3">
                                        <label className="form-label" htmlFor="input3">Phone Number <span className="contact__form--label__star">*</span></label>
                                        <input className="form-control" name="number" id="input3" placeholder="Phone number" type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className=" mb-3">
                                        <label className="form-label" htmlFor="input4">Email <span className="contact__form--label__star">*</span></label>
                                        <input className="form-control" name="email" id="input4" placeholder="Email" type="email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className=" mb-15">
                                        <label className="form-label" htmlFor="input5">Write Your Message <span className="contact__form--label__star">*</span></label>
                                        <textarea className="form-control" name="message" id="input5" placeholder="Write Your Message">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <button className="btnCommon btnDark mt-3 " type="submit">Submit Now</button>  
                            </form>
                        <div className="cntIconBg">
                        
                        </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
     </article>
     <article className="wrapper mt-4">
        <div className="mapIframeBlk">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280114.312265644!2d73.72997399968845!3d20.77118574818321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1652155991818!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" ></iframe>       
        </div>
     </article>   

      <Footer/>
    </section>
  );
}
export default Contactus;