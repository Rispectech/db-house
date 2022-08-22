import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Style from './AdminStyle';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import useAdminAuth from "../../hooks/useAdminAuth";
import { RestAdmin } from "../../rest";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const InitialFormData = {
    name: '',
    description: '',
    email: "",
    metaTagTitle: "",
    metaTagDescription: "",
    metaTagKeywords: "",
};

function AdminAddCategory() {

    const navigate = useNavigate();
    const isAdmin = useAdminAuth(true);

    const [formData, setFormData] = useState(x => { return { ...InitialFormData } });
    const [disabled, setDisabled] = useState(false);
    const [imageToUpload, setImageToUpload] = useState({ imageUrl: "", image: null });
    const [formErrors, setFormErrors] = useState({
        categoryName: false,
        categoryDescription: false,
        categoryImage: false
    })

    const uploadPicture = (e) => {
        setImageToUpload({
            imageUrl: URL.createObjectURL(e.target.files[0]),
            image: e.target.files[0]
        })
    };
    useEffect(() => {
        if (!imageToUpload.imageUrl) {
            imageToUpload.imageUrl = upload;
        }
    }, [imageToUpload]);

    const selectRef1 = useRef();
    const selectRef2 = useRef();
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
    }, []);

    const handleChange = ({ nativeEvent }) => {
        let _formData = formData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData({ ..._formData });
    }

    const handleSubmit = async (e) => {
        let { name, description, metaTagTitle, metaTagKeywords, metaTagDescription } = formData;
        let isError = false;
        let formErrors = {
            categoryName: false,
            categoryDescription: false,
            categoryImage: false
        }
        if (!name || !name.length || name.length < 3) {
            formErrors.categoryName = `Please enter a valid Name`
            isError = true
        }
        if (!description || !description.length || description.length < 10) {
            formErrors.categoryDescription = `Please enter a valid Description`
            isError = true
        }
        if (!imageToUpload || !imageToUpload.image) {
            formErrors.categoryImage = `Please upload a picture`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            setDisabled(true);
            try {
                let data = {
                    name,
                    description,
                    seo: {
                        metaTagTitle,
                        metaTagDescription,
                        metaTagKeywords
                    },
                    status: "INACTIVE"
                }
                const createCategoryResponse = await RestAdmin.createCategory({ ...data });
                if (imageToUpload.image && createCategoryResponse.category && createCategoryResponse.category._id) {
                    const categoryFormData = new FormData();
                    categoryFormData.append("image", imageToUpload.image);
                    categoryFormData.append("categoryId", createCategoryResponse.category._id);
                    const createCategoryImageResponse = await RestAdmin.createCategoryImage(categoryFormData);
                }
                window.setTimeout(() => {
                    setFormData({ ...InitialFormData })
                    setImageToUpload({})
                    navigate(`/admin/categorylist`)
                    setDisabled(false);
                }, 10);
            } catch(error) {
                console.error(error)
                setDisabled(false);
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
                            <div className="container-fluid  mt-4">
                                <div className="cardFull  Bgwhite Shadow radius20 p-4 mx-4">
                                    <div className="addPrdctRow">
                                        <div className="MainHdng">
                                            <h3>Add Category</h3>
                                        </div>
                                        <div className="hrStyle pb-5"><hr /></div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                <div className="row row d-flex align-items-center ">
                                                    <div className="col-sm-2 text-end">
                                                        <Form.Label>Category Name </Form.Label>
                                                    </div>
                                                    <div className="col">
                                                        <Form.Control type="text" placeholder="Enter Category Name" name="name" value={formData.name} onChange={handleChange} />
                                                        {formErrors.categoryName && (
                                                            <p className="text-danger mt-2">* {formErrors.categoryName}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className=" mb-15">
                                                    <div className="row row d-flex align-items-center mt-4">
                                                        <div className="col-sm-2 text-end">
                                                            <label className="form-label" htmlFor="input5">Description <span className="contact__form--label__star">*</span></label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="ckEditor">
                                                                <CKEditor editor={ClassicEditor}
                                                                    data={formData.description}
                                                                    onChange={useCallback((event, editor) => {
                                                                        const data = editor.getData();
                                                                        setFormData((_formdata) => {
                                                                            return { ..._formdata, description: data }
                                                                        });
                                                                    }, [formData])}
                                                                />
                                                            </div>
                                                            {formErrors.categoryDescription && (
                                                                <p className="text-danger mt-2">* {formErrors.categoryDescription}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-15 mt-4">
                                                    <div className="row">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Add Image</Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <div className="uplogInrDiv">
                                                                    <input
                                                                        single className="form-control fileUpload form-control-lg"
                                                                        onChange={uploadPicture}
                                                                        type="file"
                                                                        accept="image/png, image/jpeg" />
                                                                    <div className="uploadBlkInr">
                                                                        <div className="uplogImg">
                                                                            <img src={imageToUpload.imageUrl} alt="" height="50" />
                                                                        </div>
                                                                        <div className="uploadFileCnt">
                                                                            <p>Drag an image here or browse</p>
                                                                            <p>for an image to upload</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {formErrors.categoryImage && (
                                                                    <p className="text-danger mt-2">* {formErrors.categoryImage}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="SeoForm">
                                                    <div className="row d-flex align-items-center my-3 mb-4">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Meta Tag Title </Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <Form.Control type="text" name="metaTagTitle" value={formData.metaTagTitle} onChange={handleChange} placeholder="Meta Tag Title" id="metaTagTitle" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="row d-flex align-items-center my-3  mb-4">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Meta Tag Description </Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <textarea name="metaTagDescription" value={formData.metaTagDescription} onChange={handleChange} className="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row d-flex align-items-center my-3 ">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Meta Tag Keywords  </Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <textarea name="metaTagKeywords" value={formData.metaTagKeywords} onChange={handleChange} className="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row d-flex align-items-center my-3  mb-4">
                                                    <div className="col-sm-2 text-end">
                                                    </div>
                                                    <div className="col">
                                                        <button className="btnCommon" type="button" disabled={disabled} onClick={handleSubmit}>Continue</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
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
export default AdminAddCategory;  
