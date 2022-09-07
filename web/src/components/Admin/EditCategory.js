import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Style from './AdminStyle';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import { Rest, RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
window.jQuery = window.$ = $;
require("jquery-nice-select");


function EditCategory(props) {


    const navigate = useNavigate()
    const { state } = useLocation();
    const category = state.category

    const [formErrors, setFormErrors] = useState({
        categoryName: false,
        categoryDescription: false
    })

    const isAdmin = useAdminAuth(true);
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
    const [noOfRows, setNoOfRows] = useState(1);
    console.log('category', category)

    const initialFormData = {
        name: category.name,
        description: category.description,
        metaTagTitle: category.seo.metaTagTitle,
        metaTagDescription: category.seo.metaTagDescription,
        metaTagKeywords: category.seo.metaTagKeywords
    }

    const [formData, setFormData] = useState(x => { return { ...initialFormData } });

    const handleChange = ({ nativeEvent }) => {
        let _formData = formData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData({ ..._formData });
    }

    const [imageToUpload, setImageToUpload] = useState({});
    const uploadPicture = (e) => {
        setImageToUpload({
            imageUrl: URL.createObjectURL(e.target.files[0]),
            image: e.target.files[0]
        })
    };

    const handleSubmit = async (e) => {
        let { name, description, metaTagTitle, metaTagKeywords, metaTagDescription } = formData;
        let data = {
            _id: category._id,
            name,
            description,
            seo: {
                metaTagTitle,
                metaTagDescription,
                metaTagKeywords
            }
        }
        let isError = false;
        let formErrors = {
            categoryName: false,
            categoryDescription: false
        }
        if (!name || !name.length || name.length < 3) {
            formErrors.categoryName = `Please enter a valid Name`
            isError = true
        }
        if (!description || !description.length || description.length < 10) {
            formErrors.categoryDescription = `Please enter a valid Description`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            try {
                await RestAdmin.updateCategory({ ...data });
            } catch (e) { console.error(e) }
            try{
                if(Boolean(imageToUpload.image)) {
                    const formData = new FormData();
                    formData.append("image", imageToUpload.image);
                    formData.append("categoryId", category._id);
                    await RestAdmin.createCategoryImage(formData);
                }
            } catch (e) { console.error(e) }
            navigate(`/admin/categorylist`)
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
                                            <h3>Edit Category</h3>
                                        </div>
                                        <div className="hrStyle pb-5"><hr /></div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                <div className="row row d-flex align-items-center ">
                                                    <div className="col-sm-2 text-end">
                                                        <Form.Label>Category Name </Form.Label>
                                                    </div>
                                                    <div className="col">
                                                        <Form.Control type="text" placeholder="Enter category name" name="name" value={formData.name} onChange={handleChange} />
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
                                                                    <input single className="form-control fileUpload  form-control-lg" 
                                                                        onChange={uploadPicture} 
                                                                        type="file" 
                                                                        accept="image/png, image/jpeg" />
                                                                    <div className="uploadBlkInr">
                                                                        <div className="uplogImg">
                                                                            {(Boolean(imageToUpload.image)) && (
                                                                                <img src={imageToUpload.imageUrl} alt="" height="150" />
                                                                            )}
                                                                            {(!Boolean(imageToUpload.image) && Boolean(category.imageDocumentId)) && (
                                                                                <img src={`${Rest}/documents/get/${category.imageDocumentId}`} alt="" height="80" />
                                                                            )}
                                                                            {(!Boolean(imageToUpload.image)) && (!Boolean(category.imageDocumentId)) && (
                                                                                <img src={upload} alt="" height="50" />
                                                                            )}
                                                                        </div>
                                                                        <div className="uploadFileCnt">
                                                                            <p>Drag an image here or browse</p>
                                                                            <p>for an image to upload</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                                            <input type="text" name="metaTagTitle" value={formData.metaTagTitle} onChange={handleChange} placeholder="Meta Tag Title" id="metaTagTitle" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="row d-flex align-items-center my-3  mb-4">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Meta Tag Description </Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <textarea className="form-control" name="metaTagDescription" value={formData.metaTagDescription} onChange={handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row d-flex align-items-center my-3 ">
                                                        <div className="col-sm-2 text-end">
                                                            <Form.Label>Meta Tag Keywords  </Form.Label>
                                                        </div>
                                                        <div className="col">
                                                            <textarea className="form-control" name="metaTagKeywords" value={formData.metaTagKeywords} onChange={handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row d-flex align-items-center my-3  mb-4">
                                                    <div className="col-sm-2 text-end">
                                                    </div>
                                                    <div className="col">
                                                        <button className="btnCommon" type="button" onClick={handleSubmit}>Continue</button>
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
export default EditCategory;  
