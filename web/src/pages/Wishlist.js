import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import UserIcon from "../img/userIcon.svg";
import PaymentIcon from "../img/pymntIcon.svg";
import StuffIcon from "../img/stuffIcon.svg";
import LogoutIcon from "../img/logoutIcon.svg";
function AccountSetting() {
  return (
    <section className="wrapper greyBg3 dashboardBlk ">
      <Header />
      <article className="categoryInrBlk hdrBrNone wrapper">
        <div className=" py-2 ">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-auto">
                <div className="breadcrumbsCol py-20">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href="/">Account Settings</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 pb-4">
              <div className="sdbrWdgt ">
                <div className="filterSideBarWgt whtBg">
                  <div className="filtrAcordion drpDownAcountRow">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>
                            <img src={UserIcon} />
                          </span>{" "}
                          Account Settings
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="acoutSidebar mb-2">
                            <ul>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-user"></i> Profile Information
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-address-book-o"></i> Manage Addresses
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-id-card-o"></i> Pan Card Information
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>
                            <img src={PaymentIcon} />
                          </span>{" "}
                          Payments
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="acoutSidebar mb-2">
                            <ul>
                              <li>
                                <Link to="/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#7f7f7f"
                                    className="bi bi-gift"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                  </svg>{" "}
                                  &nbsp; Gift Cards
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#7f7f7f"
                                    className="bi bi-card-list"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                  </svg>{" "}
                                  &nbsp; Saved UPI
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-credit-card"></i> Saved Cards
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>
                            <img src={StuffIcon} />
                          </span>{" "}
                          My Stuff
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="acoutSidebar mb-2">
                            <ul>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-id-card-o"></i> My Coupons
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-star-o"></i> My Reviews & Ratings{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-bell-o"></i> All Notifications
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-heart-o"></i> Wish List
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0" className="sideLogOut">
                        <Link to="/">
                          <span>
                            <img src={LogoutIcon} />
                          </span>{" "}
                          Logout
                        </Link>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 pb-4">
              <div className="dashboard--main">
                <div className="dashboard--top pt-2 pb-4">
                  <h4>My Wishlist (6)</h4>
                  <hr />
                </div>
                <div className="wishListPage">
                  <div className="wishListPrdct">
                    <div className="row g-3 d-sm-flex align-items-center">
                      <div className="col-auto">
                        <div className="wishListProMedia">
                          <a href="/product-detail">
                            <div
                              className="wishListProImg"
                              style={{ backgroundImage: `url("img/CatImg3.jpg")` }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col mt-0">
                        <div className="wishListProInfo">
                          <div className="prdctListTitle">
                            <h4>
                              <a href="/">G654 Pangdang Granite Pedestal...</a>
                            </h4>
                          </div>
                          <div className="rvwRtngPrgrsStars">
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                          </div>
                          <div className="prodctListPrice wishListPrice pb-0 pt-2 d-flex ">
                            <div className="price">$48.00</div>
                            <div className="discntPrice mx-1">(31% off)</div>
                          </div>
                          <div className="wishListPrice">
                            <Link to="/"> In Stock</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="wishLstCrdBtn">
                          <button className="btnCommon">Add to Cart</button>
                        </div>
                        <div className="wishLstDlet">
                          <Link to="/">
                            <img src="img/deleteIcon.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-5" />
                  <div className="wishListPrdct">
                    <div className="row g-3 d-sm-flex align-items-center">
                      <div className="col-auto">
                        <div className="wishListProMedia">
                          <a href="/product-detail">
                            <div
                              className="wishListProImg"
                              style={{ backgroundImage: `url("img/CatImg2.jpg")` }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col mt-0">
                        <div className="wishListProInfo">
                          <div className="prdctListTitle">
                            <h4>
                              <a href="/">G654 Pangdang Granite Pedestal...</a>
                            </h4>
                          </div>
                          <div className="rvwRtngPrgrsStars">
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                          </div>
                          <div className="prodctListPrice wishListPrice pb-0 pt-2 d-flex ">
                            <div className="price">$48.00</div>
                            <div className="discntPrice mx-1">(31% off)</div>
                          </div>
                          <div className="wishListPrice">
                            <Link to="/"> In Stock</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="wishLstCrdBtn">
                          <button className="btnCommon">Add to Cart</button>
                        </div>
                        <div className="wishLstDlet">
                          <Link to="/">
                            <img src="img/deleteIcon.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-5" />
                  <div className="wishListPrdct">
                    <div className="row g-3 d-sm-flex align-items-center">
                      <div className="col-auto">
                        <div className="wishListProMedia">
                          <a href="/product-detail">
                            <div
                              className="wishListProImg"
                              style={{ backgroundImage: `url("img/CatImg3.jpg")` }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col mt-0">
                        <div className="wishListProInfo">
                          <div className="prdctListTitle">
                            <h4>
                              <a href="/">G654 Pangdang Granite Pedestal...</a>
                            </h4>
                          </div>
                          <div className="rvwRtngPrgrsStars">
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                          </div>
                          <div className="prodctListPrice wishListPrice pb-0 pt-2 d-flex ">
                            <div className="price">$48.00</div>
                            <div className="discntPrice mx-1">(31% off)</div>
                          </div>
                          <div className="wishListPrice">
                            <Link to="/"> In Stock</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="wishLstCrdBtn">
                          <button className="btnCommon">Add to Cart</button>
                        </div>
                        <div className="wishLstDlet">
                          <Link to="/">
                            <img src="img/deleteIcon.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-5" />
                  <div className="wishListPrdct">
                    <div className="row g-3 d-sm-flex align-items-center">
                      <div className="col-auto">
                        <div className="wishListProMedia">
                          <a href="/product-detail">
                            <div
                              className="wishListProImg"
                              style={{ backgroundImage: `url("img/CatImg4.jpg")` }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col mt-0">
                        <div className="wishListProInfo">
                          <div className="prdctListTitle">
                            <h4>
                              <a href="/">G654 Pangdang Granite Pedestal...</a>
                            </h4>
                          </div>
                          <div className="rvwRtngPrgrsStars">
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                          </div>
                          <div className="prodctListPrice wishListPrice pb-0 pt-2 d-flex ">
                            <div className="price">$48.00</div>
                            <div className="discntPrice mx-1">(31% off)</div>
                          </div>
                          <div className="wishListPrice">
                            <Link to="/"> In Stock</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="wishLstCrdBtn">
                          <button className="btnCommon">Add to Cart</button>
                        </div>
                        <div className="wishLstDlet">
                          <Link to="/">
                            <img src="img/deleteIcon.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-5" />
                  <div className="wishListPrdct">
                    <div className="row g-3 d-sm-flex align-items-center">
                      <div className="col-auto">
                        <div className="wishListProMedia">
                          <a href="/product-detail">
                            <div
                              className="wishListProImg"
                              style={{ backgroundImage: `url("img/CatImg5.jpg")` }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col mt-0">
                        <div className="wishListProInfo">
                          <div className="prdctListTitle">
                            <h4>
                              <a href="/">G654 Pangdang Granite Pedestal...</a>
                            </h4>
                          </div>
                          <div className="rvwRtngPrgrsStars">
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                          </div>
                          <div className="prodctListPrice wishListPrice pb-0 pt-2 d-flex ">
                            <div className="price">$48.00</div>
                            <div className="discntPrice mx-1">(31% off)</div>
                          </div>
                          <div className="wishListPrice">
                            <Link to="/"> In Stock</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="wishLstCrdBtn">
                          <button className="btnCommon">Add to Cart</button>
                        </div>
                        <div className="wishLstDlet">
                          <Link to="/">
                            <img src="img/deleteIcon.svg" />
                          </Link>
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

      <Footer />
    </section>
  );
}
export default AccountSetting;
