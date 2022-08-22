import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label } from "react-bootstrap";
import AdSidebar from './Sidebar';
import Style from './AdminStyle';
import AdNavBar from './NavBar';
import $ from "jquery";
import plus from "../../assets/images/plus.svg";
import view from "../../assets/images/icons/view-icon.png";
import viewWhite from "../../assets/images/icons/view-white-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import product1 from "../../assets/images/productImg1.jpg";
import { Rest, RestAdmin, RestMerchant } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function AdminProductList() {

    const navigate = useNavigate();
    const isAdmin = useAdminAuth(true);
    const [statusUpdating, setStatusUpdating] = useState(false);
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [subcategories, setSubCategories] = useState();

    const selectRef2 = useRef();
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
    }, []);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        let products = (await RestAdmin.getAllProducts());
        let result = (await RestAdmin.getAllCategoriesData());
        let categories = []
        let subCategories = []
        result.data.forEach(d => {
            categories.push(d.category)
            subCategories.push(...d.subCategories)
        })
        setCategories(categories)
        setSubCategories(subCategories);
        setProducts(products);
    };
    const editProductBtnAction = (product) => {
        navigate('/admin/EditProduct', { state: { product } })
    }
    const editProductVariantsBtnAction = (product) => {
        navigate('/admin/EditProductVariants', { state: { product } })
    }
    const getCategoryName = (categoryId) => {
        return categories?.find(c => c._id === categoryId)?.name
    }
    const getSubCategoryName = (subCategoryId) => {
        return subcategories?.find(c => c._id === subCategoryId)?.name
    }
    const handleStatusChange = async (product) => {
        setStatusUpdating(true);
        await RestAdmin.updateProduct({
            ...product,
            status: (product.status == "INACTIVE") ? "ACTIVE" : "INACTIVE"
        });
        setStatusUpdating(false);
        loadData();
    }

    return (
        <>
            <Style />
            <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <AdSidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <AdNavBar />
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
                                                <Link to="/admin/addproduct" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
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
                                                        <th >Product Name</th>
                                                        <th className="text-center">Image</th>
                                                        <th className="text-center">Variants</th>
                                                        <th className="text-center">Category</th>
                                                        <th className="text-center">Sub Category</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map(product => (
                                                        <tr className="whitebgRow">
                                                            <td>
                                                                <input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>
                                                                <div className="prodctTitle"><Link to="/">{product.name}</Link></div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="prdctImg text-center">
                                                                    {(!product.images.length && !product.images[0]) && (
                                                                        <div style={{ height: 80, width: 80, background: "#ddd", borderRadius: 10, color: "#aaa" }} className="d-flex align-items-center justify-content-center mx-auto">
                                                                            None
                                                                        </div>
                                                                    )}
                                                                    {(product.images.length > 0 && product.images[0]) && (
                                                                        <img src={Rest + "/documents/get/" + product.images[0].documentId} alt="" width="80" height="80" />
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <button
                                                                    className="btn btn-secondary btn-sm d-flex justify-content-center align-items-center mx-auto"
                                                                    onClick={() => { editProductVariantsBtnAction(product); }}>
                                                                    {product.variants.length}
                                                                    <span className="ms-2"><img src={editWhite} alt="" height="12" /></span>
                                                                </button>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="pdrctCat">
                                                                    {getCategoryName(product.categoryId)}
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="SubCat">
                                                                    {getSubCategoryName(product.subCategoryId)}
                                                                </div>
                                                            </td>
                                                            <td className="status text-center">
                                                                <button className={(product?.status.toLowerCase() == "active") ? "btnCommon" : "btnDark"} onClick={() => { handleStatusChange(product) }} disabled={statusUpdating}>{product.status}</button>
                                                            </td>
                                                            <td className="actions text-center">
                                                                <div className="tbl-actn text-center">
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
                                                                            <div className="" onClick={() => { editProductBtnAction(product); }}>
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
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>




    );
}
export default AdminProductList;  
