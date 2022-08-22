import React, { useEffect, useState, useRef } from "react";
import { Link, } from "react-router-dom";
import { Form } from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y } from 'swiper';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../redux/stateActions";
import { Rest } from "../rest";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function Cart() {

    const cart = useSelector(s => s.cart)
    const dispatch = useDispatch()
    
    let cartTotalAmount = 0
    cart?.forEach((i) => {
        let price = i.variant.price
        cartTotalAmount += (price * i.quantity)
    })

    const selectRef1 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
    }, []);
    const selectRef2 = useRef();
    useEffect(() => {
        $(selectRef2.current).niceSelect();
    }, []);
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef3.current).niceSelect();
    }, []);
    let [count, setCount] = useState(0);
    let [cartTotalPrice, setCartTotalPrice] = useState(0);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    const updateCartTotalPrice=(totalPricePerProduct)=>{
        let total = cartTotalPrice + totalPricePerProduct
        setCartTotalPrice(total)
    }
    return (
        <section className="wrapper">
            <Header />
            <article className="wrapper greyDarkBg checkOutBlk py-20">
                <div className="container">
                    <div className="checkOutOuterDiv p-4">
                        <div className="row  ">
                            <div className="col-md">
                                <div className="checkoutMainBlk ">
                                    <div className="whiteBg  pt-4 px-5 pb-4">
                                        <div className="row d-flex align-items-center">
                                            <div className="prdctDtlHdng  pt-3">
                                                <h3>Shopping Cart <span>1 Items</span></h3>
                                                <div className="hdngBrBtm"></div>
                                            </div>
                                        </div>
                                        <div >
                                            <div className="row pt-4 ">
                                                <div className="col-sm-5">
                                                    <div>Product Details</div>
                                                </div>
                                                <div className="col-sm-3 justify-content-between">
                                                    Quantity
                                                </div>
                                                <div className="col-sm-2 d-flex justify-content-between">
                                                    Price
                                                </div>
                                                <div className="col-sm-2 d-flex justify-content-end">
                                                    Total
                                                </div>
                                            </div>
                                            {cart?.map((cartItem, cartItemIndex) => (
                                                <div className="row d-flex justify-content-between pt-5">
                                                    <div className="col-sm-5">
                                                        <div className="cartListPrdct">
                                                            <div className="row g-3 d-sm-flex align-items-center">
                                                                <div className="col-auto">
                                                                    <div className="cartListPrdctProMedia">
                                                                        <a href="/product-detail">
                                                                            <div className="cartListPrdctProImg" style={{ backgroundImage: (cartItem.product.images[0]?(`url("${Rest}/documents/get/${cartItem.product.images[0].documentId}")`):`url("img/productImg1.jpg")`) }}></div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="cartListPrdctProInfo">
                                                                        <div className="prdctListTitle"><h4><a href="/productdetail">{cartItem.product.name}</a></h4></div>
                                                                        <div className="rvwRtngPrgrsStars">
                                                                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                                            <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="prodctListPrice">
                                                                            <Link to="/" > Remove</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="countRow d-flex">
                                                            <button onClick={() => {
                                                                dispatch(stateActions.addCartItem(cartItem.product, cartItem.quantity + 1, cartItem.variant))
                                                            }} className="countBtn ">+</button>
                                                            <div className="countTotal">{cartItem.quantity}</div>
                                                            <button onClick={() => {
                                                                if (cartItem.quantity === 1) {
                                                                    dispatch(stateActions.removeCartItem(cartItem.product._id))
                                                                } else {
                                                                    dispatch(stateActions.addCartItem(cartItem.product, cartItem.quantity - 1, cartItem.variant))
                                                                }
                                                            }} className="countBtn">-</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2 prodctDtlPrice ">
                                                        <div className="cartPrice"> £{cartItem.variant.price}</div>
                                                        {/* <div className="discntPrice">£100.43 Inc VAT</div> */}
                                                    </div>
                                                    <div className="col-sm-2 d-flex justify-content-end  prodctDtlPrice ">
                                                        <div className="carTotalPrice">
                                                            <Link to="/checkout">£{cartItem.quantity*cartItem.variant.price}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <hr />
                                            {/* <div className="row d-flex justify-content-between pt-5">
                                    <div className="col-sm-5">
                                        <div className="cartListPrdct">
                                            <div className="row g-3 d-sm-flex align-items-center">
                                                <div className="col-auto">
                                                    <div className="cartListPrdctProMedia">
                                                        <a href="/product-detail">
                                                            <div className="cartListPrdctProImg" style={{backgroundImage: `url("img/CatImg2.jpg")`}}>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="cartListPrdctProInfo">
                                                        <div className="prdctListTitle"><h4><a href="/">G654 Pangdang Granite Pedestal...</a></h4></div>
                                                        <div className="rvwRtngPrgrsStars">
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="prodctListPrice">
                                                            <Link to="/" > Remove</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="countRow d-flex">                                        
                                                <button onClick={incrementCount} className="countBtn ">+</button>
                                                <div className="countTotal">{count}</div>
                                                <button onClick={decrementCount} className="countBtn">-</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 prodctDtlPrice ">
                                        <div className="cartPrice"> $ 44.00</div>
                                        <div className="discntPrice">(31% off)</div>
                                    </div>
                                    <div className="col-sm-2 d-flex justify-content-end  prodctDtlPrice ">
                                        <div className="carTotalPrice">
                                            <Link to="/">$88.00 </Link>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row d-flex justify-content-between pt-5">
                                    <div className="col-sm-5">
                                        <div className="cartListPrdct">
                                            <div className="row g-3 d-sm-flex align-items-center">
                                                <div className="col-auto">
                                                    <div className="cartListPrdctProMedia">
                                                        <a href="/product-detail">
                                                            <div className="cartListPrdctProImg" style={{backgroundImage: `url("img/CatImg2.jpg")`}}>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="cartListPrdctProInfo">
                                                        <div className="prdctListTitle"><h4><a href="/">G654 Pangdang Granite Pedestal...</a></h4></div>
                                                        <div className="rvwRtngPrgrsStars">
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="prodctListPrice">
                                                            <Link to="/" > Remove</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="countRow d-flex">                                        
                                                <button onClick={incrementCount} className="countBtn ">+</button>
                                                <div className="countTotal">{count}</div>
                                                <button onClick={decrementCount} className="countBtn">-</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 prodctDtlPrice ">
                                        <div className="cartPrice"> $ 44.00</div>
                                        <div className="discntPrice">(31% off)</div>
                                    </div>
                                    <div className="col-sm-2 d-flex justify-content-end  prodctDtlPrice ">
                                        <div className="carTotalPrice">
                                            <Link to="/">$88.00 </Link>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row d-flex justify-content-between pt-5">
                                    <div className="col-sm-5">
                                        <div className="cartListPrdct">
                                            <div className="row g-3 d-sm-flex align-items-center">
                                                <div className="col-auto">
                                                    <div className="cartListPrdctProMedia">
                                                        <a href="/product-detail">
                                                            <div className="cartListPrdctProImg" style={{backgroundImage: `url("img/CatImg2.jpg")`}}>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="cartListPrdctProInfo">
                                                        <div className="prdctListTitle"><h4><a href="/">G654 Pangdang Granite Pedestal...</a></h4></div>
                                                        <div className="rvwRtngPrgrsStars">
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="prodctListPrice">
                                                            <Link to="/" > Remove</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="countRow d-flex">                                        
                                                <button onClick={incrementCount} className="countBtn ">+</button>
                                                <div className="countTotal">{count}</div>
                                                <button onClick={decrementCount} className="countBtn">-</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 prodctDtlPrice ">
                                        <div className="cartPrice"> $ 44.00</div>
                                        <div className="discntPrice">(31% off)</div>
                                    </div>
                                    <div className="col-sm-2 d-flex justify-content-end  prodctDtlPrice ">
                                        <div className="carTotalPrice">
                                            <Link to="/">$88.00 </Link>
                                        </div>
                                    </div>
                                </div>                                
                                <hr/> */}
                                            <div className="backShopBtn">
                                                <h6>
                                                    <Link to="/productdetail" className="d-flex align-items-center" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                                        </svg>
                                                        <span>Back to shop</span></Link>
                                                </h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <div className="sdbrWdgt">
                                    <div className=" checkoutSideProdct sideBarBg ">
                                        <div className="sdbrHdng checkOutSdeHdng mb-4"><h4>Promo Code</h4></div>
                                        <div className="promoCodeBlk">
                                            <Form className="formStyle">
                                                <div className="couponFormCol">
                                                    <input type="text" className="form-control" placeholder="Enter coupon Code" />
                                                    <Link to="/">Check</Link>
                                                </div>
                                                <div className="form-check dbHouzRadio d-flex align-items-center pt-3 pb-2" >
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault8" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault8">
                                                        DBHouz
                                                    </label>
                                                </div>
                                                <div className="prmoCodeInfo py-3">
                                                    <p>Your order is eligible for $200.00 cashback</p>
                                                    <p>Cashback will be added to your wallet </p>
                                                    <p>Dalance as per the offer terms and conditions</p>
                                                </div>
                                                <div className="promoAplyBtn pb-2">
                                                    <button className="btnCommon btnDark ">Apply</button>
                                                </div>
                                            </Form>
                                        </div>
                                        <div className="chckoutPymtSideBrBlk">
                                            <div className="d-flex justify-content-between">
                                                <ul className="cardPymntSideBr">
                                                    {/* <li><b>Promo Code Applied</b><span>$10</span></li> */}
                                                    <li><b>Total Cost</b><span >£{cartTotalAmount}</span></li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row g-0 d-flex justify-content-row pt-2">
                                            <Link to="/checkout" className="btnCommon">Place Order</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="wrapper py-40  simiLarPrdctBlk">
                <div className="container">
                    <div className="mainHeading headingCenter pb-30"><h2>Similar Products</h2>
                    </div>
                    <div className="newsSliderOuter">
                        <div className="similarPrdctSlidr crslCntrls">
                            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={10} slidesPerView={6} centeredSlides={false} loop={false}>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>
                                                    <div className="oferPrice">$65.00</div>
                                                    <div className="discntPrice">(31% off)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="similarItem">
                                        <div className="prdctListItem">
                                            <div className="prdctListMedia">
                                                <div className="prdctListImg" style={{ backgroundImage: `url("img/productImg4.jpg")` }}>
                                                    <div className="prdctListOverlay"></div>
                                                </div>
                                                <div className="prdctHovrCard">
                                                    <Link to="/"><span className="prdctListWishListIcon"><img src="img/wishListIconDark.svg" /></span></Link>
                                                    <Link to="/"><span className="prdctListIcon"><img src="img/prdctListIcon.svg" /></span></Link>
                                                </div>
                                                <div className="prdctHvrBtns">
                                                    <Link to="#" className="btnCommon">Add To Cart</Link>
                                                    <Link to="#" className="btnCommon btnWhite">Buy Now</Link>
                                                </div>
                                            </div>
                                            <div className="prodctListInfoCol text-center">
                                                <div className="prdctListTitle">
                                                    <h4> <Link to="/">Scratch Resistant Prefab Kitchen...</Link></h4>
                                                </div>
                                                <div className="rvwRtngPrgrsStars">
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <i className="fa fa-star ylowStar" aria-hidden="true"></i>
                                                    <span>(981)</span>
                                                </div>
                                                <div className="prdctListInfo">
                                                    <p>Eeiusmod tempor incididunt</p>
                                                </div>
                                                <div className="prodctDtlPrice d-flex justify-content-center">
                                                    <div className="price">$69.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </article>
            <section>

                <article className="homeAboutBlk wrapper pb-4">
                    <div className="container">
                        <div className="abtHomeInfo">
                            <h3>Different Types of Marble  </h3>
                            <p>Quartzite Marble Collection | Onyx Marble Collection | Granite Marble Collection | White Marble | Beige Marble | Grey Marble | Green Marble |
                                Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble  | Onyx Marble Collection | Granite Marble Collection | White Marble |
                                Beige Marble | Grey Marble | Green Marble | Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble</p>
                            <h3>Other Categories</h3>
                            <p>Bathroom Tiles | Kitchen Tiles | Living Room Tiles | Bedroom Tiles | Outdoor Tiles | Commercial Tiles | Ceramic Wall Tiles |
                                Vitrified Double Charge Tiles | Made In Italy Tiles | Floor Tiles | Wall Tiles | Marble | Mosaico</p>
                            <h3>Product</h3>
                            <p>Quartzite Marble Collection | Onyx Marble Collection | Granite Marble Collection | White Marble | Beige Marble | Grey Marble | Green Marble |
                                Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble  | Onyx Marble Collection | Granite Marble Collection | White Marble |
                                Beige Marble | Grey Marble | Green Marble | Pink Marble | Red Marble | Blue Marble | Brown Marble | Black Marble</p>
                        </div>
                    </div>
                </article>
            </section>

            <Footer />
        </section>
    );
}
export default Cart;