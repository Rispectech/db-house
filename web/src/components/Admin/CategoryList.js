import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { Table } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import product3 from "../../assets/images/productImg3.jpg";
import { Rest, RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
import * as moment from 'moment'
import { PuffLoader } from "react-spinners";

window.jQuery = window.$ = $;
require("jquery-nice-select");
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function CategoryList() {

    const navigate = useNavigate();
    const isAdmin = useAdminAuth(true);
    const [statusUpdating, setStatusUpdating] = useState(false);
    const [categories, setCategories] = useState();

    const selectRef1 = useRef();
    const selectRef2 = useRef();
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
        loadData();
    }, []);

    const loadData = async () => {
        let categories = (await RestAdmin.getAllCategories());
        setCategories(categories);
    }

    const editCategoryAction = (category) => {
        navigate('/admin/editcategory', { state: { category } })
    }
    const changeCategoryStatusAction = async (category) => {
        setStatusUpdating(true);
        await RestAdmin.updateCategory({
            ...category,
            status: (category.status == "INACTIVE") ? "ACTIVE" : "INACTIVE"
        });
        loadData();
        setStatusUpdating(false);
    }
    const deleteCategoryAction = async (categoryId) => {
        if (confirm("Do you want to delete category from system?")) {
            let result =  await RestAdmin.checkCategoryData(categoryId)
            if(result.totalSubCategories > 0 || result.totalProducts > 0) {
                alert(`Cannot delete category. There are ${result.totalSubCategories} categories and ${result.totalProducts} products.`)
            } else {
                await RestAdmin.deleteCategory(categoryId);
                loadData();
            }
        }
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
                                                <h4>Category List</h4>
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
                                                <Link to="/admin/addcategory" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hrStyle pb-5" ><hr /></div>
                                    <div className="prdctListTble common-table">
                                        {!categories && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <PuffLoader />
                                        </div>}

                                        {categories?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            No Categories Found. Please Add Categories.
                                        </div>)}
                                        {categories?.length > 0 && (
                                            <Table className="table">
                                                <thead>
                                                    <tr>
                                                        <th><input className="form-check-input" type="checkbox" /></th>
                                                        <th>Image</th>
                                                        <th>Category</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th align="center" width="150">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categories.map(category => {
                                                        return (<tr className="whitebgRow">
                                                            <td>
                                                                <input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>
                                                                <div className="prdctImg">
                                                                    <img src={category.imageDocumentId ? `${Rest}/documents/get/${category.imageDocumentId}` : product3} alt="" height="80" />
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div className="pdrctCat">
                                                                    {category.name}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="SubCat">
                                                                    {moment(category.createdAt).format("DD MMMM")}
                                                                </div>
                                                            </td>
                                                            <td className="status">
                                                                <button className={(category?.status?.toLowerCase() == "active") ? "btnCommon" : "btnDark"} onClick={() => { changeCategoryStatusAction(category) }} disabled={statusUpdating}>{category.status}</button>
                                                            </td>
                                                            <td className="actions">
                                                                <div className="tbl-actn">
                                                                    <ul>
                                                                        <li className="edit-btn">
                                                                            <div className="" onClick={() => { editCategoryAction(category); }}>
                                                                                <img src={editIcon} alt="" height="18" />
                                                                                <span><img src={editWhite} alt="" height="18" /></span>
                                                                            </div>
                                                                        </li>
                                                                        <li className="delete-btn">
                                                                            <div className="">
                                                                                <a onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    deleteCategoryAction(category._id);
                                                                                }}>
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
                                            </Table>
                                        )}
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
export default CategoryList;