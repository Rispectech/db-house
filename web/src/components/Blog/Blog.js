import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import MainHeading from '../MainHeading';
function Blog() {  
  return (
    <article className="newsBlock wrapper">
    <div className="container">
    <div className="mainHeading headingCenter pb-30">
          <MainHeading
              Heading="Our Blog"
              HeadingParah="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />       
        </div>
      <div className="newsSliderOuter">
        <div className="newsSlider crslCntrls">
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation spaceBetween={30} 
            centeredSlides={false}
            slidesPerView={4} 
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            loop={false}
            >
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
                  <div className="newsSlideMedia">
                    <div className="newsImg" style={{backgroundImage: `url("img/blog2.png")`}}>
                      <div className="newsOverlay"></div>
                    </div>
                    <span className="newsDate">01</span>
                    <span className="newsMonth">Sep</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
                  <div className="newsSlideMedia">
                    <div className="newsImg" style={{backgroundImage: `url("img/blog3.png")`}}>
                      <div className="newsOverlay"></div>
                    </div>
                    <span className="newsDate">07</span>
                    <span className="newsMonth">Aug</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
                  <div className="newsSlideMedia">
                    <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                      <div className="newsOverlay"></div>
                    </div>
                    <span className="newsDate">10</span>
                    <span className="newsMonth">Sep</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
                  <div className="newsSlideMedia">
                    <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                      <div className="newsOverlay"></div>
                    </div>
                    <span className="newsDate">28</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="newsSlideItem">
                <Link to="/bloglist">
                  <div className="newsSlideMedia">
                    <div className="newsImg" style={{backgroundImage: `url("img/blog1.png")`}}>
                      <div className="newsOverlay"></div>
                    </div>
                    <span className="newsDate">28</span>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </article>   
  );
}
export default Blog;