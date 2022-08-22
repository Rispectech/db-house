import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function HomeSlider() {  
  return (
    <article className="sliderBg wrapper py-40">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="sliderBlock">
              <div className="mainSlider-outer mainSlider crslCntrls">
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true}>
                  <SwiperSlide>
                    <div className="mainSldrSlide" style={{backgroundImage: `url("img/slide1.png")`}}>
                      <div className="slideContent textWhite">
                        <h1 className="textWhite">Remarkable Quality</h1>
                        <p>Marble and Granite</p>
                        <div className="sliderBtn">
                        <Link to="/productdetail" className="btnCommon">Show Now</Link>
                        </div>                        
                      </div>
                      <div className="mainSldrOverlay"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="mainSldrSlide" style={{backgroundImage: `url("img/slide1.png")`}}>
                      <div className="slideContent textWhite">
                        <h1 className="textWhite">Remarkable Quality</h1>
                        <p>Marble and Granite</p>
                        <div className="sliderBtn">
                        <Link to="/productdetail" className="btnCommon">Show Now</Link>
                        </div>                        
                      </div>
                      <div className="mainSldrOverlay"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="mainSldrSlide" style={{backgroundImage: `url("img/slide1.png")`}}>
                      <div className="slideContent textWhite">
                        <h1 className="textWhite">Remarkable Quality</h1>
                        <p>Marble and Granite</p>
                        <div className="sliderBtn">
                        <Link to="/productdetail" className="btnCommon">Show Now</Link>
                        </div>                        
                      </div>
                      <div className="mainSldrOverlay"></div>
                    </div>  
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="slideAdBnrCol">
                <Link to="/">
                  <div className="slideAdBnr" style={{backgroundImage: `url("img/banerSlide1.png")`}}>
                    <h3>Kitchen Top, <br/>Bath Top, Sink</h3>
                  </div>
                </Link>
              </div>              
              <div className="slideAdBnrCol">
                <Link to="/">
                  <div className="slideAdBnr" style={{backgroundImage: `url("img/banerSlide2.png")`}}>
                    <h3>Interior Stone <br/>Products</h3>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </article>    
  );
}

export default HomeSlider;