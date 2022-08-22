import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import Sidebar from './Sidebar';
import Style from './AdminStyle';
import NavBar from './NavBar';
import $ from "jquery";
import plus from "../../assets/images/plus.svg";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import product1 from "../../assets/images/productImg1.jpg";
import product2 from "../../assets/images/productImg2.jpg";
import product3 from "../../assets/images/productImg3.jpg";
import product4 from "../../assets/images/productImg4.jpg";
import product5 from "../../assets/images/productImg5.jpg";
import { Rest, RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
import * as moment from 'moment'
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");


function SubCategoryList() {

    const navigate = useNavigate();
    const isAdmin = useAdminAuth(true);
    const [categories, setCategories] = useState();
    const [subCategories, setSubCategories] = useState();
    const [statusUpdating, setStatusUpdating] = useState(false);

    const selectRef1 = useRef();
    const selectRef2 = useRef();
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
    }, []);

    useEffect(() => {
        loadData();
    }, []);

    const editSubCategoryAction = (subCategory) => {
        navigate('/admin/editSubcategory', { state: { subCategory } })
    }

    const loadData = async () => {
        let result = (await RestAdmin.getAllCategoriesData());
        let categories = []
        let subCategories = []
        result.data.forEach(d => {
            categories.push(d.category)
            subCategories.push(...d.subCategories)
        })
        setCategories(categories)
        setSubCategories(subCategories);
    };

    const deleteSubCategoryAction = async (subCategoryId) => {
        if (confirm("Do you want to delete sub category from system?")) {
            let result =  await RestAdmin.checkSubCategoryData(subCategoryId)
            if(result.totalProducts > 0) {
                alert(`Cannot delete Sub Category. There are total ${result.totalProducts} products.`)
            } else {
                await RestAdmin.deleteSubCategory(subCategoryId);
                loadData();
            }
        }
    }

    const statusChangeAction = async (subcategory) => {
        setStatusUpdating(true);
        await RestAdmin.updateSubCategory({
            ...subcategory,
            status: (subcategory.status == "INACTIVE") ? "ACTIVE" : "INACTIVE"
        });
        setStatusUpdating(false);
        loadData();
    }

    let getCategory = (categoryId) => {
        return categories.find(c => c._id === categoryId)
    }

    return (
        <>
            <Style />
            <article id="root" className="mainRoot">
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
                                                <h4>Sub Category List</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" className="form-control" placeholder="Search Category" />
                                        </div>
                                        <div className="col-auto">
                                            <div className="prdctsortCol">
                                                <div className="form-group">
                                                    <select ref={selectRef3} className="wide">
                                                        <option value="Featured">Sort By</option>
                                                        <option value="10">Active</option>
                                                        <option value="25">In Active</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="prdctsortCol">
                                                <div className="form-group">
                                                    <select ref={selectRef2} className="wide">
                                                        <option value="Featured">Type</option>
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
                                                <Link to="/admin/AddSubCategory" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hrStyle pb-5" ><hr /></div>
                                    <div className="prdctListTble common-table">
                                        {!subCategories && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <PuffLoader />
                                        </div>}

                                        {subCategories?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            No Subcategory Found. Please Add Subcategory.
                                        </div>)}

                                        {subCategories?.length > 0 && (
                                            <Table className="table">
                                                <thead>
                                                    <tr>
                                                        <th><input className="form-check-input" type="checkbox" /></th>
                                                        <th>Image</th>
                                                        <th>Category</th>
                                                        <th>Sub Category</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th align="center" width="150">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {subCategories.map(subcategory => (
                                                        <tr className="whitebgRow" key={subcategory._id}>
                                                            <td>
                                                                <input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>
                                                                <div className="prdctImg">
                                                                    <img src={subcategory.imageDocumentId ? `${Rest}/documents/get/${subcategory.imageDocumentId}` : product3} alt="" height="80" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="pdrctCat">
                                                                    {getCategory(subcategory.categoryId)?.name}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="pdrctCat">
                                                                    {subcategory.name}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="SubCat">
                                                                    {moment(subcategory.createdAt).format("DD MMMM")}
                                                                </div>
                                                            </td>
                                                            <td className="status">
                                                                <button className={(subcategory?.status.toLowerCase() == "active") ? "btnCommon" : "btnDark"} onClick={() => { statusChangeAction(subcategory) }} disabled={statusUpdating}>{subcategory.status}</button>
                                                            </td>
                                                            <td className="actions">
                                                                <div className="tbl-actn">
                                                                    <ul>
                                                                        <li className="edit-btn">
                                                                            <div className="" onClick={() => { editSubCategoryAction(subcategory); }}>
                                                                                <img src={editIcon} alt="" height="18" />
                                                                                <span><img src={editWhite} alt="" height="18" /></span>
                                                                            </div>
                                                                        </li>
                                                                        <li className="delete-btn">
                                                                            <div className="">
                                                                                <a onClick={(e) => { e.preventDefault(); deleteSubCategoryAction(subcategory._id); }}>
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
                                                        </tr>))};
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
export default SubCategoryList;