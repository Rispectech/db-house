import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
function BlogList() {
  return (
    <section>
      <Header/>
        <article className="categoryInrBlk hdrBrNone wrapper">
            <div className="greyBg2 py-4 mb-5">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col">
                                <div className="bredCrumbHdng">
                                    <h3>Blog List</h3>
                                </div>
                            </div>
                            <div className="col-auto">
                            <div className="breadcrumbsCol py-20">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active"><a href="/">Blog </a></li>
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
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog2.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog3.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="row my-3 ">
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog2.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog3.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog3.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="row my-3 pb-4 ">
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog2.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="newsSlideItem">
                        <Link to="/blogdetail">
                        <div className="newsSlideMedia">
                            <div className="newsImg" style={{backgroundImage: `url("img/blog3.png")`}}>
                            <div className="newsOverlay"></div>
                            </div>
                            <span className="newsDate">28</span>
                            <span className="newsMonth">Feb</span>
                        </div>
                        <div className="newsTitle">
                            <h4>Eeiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                        </div>
                        <div className="newsInfo">
                            <p>Interdum odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui
                            diam, nec accumsan mauris consequat sed. Interdum et malesuada fames</p>
                        </div>
                        </Link>
                    </div>
                </div>
              </div>
          </div>
        <div className="pgntnOuter text-center pt-3 pb-5">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" role="button" tabIndex="0" href="#">
                        <span aria-hidden="true">‹</span>
                    <span className="visually-hidden">Previous</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" role="button" tabIndex="0" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" role="button" tabIndex="0" href="#">
                    <span aria-hidden="true">2</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" role="button" tabIndex="0" href="#">3</a>
                </li>
                    <li className="page-item active">
                    <span className="page-link">4<span className="visually-hidden">(current)</span></span>
                </li>                                    
                <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                    <span aria-hidden="true">…</span>
                    <span className="visually-hidden">More</span></a>
                </li>
                <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">22</a></li>
                <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                    <span aria-hidden="true">›</span><span className="visually-hidden">Next</span></a>
                </li>
            </ul>
        </div>   
    </article>
    <Footer/>
    </section>
  );
}
export default BlogList;