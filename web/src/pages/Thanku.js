import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link,} from "react-router-dom";
function Thanku() {
  return (
    <section className="wrapper">
      <Header/>        
        <article className="errorPageBlk wrapper pb-5">
          <div className="container">
              <div className="text-center">
                  <div className="errorMedia py-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="#228B22" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                  </svg>
                  </div>
                  <div className="errorInfo pb-3">
                      <h2>Your order has been placed!</h2>
                      <p>Your order has been successfully processed!</p>
                      <p> You can view your order history by going to the my account page and by clicking on <Link to="/contact">history.</Link></p>
                      <p>If your purchase has an associated download, you can go to the account downloads page to view them.</p>
                      <p>Please direct any questions you have to the <Link to="/contact">store owner.</Link></p>
                      <p> Thanks for shopping with us online!</p>
                  </div>
                
              </div>
          </div>
        </article>
      <Footer/>
    </section>
  );
}
export default Thanku;