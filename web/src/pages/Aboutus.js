import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import 'rc-slider/assets/index.css';
import Blog from "../components/Blog/Blog";
import ImportCollection2 from "../components/Home/ImportCollection2";
import CommercialProject from "../components/Home/CommercialProject";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Aboutus() {
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
                                    <h3>About Us</h3>
                                </div>
                            </div>
                            <div className="col-auto">
                            <div className="breadcrumbsCol py-20">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active"><a href="/">About Us</a></li>
                                </ol>
                            </nav>
                        </div>
                            </div>
                        </div>
                                
                    </div>
            </div>
        </article>
        <article className="wrapper py-5 aboutUsBlk mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__img">
                            <div className="shape1 zoom-fade"><img src="img/about-v1-shape1.png" alt="" /></div>
                            <div className="about-one__img1">
                                <img src="img/commercialProject1.png" alt="" />
                            </div>
                            <div className="about-one__img2">
                                <img src="img/categoryImg5.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__content">
                            <div className="sec-title">
                                <span className="sec-title__tagline"> Why Choose Us </span>
                                <h2 className="sec-title__title">DB Houz Marbles and natural <br/> stones</h2>
                            </div>
                            <div className="about-two__content-text2">
                                <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="about-two__content-text2">
                                <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="about-two__content-text2">
                                <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                               
                            </div>
                            
                         </div>
                    </div>
                </div>
            </div>
        </article>
        <article className="benifiMrbleBlock greyBg wrapper py-40">
            <div className="container">
            <div className="benifitMarbleInfo">
                <h3>Benefits of having Marble </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it versions of Lorem Ipsum.</p>
            </div>
            </div>
        </article>
        <article className="wrapper py-5 aboutUsBlk mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="abtCntOutr">
                            <div className="sec-title">
                                <h2 className="aboutTitle"> DB Houz About Us</h2>
                            </div>
                            <div className="aboutContent">
                                <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="aboutContent">
                                <p>Dictum fusce ut placerat orci nulla. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. Amet aliquam cenas ultricies. Facilisis sed odio morbi quis magnis</p>
                            </div>
                         </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__img pull-right">
                            <div className="shape1 zoom-fade"><img src="img/about-v1-shape1.png" alt="" /></div>
                            <div className="about-one__img1">
                                <img src="img/commercialProject2.png" alt="" />
                            </div>
                            <div className="about-one__img2">
                                <img src="img/categoryImg3.png" alt="" />
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </article>
      <article className="wrapper aboutRowBlk py-20">
        <div className="container">
            <div className="aboutOuterDiv">
                <div className="row">
                    <div className="col-sm-12">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
     </article>
     <ImportCollection2/>
      <CommercialProject/> 
     <Blog/>
    
  
     
      <Footer/>
    </section>
  );
}
export default Aboutus;