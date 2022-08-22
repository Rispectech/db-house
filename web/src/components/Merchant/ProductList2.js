import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label } from "react-bootstrap";
import Sidebar from './SideBar';
import Style from './DashboardStyle';
import NavBar from './NavBar';
import $ from "jquery";
import plus from "../../assets/images/plus.svg";
import view from "../../assets/images/icons/view-icon.png";
import viewWhite from "../../assets/images/icons/view-white-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import product1 from "../../assets/images/productImg1.jpg";
import product2 from "../../assets/images/productImg2.jpg";
import product3 from "../../assets/images/productImg3.jpg";
import product4 from "../../assets/images/productImg4.jpg";
import product5 from "../../assets/images/productImg5.jpg";
import { Rest, RestAdmin, RestMerchant } from "../../rest";
import Category from "../../pages/Category";
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");


function ProductList2() {


    const selectRef2 = useRef();
    useEffect(() => {
        $(selectRef2.current).niceSelect();
    }, []);

    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef3.current).niceSelect();
    }, []);

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [subcategories, setSubCategories] = useState();

    const navigate = useNavigate();

    const editProduct = (product) => {
        navigate('/merchant/EditProduct', { state: { product } })
    }

    let refreshProducts = () => {
        RestMerchant.getAllProducts().then((_products) => {
            console.log({ _products });
            setProducts(_products.products);
            setCategories(_products.categories);
            setSubCategories(_products.subcategories);
        }).catch(console.error)
    }

    useEffect(() => refreshProducts(), []);

    const getCategoryName = (categoryId) => {
        return categories?.find(c => c._id === categoryId)?.name
    }

    const getSubCategoryName = (subCategoryId) => {
        return subcategories?.find(c => c._id === subCategoryId)?.name
    }

    const [statusUpdating, setStatusUpdating] = useState(false);

    const handleStatusChange = async (product) => {
        setStatusUpdating(true);
        console.log("handling")
        await RestAdmin.updateProduct({ ...product, status: (product.status == "INACTIVE") ? "ACTIVE" : "INACTIVE" });
        setStatusUpdating(false);
        refreshProducts();
    }

    return (
        <>
            <Style />
            <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <NavBar />
                            </div>
                            <div className="container-fluid ">
                                <div className="cardFull p-4">
                                    <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>Product List</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        <div className="col-auto">
                                            <div className="prdctsortCol">
                                                <div className="form-group">
                                                    <select ref={selectRef3} className="wide">
                                                        <option value="Featured">--Select--</option>
                                                        <option value="10">Category</option>
                                                        <option value="25">Sub Category</option>
                                                        <option value="50">Product Name</option>
                                                        <option value="100">Price</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="prdctsortCol">
                                                <div className="form-group">
                                                    <select ref={selectRef2} className="wide">
                                                        <option value="Featured">05</option>
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="addPrdctBtn">
                                                <Link to="/merchant/addproduct" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hrStyle pb-5" ><hr /></div>
                                    <div className="prdctListTble common-table table-responsive">
                                        {!products && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <PuffLoader />
                                        </div>}

                                        {products?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            No products Found. Please add products.
                                        </div>)}

                                        {products?.length > 0 && (
                                            <Table className="table">
                                                <thead>
                                                    <tr>
                                                        <th><input className="form-check-input" type="checkbox" /></th>
                                                        <th >ID</th>
                                                        <th >Product Name</th>
                                                        <th>Image</th>
                                                        <th>Category</th>
                                                        <th>Sub Category</th>
                                                        <th>Variant</th>
                                                        <th>Status</th>
                                                        <th align="center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map(product => {
                                                        return (<tr className="whitebgRow">
                                                            <td>
                                                                <input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>{product._id}</td>

                                                            <td>
                                                                <div className="prodctTitle"><a>{product.name}</a></div>
                                                            </td>
                                                            <td>
                                                                <div className="prdctImg">
                                                                    <img src={product.images[0] ? `${Rest}/documents/get/${product.images[0].documentId}` : product1} alt="" height="80" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="pdrctCat">
                                                                    {getCategoryName(product.categoryId)}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="SubCat">
                                                                    {getSubCategoryName(product.subCategoryId)}
                                                                </div>
                                                            </td>
                                                            <td className="price">
                                                                {product.variants.length}
                                                            </td>
                                                            <td className="status">
                                                                <button className={(product?.status.toLowerCase() == "active") ? "btnCommon" : "btnDark"} onClick={() => { handleStatusChange(product) }} disabled={statusUpdating}>{product.status}</button>
                                                                {/* <Link to="/" className="btnCommon">{product.status}</Link> */}
                                                            </td>
                                                            <td className="actions">
                                                                <div className="tbl-actn">
                                                                    <ul>
                                                                        <li className="view-btn">
                                                                            <div className="">
                                                                                <a href="/merchant/viewproduct">
                                                                                    <img src={view} alt="" height="18" />
                                                                                    <span><img src={viewWhite} alt="" height="18" /></span>
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="edit-btn">
                                                                            <div className="" onClick={() => { editProduct(product); }}>
                                                                                <a>
                                                                                    <img src={editIcon} alt="" height="18" />
                                                                                    <span><img src={editWhite} alt="" height="18" /></span>
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="delete-btn">
                                                                            <div className="">
                                                                                <a href="/">
                                                                                    <img src={deleteIcon} alt="" height="18" />
                                                                                    <span>
                                                                                        <img src={deleteWhite} alt="" height="18" />
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>)
                                                    })}

                                                </tbody>
                                            </Table>)}
                                    </div>
                                    {/*<div className="pgntnOuter text-center pt-3 ">
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
									</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>




    );
}
export default ProductList2;  
