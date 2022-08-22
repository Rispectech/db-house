import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button, Modal, Dropdown, Offcanvas, Accordion } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import 'rc-slider/assets/index.css';
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Faq() {
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
                                <h3>Faq</h3>
                            </div>
                        </div>
                        <div className="col-auto">
                        <div className="breadcrumbsCol py-20">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active"><a href="/">FAQ</a></li>
                            </ol>
                        </nav>
                    </div>
                        </div>
                    </div>                                
                </div>
            </div>
        </article>
        <article className="faqBlock wrapper py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="faqCol">
                <div className="mainHeading hdngNoBorder headingLeft pb-20">
                    <h2>FAQ</h2>
                </div>
                <div className="faqAccRow">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Db Houz Firt Question</Accordion.Header>
                      <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Db Houz Second Question</Accordion.Header>
                      <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Accordion.Body>
                    </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Db Houz Third Question</Accordion.Header>
                          <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </Accordion.Body>
                      </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Db Houz Four Question</Accordion.Header>
                      <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Db Houz Five Question</Accordion.Header>
                      <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Db Houz Six Question</Accordion.Header>
                      <Accordion.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <div className="faqMedia">
                    <i className="fa fa-question"></i>
                </div>
            </div>         
          </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default Faq;