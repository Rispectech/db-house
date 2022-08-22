import React, { useEffect, useState,useRef } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, NavLink,} from "react-router-dom";
function ErrorPage() {
  return (
    <section className="wrapper">
      <Header/>
        
        <article className="errorPageBlk wrapper pb-5">
        <div className="container">
            <div className="text-center">
                <div className="errorMedia py-4">
                    <img src="img/404Icon.jpg"/>
                </div>
                <div className="errorInfo pb-3">
                    <h2>Oopsie! Something's missing...</h2>
                    <p>it seems like we donot find what you searched.</p>
                    <p>The page you were looking for doesn't exits, isn't available or was loading incorrectly.</p>
                </div>
                <div className="erorBtn ">
                    <Link className="btnCommon btnDark " to="/">
                       <span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#fff" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
</span>Back to Home</Link></div>
            </div>
        </div>
      </article>     
  
     
      <Footer/>
    </section>
  );
}
export default ErrorPage;