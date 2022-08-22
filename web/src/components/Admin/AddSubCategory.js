import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import Style from './AdminStyle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import uploadImage from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import { RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const InitialFormData = {
    categoryId: undefined,
    name: "",
    description: "",
    metaTagTitle: "",
    metaTagDescription: "",
    metaTagKeywords: ""
};

function AdminAddSubCategory() {

    const isAdmin = useAdminAuth(true);
    const navigate = useNavigate()
    const [categories, setCategories] = useState();
    const [formData, setFormData] = useState(InitialFormData);
    const [disabled, setDisabled] = useState(false);
    const [imageToUpload, setImageToUpload] = useState({});
    const [formErrors, setFormErrors] = useState({
        categoryId: false,
        subCategoryDescription: false,
        subCategoryName: false,
        imageToupload: false,
    })

    const uploadPicture = (e) => {
        setImageToUpload({
            imageUrl: URL.createObjectURL(e.target.files[0]),
            image: e.target.files[0]
        })
    };
    useEffect(() => {
        if (!imageToUpload.imageUrl) {
            imageToUpload.imageUrl = uploadImage;
        }
    }, [imageToUpload]);


    const selectRef1 = useRef();
    const selectRef2 = useRef();
    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
        $(selectRef1.current).on("change", (e) => {
            setFormData(_formData => {
                return { ..._.cloneDeep(_formData), categoryId: ($(selectRef1.current)).val() }
            });
        })
    }, [formData, categories]);

    const handleChange = ({ nativeEvent }) => {
        let _formData = formData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData({ ..._formData });
    }

    const handleSubmit = async (e) => {
        let { name, description, metaTagTitle, metaTagKeywords, metaTagDescription } = formData;
        let categoryId = $(selectRef1.current).val()
        let isError = false;
        let formErrors = {
            categoryId: false,
            subCategoryDescription: false,
            subCategoryName: false,
            imageToUpload: false
        }
        if (!categoryId || !categoryId.length) {
            formErrors.categoryId = `Please select a category`
            isError = true
        }
        if (!name || !name.length || name.length < 3) {
            formErrors.subCategoryName = `Please enter a valid Name`
            isError = true
        }
        if (!description || !description.length || description.length < 10) {
            formErrors.subCategoryDescription = `Please enter a valid Description`
            isError = true
        }
        if(!imageToUpload.image) {
            formErrors.imageToUpload = `Please select an Image`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            setDisabled(true);
            let data = {
                name,
                description,
                categoryId: categoryId,
                seo: {
                    metaTagTitle,
                    metaTagDescription,
                    metaTagKeywords
                },
                status: "INACTIVE"
            }
            let createCategoryResponse = await RestAdmin.createSubCategory({ ...data });
            if (imageToUpload.image && createCategoryResponse.subCategory && createCategoryResponse.subCategory._id) {
                const categoryFormData = new FormData();
                categoryFormData.append("image", imageToUpload.image);
                categoryFormData.append("subCategoryId", createCategoryResponse.subCategory._id);
                await RestAdmin.createSubCategoryImage(categoryFormData);
            }
            $(selectRef1.current).val(undefined);
            window.setTimeout(() => {
                setFormData({ ...InitialFormData })
                setImageToUpload({})
                navigate('/admin/SubCategoryList')
                setDisabled(false);
            }, 10);
        }
    }
    console.log(formErrors)

    useEffect(() => {
        RestAdmin.getAllCategories()
            .then(_categories => setCategories(_categories))
            .catch(e => console.error(e))
    }, []);


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
                                            <h3>Add Sub Category</h3>
                                        </div>
                                        <div className="hrStyle pb-5"><hr /></div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                {
                                                    (!categories || !categories.length) ? (
                                                        <div className="d-flex">
                                                            <p className="mx-auto">
                                                                (Please Add Sub Categories First)
                                                            </p>
                                                        </div>
                                                    ) :
                                                        <form className="formStyle addFormStyle" action="#">
                                                            <div className="row  d-flex align-items-center mb-3 ">
                                                                <div className="col-sm-2 text-end">
                                                                    <Form.Label>Choose Category</Form.Label>
                                                                </div>
                                                                <div className="col">
                                                                    <select ref={selectRef1} className="wide" disabled={!categories}>
                                                                        <option value="">Choose Category </option>
                                                                        {categories && (() => {
                                                                            window.setTimeout(() => { $(selectRef1.current).niceSelect('update') }, 0);
                                                                            return categories.map(category => (<option value={category._id} key={category._id}>{category.name}</option>));
                                                                        })()}
                                                                    </select>
                                                                    {formErrors.categoryId && (
                                                                        <p className="text-danger mt-2">* {formErrors.categoryId}</p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="row  d-flex align-items-center ">
                                                                <div className="col-sm-2 text-end">
                                                                    <Form.Label>Add Sub Category</Form.Label>
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Control type="text" placeholder="Enter SubCategory Name" name="name" value={formData.name} onChange={handleChange} />
                                                                    {formErrors.subCategoryName && (
                                                                        <p className="text-danger mt-2">* {formErrors.subCategoryName}</p>
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
                                                                                onChange={(event, editor) => {
                                                                                    const data = editor.getData();
                                                                                    setFormData((_formdata) => {
                                                                                        return { ..._formdata, description: data }
                                                                                    });
                                                                                }}
                                                                            />
                                                                            {formErrors.subCategoryDescription && (
                                                                                <p className="text-danger mt-2">* {formErrors.subCategoryDescription}</p>
                                                                            )}
                                                                        </div>
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
                                                                                <input onChange={uploadPicture} type="file" multiple className="form-control fileUpload  form-control-lg" />
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
                                                                            {formErrors.imageToUpload && (
                                                                                <p className="text-danger mt-2">* {formErrors.imageToUpload}</p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="SeoForm">
                                                                <div className="row d-flex align-items-center my-3 mb-4">
                                                                    <div className="col-sm-2 text-end">
                                                                        <Form.Label>Meta Tag Title  </Form.Label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" name="metaTagTitle" value={formData.metaTagTitle} onChange={handleChange} placeholder="Meta Tag Title" id="input-meta-title1" className="form-control" />
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
                                                                        <textarea className="form-control" name="metaTagKeywords" value={formData.metaTagKeywords} onChange={handleChange}></textarea>
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
                                                }
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
export default AdminAddSubCategory;  
