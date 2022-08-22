import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, NavLink,} from "react-router-dom";
import { Button, Modal, Dropdown, Offcanvas, Accordion, Form } from "react-bootstrap";
function BlogDetail() {
  return (
    <section className="wrapper">
        <Header/>
            <article className="categoryInrBlk hdrBrNone wrapper">
                    <div className="greyBg2 py-4 mb-5">
                            <div className="container">
                                <div className="row d-flex align-items-center justify-content-between">
                                    <div className="col">
                                        <div className="bredCrumbHdng">
                                            <h3>Blog Detail</h3>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                    <div className="breadcrumbsCol py-20">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active"><a href="/">Blog Detail </a></li>
                                        </ol>
                                    </nav>
                                </div>
                                    </div>
                                </div>
                                        
                            </div>
                    </div>
            </article>       
            <article className="wrapper blogListBlk">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 pb-4">
                            <div className="sdbrWdgt ">
                                <div className="srchSideBr">
                                    <h4>Search</h4>
                                    <form className="sdbrSearchForm">
                                        <div className="sdrbrSrchInput">                                       
                                            <input placeholder="Search..." type="text" id="" className="form-control"/>
                                            <input type="submit" className="search-submit" value="Search"/>
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#F2672A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </i>
                                        </div>
                                    </form>
                                </div>
                                <div className="filterSideBarWgt dashboard--main">
                                    <div className="filtrAcordion drpDownAcountRow">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><span><i className="fa fa-list"></i></span>Categories</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="acoutSidebar mb-2"> 
                                                        <ul>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i>Category One<span>(12)</span></Link></li>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i> Category One <span>(8)</span></Link></li>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i> Category One <span>(32)</span></Link></li>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i>Category One <span>(05)</span></Link></li>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i> Category One <span>(4)</span></Link></li>
                                                            <li><Link to="/"><i className="fa fa-caret-right"></i> Category One <span>(15)</span></Link></li>
                                                        </ul>
                                                    </div>                                        
                                                </Accordion.Body>
                                            </Accordion.Item>                 
                                        </Accordion>                                
                                    </div>
                                </div>
                                <div className="sdrRecntPostWgt">
                                    <div className="sdbrHdng">
                                        <h4>Most Popular</h4>
                                    </div>
                                    <div className="sdbrWdgtContent sdbrPostCol">
                                        <div className="sdbrPostItem">
                                        <div className="row g-3 d-flex align-items-center">
                                            <div className="col-auto">
                                            <div className="sdbrPostMedia">
                                                <Link to="">
                                                <div className="sdbrPostImg" style={{backgroundImage: `url("img/tabImg4.png")`}}></div>
                                                </Link>
                                            </div>
                                            </div>
                                            <div className="col">
                                            <div className="sdbrPostDes">
                                                <h4><Link to="">Businesses Are Thriving Societies Are Not.</Link></h4>
                                                <h5>
                                                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                                    <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                    <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg> March 17, 2022
                                                </h5>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="sdbrPostItem">
                                            <div className="row g-3 d-flex align-items-center">
                                                <div className="col-auto">
                                                <div className="sdbrPostMedia">
                                                    <Link to="">
                                                    <div className="sdbrPostImg" style={{backgroundImage: `url("img/tabImg4.png")`}}></div>
                                                    </Link>
                                                </div>
                                                </div>
                                                <div className="col">
                                                <div className="sdbrPostDes">
                                                    <h4><Link to="">Businesses Are Thriving Societies Are Not.</Link></h4>
                                                    <h5>
                                                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        </path>
                                                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg> March 17, 2022
                                                    </h5>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sdbrPostItem">
                                            <div className="row g-3 d-flex align-items-center">
                                                <div className="col-auto">
                                                    <div className="sdbrPostMedia">
                                                        <Link to="">
                                                        <div className="sdbrPostImg" style={{backgroundImage: `url("img/tabImg4.png")`}}></div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="sdbrPostDes">
                                                        <h4><Link to="">Businesses Are Thriving Societies Are Not.</Link></h4>
                                                        <h5>
                                                        <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                                            <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg> March 17, 2022
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sdbrPostItem">
                                            <div className="row g-3 d-flex align-items-center">
                                                <div className="col-auto">
                                                    <div className="sdbrPostMedia">
                                                        <Link to="">
                                                        <div className="sdbrPostImg" style={{backgroundImage: `url("img/tabImg4.png")`}}></div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="sdbrPostDes">
                                                        <h4><Link to="">Businesses Are Thriving Societies Are Not.</Link></h4>
                                                        <h5>
                                                        <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                                            <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg> March 17, 2022
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blogTagRow">
                                    <h4 className="pb-3">Tags</h4>
                                    <div className="sidebar--widget__tag mb-20">
                                        <a href="/blogDetails">Granite</a>
                                        <a href="/blogDetails">White Stone Export</a>
                                        <a href="/blogDetails">Interior Stone</a>
                                        <a href="/blogDetails">Floor Tiles</a>
                                        <a href="/blogDetails">Kitchen Slabs</a>
                                        <a href="/blogDetails">Shop Marble</a>
                                        <a href="/blogDetails">Wall Tiles</a>
                                        <a href="/blogDetails">Quality Stone</a>
                                    </div>
                                </div>                                
                            </div> 
                        </div>
                        <div className="col-md-9 pb-4">
                            <div className="dashboard--main">
                                <div className="blogDescptnDiv">
                                    <div className="row d-flex align-items-center justifiy-content-between">
                                        <div className="col">
                                            <div className="blogMainTitle">
                                            <h3>Blog Title here Stone Categories</h3>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="blogListOptions">
                                                <Link to="/blog-detail">
                                                    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg> March 17, 2022
                                                </Link>
                                                <Link to="/blog-detail">
                                                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.19421 12.4454C2.35557 11.0316 2.06187 9.36037 2.36826 7.74539C2.67466 6.13042 3.56006 4.68285 4.85823 3.6745C6.15639 2.66615 7.77801 2.16638 9.41858 2.26904C11.0592 2.3717 12.6058 3.06973 13.7681 4.23206C14.9305 5.39438 15.6285 6.94104 15.7312 8.58161C15.8339 10.2222 15.3341 11.8438 14.3257 13.142C13.3174 14.4401 11.8698 15.3256 10.2549 15.632C8.63989 15.9384 6.96862 15.6447 5.55486 14.806L5.55488 14.806L3.22356 15.4721C3.12711 15.4996 3.02504 15.5009 2.92793 15.4757C2.83082 15.4506 2.74221 15.3999 2.67128 15.3289C2.60034 15.258 2.54967 15.1694 2.52451 15.0723C2.49935 14.9752 2.50061 14.8731 2.52817 14.7767L3.19426 12.4453L3.19421 12.4454Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.19375 9C9.19375 9.10701 9.10701 9.19375 9 9.19375C8.89299 9.19375 8.80625 9.10701 8.80625 9C8.80625 8.89299 8.89299 8.80625 9 8.80625C9.10701 8.80625 9.19375 8.89299 9.19375 9Z" fill="currentColor" stroke="currentColor" stroke-width="1.3"></path>
                                                        <path d="M5.625 9.84375C6.09099 9.84375 6.46875 9.46599 6.46875 9C6.46875 8.53401 6.09099 8.15625 5.625 8.15625C5.15901 8.15625 4.78125 8.53401 4.78125 9C4.78125 9.46599 5.15901 9.84375 5.625 9.84375Z" fill="currentColor"></path>
                                                        <path d="M12.375 9.84375C12.841 9.84375 13.2188 9.46599 13.2188 9C13.2188 8.53401 12.841 8.15625 12.375 8.15625C11.909 8.15625 11.5312 8.53401 11.5312 9C11.5312 9.46599 11.909 9.84375 12.375 9.84375Z" fill="currentColor"></path>
                                                    </svg> 25 comments
                                                </Link>
                                            </div>
                                        </div>                                      
                                    </div>
                                    <hr/>
                                    <div className="blogDtlDes">
                                        <div className="blogPostMedia pb-3">
                                            <Link to="">
                                            <div className="blogPostImg" style={{backgroundImage: `url("img/banerSlide2.png")`}}></div>
                                            </Link>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.</p>
                                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem.</p>
                                        <ul>
                                            <li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
                                            <li>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</li>
                                            <li>Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</li>
                                            <li>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</li>
                                        </ul>
                                        <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril deleni.</p>
                                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                                    </div>
                                </div>                                
                                <div className="blogDtlCmntDiv">
                                    <div className="pt-4">
                                        <h4>Leave a comment</h4>
                                    </div>
                                    <div className="cmntForm conttForm">
                                        <Form className="formStyle">
                                            <div className="row g-4">
                                                <div className="col-6">
                                                    <input type="text" className="form-control" placeholder="Your Name*" />
                                                </div>
                                                <div className="col-6">
                                                    <input type="email" className="form-control" placeholder="Your E-mail*" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea type="text" className="form-control" placeholder="Your comment*"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                                        <label className="form-check-label" htmlFor="rememberCheck">By using this form you agree with the storage and handling of your data by this website. *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btnCommon btnRadiusNone">
                                                        Leave a Comment <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        <Footer/>
    </section>
  );
}
export default BlogDetail;