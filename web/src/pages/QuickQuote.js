import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import MainHeading from '../components/MainHeading';
import 'rc-slider/assets/index.css';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function QuickQuote() {
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
        <article className="hdrBrNone wrapper">
            <div className="greyBg2 py-4 mb-5">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col">
                            <div className="bredCrumbHdng">
                                <h3>Let's get a quick quote!</h3>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="breadcrumbsCol py-20">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active"><a href="/">Instant Quote</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>                                
                </div>
            </div>
        </article>
        <article className="instanQuotelk quickQuoteBlk wrapper pb-5">
            <div className="container">
                <MainHeading
                    Heading="Tell us about your property..."
                    HeadingParah="Please answer a few quick questions about your project to retrieve your quote."
                    className="headingCenter hdngNoBorder"
                />                
                <div className="quickQuoteform">
                    <h4>A few details about you..</h4>
                    <form className="formStyle mt-4" action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                    <input className="form-control" name="firstname" id="input1" placeholder="First Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                   <input className="form-control" name="lastname" id="input2" placeholder="Last Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                    <input className="form-control" name="1st line of address" id="input3" placeholder="1st line of address" type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                    <input className="form-control" name="Project postcode" id="input4" placeholder="Project postcode" type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                    <input className="form-control" name="Email" id="input3" placeholder="Email" type="email"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" mb-3">
                                    <input className="form-control" name="Phone" id="input4" placeholder="Phone" type="text"/>
                                </div>
                            </div>
                            <div className="form-check pb-2">
                                <input type="checkbox" className="form-check-input" id="acceptCheck"/>
                                <label className="form-check-label" htmlFor="acceptCheck">I accept the terms and conditions</label>
                            </div>
                            <div className="form-check pb-2">
                                <input type="checkbox" className="form-check-input" id="acceptCheck2"/>
                                <label className="form-check-label" htmlFor="acceptCheck2">Yes, please keep me updated on Resi news, events and offers</label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btnCommon  mt-3" type="submit">Reveal estimate</button>  
                        </div>
                    </form>
                </div>
            </div>
        </article>
      <Footer/>
    </section>
  );
}
export default QuickQuote;