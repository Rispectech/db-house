import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImportCollection2 from "./../components/Home/ImportCollection2";
import MaterialCat from "./../components/Home/MaterialCat";
import HomeAbout from "../components/Home/HomeAbout";
import { RestAdmin } from "../rest";
import { useSelector } from "react-redux";

function Category() {

    const navigate = useNavigate()
    const location = useLocation()
    let category = location.state?.category
    let subcategories = location.state?.subcategories
    const categories = useSelector(s => s.categories)

    const linkProductList = (category) => {
        navigate('/productlist',{ state: {category} })
    }

    return (
        <section className="wrapper " >
            <Header />
            <article className="categoryInrBlk hdrBrNone  wrapper ">
                <div className="greyBg2 py-4 mb-5">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col">
                                <div className="bredCrumbHdng">
                                    <h3>{category?(category.name):'Category List'}</h3>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="breadcrumbsCol py-20">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item"><a>Categories</a></li>
                                            {category && (
                                                <li className="breadcrumb-item active">{category?.name}</li>
                                            )}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="NavCatInr">
                        <ul>
                            {categories?.map(cat => (
                                <li>
                                    <div 
                                        onClick={() => { navigate('/productlist', { state: cat }) }} 
                                        style={{ color: '#333', cursor: 'pointer', background: ((category?.name === cat.category.name) ? '#F2672A' : '#eee') }}>
                                        {cat.category.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/*<ul>
                    
                        <li>
                        <NavLink to="/productlist" className="active">Stone Blocks</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Stone Tiles & Slabs</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Stone Sculpture</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">White Jal Marble</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Brazilian White</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Granite</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Kitchen Top</NavLink>
                        </li>
                        <li>
                        <NavLink to="/productlist">Interior Stone</NavLink>
                        </li>
                    </ul>
                       */}
                    </div>
                </div>
            </article>
            <article className="wrapper categoryRowBlk py-20">
                <div className="container">
                    <div className="catgySideBarOuterDiv mt-4">
                        <div className="row ">
                            <div className="col-sm-12">
                                <div className="catgryListRow">
                                    <div className="row mb-4">
                                        {subcategories?.map((subcategory) => (
                                            <div className="col-sm">
                                                <div className="categoryListItem">
                                                    <a style={{cursor: "pointer"}} onClick={()=>{linkProductList(subcategory.category)}}>
                                                        <div className="categoryListMedia">
                                                            <div className="categoryListImg" style={{ backgroundImage: `url("img/catListImg${Math.ceil(Math.random() * 4)}.jpg")` }}>
                                                                <div className="categoryListOverlay"></div>
                                                            </div>
                                                            <span className="categoryListBtn">
                                                                <a style={{cursor: "pointer"}} onClick={()=>{linkProductList(subcategory.category)}} className="btnCommon">View Product</a>
                                                            </span>
                                                        </div>
                                                        <div className="categoryListTitle">
                                                            <h4>{subcategory?.name}</h4>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <ImportCollection2 />
            <MaterialCat />
            <HomeAbout />
            <Footer />
        </section>
    );
}
export default Category;