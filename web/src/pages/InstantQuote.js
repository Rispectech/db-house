import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import MainHeading from '../components/MainHeading';
import 'rc-slider/assets/index.css';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function InstantQuote() {
    const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const signUpClose = () => setShow1(false);
  const signUpShow = () => setShow1(true);
  const loginClose = () => setShow(false);
  const loginShow = () => setShow(true);
  const forgotClose = () => setShow2(false);
  const forgotShow = () => setShow2(true);
  const resetClose = () => setShow3(false);
  const resetShow = () => setShow3(true);
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
            <article className="instanQuotelk wrapper pb-4">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="instantAcordnCol">
                    <MainHeading
                        Heading="Tell us about your property..."
                        HeadingParah="Please answer a few quick questions about your project to retrieve your quote."
                        className="headingCenter hdngNoBorder"
                    />
                    <div className="instanAcordn">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>What type of property is this?</Accordion.Header>
                            <Accordion.Body className="m-4">
                                <div className="row g-5">
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg1">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                                                    <label className="form-check-label " htmlFor="flexRadioDefault">
                                                        <span><img src="img/detachedIcon.svg"/></span>
                                                        <h4>Detached </h4>
                                                    
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg2">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className="form-check-label " htmlFor="flexRadioDefault1">
                                                        <span><img src="img/semiDetachedIcon.svg"/></span>
                                                        <h4>Semi Detached </h4>
                                                    
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg3">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                                    <label className="form-check-label " htmlFor="flexRadioDefault2">
                                                        <span><img src="img/endTerraceIcon.svg"/></span>
                                                        <h4>End Of Terrace </h4>
                                                    
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                        <span><img src="img/terraceIcon.svg"/></span>
                                                        <h4>Terrace</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg5">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        <span><img src="img/flatIcon.svg"/></span>
                                                        <h4>Flat</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg6">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                                                    <label className="form-check-label " htmlFor="flexRadioDefault4">
                                                        <span><img src="img/bungalowIcon.svg"/></span>
                                                        <h4>Bungalow </h4>
                                                    
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>Which specific parts of the property?</Accordion.Header>
                            <Accordion.Body className="m-4">
                                <div className="row g-5">
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center"  onClick={loginShow}>
                                            <div className="typeRadio">
                                                <div className="form-check inputBg1">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="loft"/>
                                                    <label className="form-check-label " htmlFor="loft">
                                                        <span><img src="img/loftIcon.svg"/></span>
                                                        <h4>Loft</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg2">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="garden"/>
                                                    <label className="form-check-label " htmlFor="garden">
                                                        <span><img src="img/gardenIcon.svg"/></span>
                                                        <h4>Garden</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg3">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="garage"/>
                                                    <label className="form-check-label " htmlFor="garage">
                                                        <span><img src="img/garageIcon.svg"/></span>
                                                        <h4>Garage</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="ground"/>
                                                    <label className="form-check-label" htmlFor="ground">
                                                        <span><img src="img/groundIcon.svg"/></span>
                                                        <h4>Ground</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg5">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="first"/>
                                                    <label className="form-check-label" htmlFor="first">
                                                        <span><img src="img/firstIcon.svg"/></span>
                                                        <h4>First</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="prptyTypeForm text-center">
                                            <div className="typeRadio">
                                                <div className="form-check inputBg6">
                                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="twostorey"/>
                                                    <label className="form-check-label " htmlFor="twostorey">
                                                        <span><img src="img/twoStoreyIcon.svg"/></span>
                                                        <h4>Two storey</h4>                                                
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                </div>
            </div>
            <div className="proptySubBlk p-5" show={show}>         
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-sm-3">
                        <div className="prptyTypeForm text-center">
                            <div className="typeSubRadio">
                                <div className="form-check ">
                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="side1"/>
                                    <label className="form-check-label " htmlFor="side1">
                                        <span><img src="img/sideIcon.svg"/></span>
                                        <h4>Side Infill</h4>                                                
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="prptyTypeForm text-center">
                            <div className="typeSubRadio">
                                <div className="form-check ">
                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="side2"/>
                                    <label className="form-check-label " htmlFor="side2">
                                        <span><img src="img/sideIcon.svg"/></span>
                                        <h4>Side</h4>                                                
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="prptyTypeForm text-center">
                            <div className="typeSubRadio">
                                <div className="form-check ">
                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="side3"/>
                                    <label className="form-check-label " htmlFor="side3">
                                        <span><img src="img/sideIcon.svg"/></span>
                                        <h4>Side And Rear</h4>                                                
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="prptyTypeForm text-center">
                            <div className="typeSubRadio">
                                <div className="form-check ">
                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="side4"/>
                                    <label className="form-check-label " htmlFor="side4">
                                        <span><img src="img/sideIcon.svg"/></span>
                                        <h4>Rear</h4>                                                
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="prptyTypeForm text-center">
                            <div className="typeSubRadio">
                                <div className="form-check">
                                    <input className="form-check-input " type="radio" name="flexRadioDefault" id="side5"/>
                                    <label className="form-check-label " htmlFor="side5">
                                        <span><img src="img/sideIcon.svg"/></span>
                                        <h4>Wraparound</h4>                                                
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
            <div className="bedrmSelctBlk p-5 mt-5">
                <div className="mainHeading headingSmall text-center">
                <h3>How many bedrooms does this property have?</h3>
                </div>
                <div className="bedRmSlectRow d-flex align-items-center justify-content-center">
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"  id="1"/>
                        <label className="form-check-label" htmlFor="1">
                            1
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
                        <label className="form-check-label" htmlFor="2">
                            2
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
                        <label className="form-check-label" htmlFor="3">
                            3
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="4"/>
                        <label className="form-check-label" htmlFor="4">
                        4
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="5"/>
                        <label className="form-check-label" htmlFor="5">
                        5
                        </label>
                    </div>
                </div>
            </div>
            <div className="arhtctSlctBlk pt-5 ">
                <div className="mainHeading headingSmall text-center">
                <h3>When are you hoping to select an architect?</h3>
                </div>
                <div className="arhtctSlctRow pb-4 ">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="asap"/>
                                <label className="form-check-label" htmlFor="asap">
                                ASAP
                                </label>
                            </div>
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="3month"/>
                                <label className="form-check-label" htmlFor="3month">
                                3 Months
                                </label>
                            </div>
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="6month"/>
                                <label className="form-check-label" htmlFor="6month">
                                6 Months
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="12months"/>
                                <label className="form-check-label" htmlFor="12months">
                                12 Months
                                </label>
                            </div>
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"  id="18months"/>
                                <label className="form-check-label" htmlFor="18months">
                                18 Months +
                                </label>
                            </div>
                            <div className="form-check pb-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="notsure"/>
                                <label className="form-check-label" htmlFor="notsure">
                                i’m not sure
                                </label>
                            </div>
                        </div>
                    </div>         
                </div>
                <div className="buldngPlngBlk">
                    <div className="mainHeading headingSmall text-center">
                        <h4>Would you like to add Building Regulation drawings?</h4>
                    </div>
                    <div className="buildndPlngBtnBlk text-center">
                        <button className="btnCommon" to="quickquote">Planning Only</button>
                        <button className="btnCommon btnDark">Planning & Building Regulations</button>
                    </div>
                </div>
            </div>
        </div>
            </article>
        <Footer/>
    </section>
  );
}
export default InstantQuote;