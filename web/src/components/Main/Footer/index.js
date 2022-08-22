import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer( props) {
  return (
    <footer className="ftrBlock wrapper">
      <article className="ftrPaymntRow darkBg py-40">
        <Container>
          <Row className="g-4">
            <Col lg md={6}>
              <div className="ftrPaymntRow">
                <div className="row align-items-center justify-content-between">
                      <div className="col-sm-auto">
                        <div className="ftrPaymntImg">
                          <img src="img/freeShipingIcon.svg"/>
                        </div>										  			
                      </div>
                      <div className="col-sm">
                        <div className="ftrPaymntInfo">
                          <h4 className="ftrPaymntTitle">Free Shipping.</h4>
                          <p className="">No one rejects, dislikes.</p>
                        </div>										  			
                      </div>
                </div>
              </div>
            </Col> 
            <Col lg md={6}>
              <div className="ftrPaymntRow">
                <div className="row align-items-center justify-content-between">
                      <div className="col-sm-auto">
                        <div className="ftrPaymntImg">
                          <img src="img/supportIcon.svg"/>
                        </div>										  			
                      </div>
                      <div className="col-sm">
                        <div className="ftrPaymntInfo">
                          <h4 className="ftrPaymntTitle">24/7 Support.</h4>
                          <p className="">It has survived not only.</p>
                        </div>										  			
                      </div>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrPaymntRow">
                <div className="row align-items-center justify-content-between">
                      <div className="col-sm-auto">
                        <div className="ftrPaymntImg">
                          <img src="img/paymentIcon.svg"/>
                        </div>										  			
                      </div>
                      <div className="col-sm">
                        <div className="ftrPaymntInfo">
                          <h4 className="ftrPaymntTitle">Online Payment.</h4>
                          <p className="">All the Lorem Ipsum on.</p>
                        </div>										  			
                      </div>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrPaymntRow">
                <div className="row align-items-center justify-content-between">
                      <div className="col-sm-auto">
                        <div className="ftrPaymntImg">
                          <img src="img/fastDeliveryIcon.png"/>
                        </div>										  			
                      </div>
                      <div className="col-sm">
                        <div className="ftrPaymntInfo">
                          <h4 className="ftrPaymntTitle">Fast Delivery.</h4>
                          <p className="">Many desktop page now.</p>
                        </div>										  			
                      </div>
                </div>
              </div>
            </Col>           
          </Row>
        </Container>
      </article>
      <article className="ftrMainBlk py-40">
        <Container>
          <Row >
            <Col lg md={6}>
              <div className="ftrColBox">
                <div className="ftrHdng">
                  <h5>Other Links</h5>
                </div>
                <div className="ftrLisItem">
                  <ul>
                    <li><Link to="/myaccount">My Account</Link></li>
                    <li><Link to="/orderhistory">Order History</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/accountsetting">Account Setting</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrColBox">
                <div className="ftrHdng">
                  <h5>Useful Links</h5>
                </div>
                <div className="ftrLisItem">
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Contact Us</Link></li>                  
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/error">404 Page</Link></li>
                    <li><Link to="/thanku">Thanku </Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrColBox">
                <div className="ftrHdng">
                  <h5>Customer Support</h5>
                </div>
                <div className="ftrLisItem">
                  <ul>
                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                    <li><Link to="/termconditions">Terms & Conditions</Link></li>
                    <li><Link to="/merchant/login">Merchant Login </Link></li>
                    <li><Link to="/merchant/dashboard">Merchant Dashboard</Link></li>
                    <li><Link to="/admin/login">Admin Login </Link></li>
                    <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrColBox">
                <div className="ftrHdng">
                  <h5>Contact Information</h5>
                </div>
                <div className="ftrAddressDiv">
                  <p><b>Address</b>: A random street, number London</p>
                  <p><b>Phone</b>: <Link to="/">+0123 456 7890</Link></p>
                  <p><b>Email</b>: <Link to="/">+0123 456 7890</Link></p>
                  <p><b>Social Links</b>:
                    <Link to="https://www.facebook.com/" target="_blank">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className="ftrColBox">
                <div className="ftrHdng">
                  <h5>Signup Newsletter</h5>
                </div>
                <div className="ftrFormBlk">
                  <Form className="ftrForm">
                    <div className="form-group">
                      <input type="text" placeholder="Email Address" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <button className="btnCommon">Subscribe</button>
                    </div>
                  </Form>
                </div>
                <div className="ftrHdng">
                  <h5>app download </h5>
                </div>
                <div className="appStoreDiv">
                  <Link to="/">
                    <img src="img/playstore.png" alt="Play Store"/>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
      <article className="darkBg py-20 textWhite copyRightBlk text-center">
      © 2022 DBHouz  All rights reserved. Design by <Link to="/">ROI Bundle</Link>
      </article>   
    </footer>
  );
}
export default Footer;