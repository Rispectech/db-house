import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, label, Accordion } from "react-bootstrap";
import Style from './AdminStyle';
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import plus from "../../assets/images/plus.svg";
import { RestAdmin, RestMerchant } from '../../rest'
window.jQuery = window.$ = $;
require("jquery-nice-select");

function AdminEditProduct() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const product = state.product

    const InitialFormData = {
        name: product.name,
        merchantId: product.merchantId,
        status: product.status,
        brandId: product.brandId,
        categoryId: product.categoryId,
        subCategoryId: product.subCategoryId,
        description: product.description,
        createdAt: product.createdAt
    };

    const [formErrors, setFormErrors] = useState({
        productName: false,
        productMerchantId: false,
        productBrandName: false,
        productCategory: false,
        productSubCategory: false,
        productDescription: false,
    })

    const [imagesToUpload, setImagesToUpload] = useState([]);
    const uploadImages = (e) => {
        let arr = []
        for (let file of e.target.files) {
            arr.push({
                imageUrl: URL.createObjectURL(file),
                image: file
            })
        }
        setImagesToUpload(arr)
    };

    const [formData, setFormData] = useState(x => { return _.cloneDeep(InitialFormData) });
    const [categories, setCategories] = useState(undefined);
    const [merchants, setMerchants] = useState(undefined);
    const [subCategories, setSubCategories] = useState(undefined);
    const [brands, setBrands] = useState(undefined);

    const selectRef1 = useRef();
    const selectRef2 = useRef();
    const selectRef3 = useRef();
    const selectRef4 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
        $(selectRef4.current).niceSelect();
    }, [formData]);

    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef1.current).on("change", (e) => {
            let val = ($(selectRef1.current)).val();
            setFormData(_formData => {
                if (val == "" || !val) return ({ ..._.cloneDeep(_formData), categoryId: val, subCategoryId: "" })
                return ({ ..._.cloneDeep(_formData), categoryId: val, subCategoryId: ""  })
            });
        })
        $(selectRef2.current).niceSelect();
        $(selectRef2.current).on("change", (e) => {
            let val = ($(selectRef2.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), subCategoryId: val }));
        })
        $(selectRef3.current).niceSelect();
        $(selectRef3.current).on("change", (e) => {
            let val = ($(selectRef3.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), brandId: val }));
        })
        $(selectRef4.current).niceSelect();
        $(selectRef4.current).on("change", (e) => {
            let val = ($(selectRef4.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), merchantId: val }));
        })
    }, []);

    useEffect(() => {
        loadData()
    }, []);

    const handleChange = ({ nativeEvent }) => {
        let _formData = _.cloneDeep(formData)
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData(_formData);
    }
    let loadData = async () => {
        let categories = await RestAdmin.getAllCategories()
        let brands = await RestMerchant.getAllBrands()
        let merchants = await RestAdmin.getAllMerchants()
        setCategories(categories)
        setBrands(brands)
        setMerchants(merchants)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let _formData = _.cloneDeep(formData);
        let { name, brandId, merchantId, categoryId, subCategoryId, description } = formData;
        console.log(categoryId, subCategoryId)
        let isError = false;
        let formErrors = {
            productName: false,
            productBrandName: false,
            productCategory: false,
            productSubCategory: false,
            productDescription: false,
        }
        if (!name || !name.length || name.length < 3) {
            formErrors.productName = `Please enter a valid Name`
            isError = true
        }
        if (!brandId || !brandId.length) {
            formErrors.productBrandName = `Please select a Brand`
            isError = true
        }
        if (!merchantId || !merchantId.length) {
            formErrors.productMerchantId = `Please select a Merchant`
            isError = true
        }
        if (!categoryId || !categoryId.length) {
            formErrors.productCategory = `Please select a Category`
            isError = true
        }
        if (!subCategoryId || !subCategoryId.length) {
            formErrors.productSubCategory = `Please select a SubCategory`
            isError = true
        }
        if (!description || !description.length || description.length < 10) {
            formErrors.productDescription = `Please enter a valid Description`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            let updatedProductForm = {
                _id: product._id,
                name,
                merchantId,
                status: _formData.status,
                categoryId,
                description,
                subCategoryId,
                brandId,
                seo: _formData.seo,
                createdAt: _formData.createdAt
            }
            await RestMerchant.updateProduct(updatedProductForm);
            navigate(`/admin/productlist`)
        }
    }

    useEffect(() => {
        setSubCategories(undefined);
        if (!formData.categoryId || formData.categoryId === "") return () => { };
        RestAdmin.getAllSubCategoriesById(formData.categoryId).then((subCategories) => {
            setSubCategories(subCategories);
        });
    }, [formData.categoryId]);

    return (
        <>
            <Style />
            <article id="root" className="mainRoot">
                <div className="wrapper">
                    <div className="sidebar">
                        <AdSidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <AdNavBar />
                            </div>
                            <div className="container-fluid  mt-4">
                                <div className="cardFull  Bgwhite Shadow radius20 p-4 mx-4">
                                    <div className="addPrdctRow">
                                        <div className="MainHdng mb-3">
                                            <h3>Edit Product</h3>
                                        </div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className=" mb-3">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Form.Label>Product Name</Form.Label>
                                                                    <Form.Control type="text" placeholder="Edit name" name="name" value={formData.name} onChange={handleChange} />
                                                                    {formErrors.productName && (
                                                                        <p className="text-danger">* {formErrors.productName}</p>
                                                                    )}
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Label>Enter Brand Name</Form.Label>
                                                                    <select ref={selectRef3} className="wide" disabled={!brands} value={formData.brandId}>
                                                                        <option value="">Enter Brand Name </option>
                                                                        {brands && (() => {
                                                                            window.setTimeout(() => { $(selectRef3.current).niceSelect('update') }, 0);
                                                                            return brands.map(x => (<option value={x._id} key={x._id}>{x.name}</option>));
                                                                        })()}
                                                                    </select>
                                                                    {formErrors.productBrandName && (
                                                                        <p className="text-danger">* {formErrors.productBrandName}</p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className=" mb-3">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Form.Label>Add Category <span className="contact_star">*</span></Form.Label>
                                                                    <div className="form-group">
                                                                        <select ref={selectRef1} className="wide" disabled={!categories} value={formData.categoryId}>
                                                                            <option value="">Select Category</option>
                                                                            {categories && (() => {
                                                                                window.setTimeout(() => { $(selectRef1.current).niceSelect('update') }, 0);
                                                                                return categories.map(category => (<option value={category._id} key={category._id}>{category.name}</option>));
                                                                            })()}
                                                                        </select>
                                                                        {formErrors.productCategory && (
                                                                            <p className="text-danger">* {formErrors.productCategory}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Label>Add Sub Category <span className="contact_star">*</span></Form.Label>
                                                                    <div className="form-group">
                                                                        <select ref={selectRef2} className="wide" disabled={!subCategories} value={formData.subCategoryId}>
                                                                            <option value="">Select Sub Category</option>
                                                                            {subCategories && (() => {
                                                                                window.setTimeout(() => { $(selectRef2.current).niceSelect('update') }, 0);
                                                                                return subCategories.map(x => (<option value={x._id} key={x._id}>{x.name}</option>));
                                                                            })()}
                                                                        </select>
                                                                        {formErrors.productSubCategory && (
                                                                            <p className="text-danger">* {formErrors.productSubCategory}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Label>Add Merchant<span className="contact_star">*</span></Form.Label>
                                                                    <div className="form-group">
                                                                        <select ref={selectRef4} className="wide" disabled={!merchants} value={formData.merchantId}>
                                                                            <option value="">Select Merchant</option>
                                                                            {merchants && (() => {
                                                                                window.setTimeout(() => { $(selectRef4.current).niceSelect('update') }, 0);
                                                                                return merchants.map(x => (<option value={x._id} key={x._id}>{x.email}</option>));
                                                                            })()}
                                                                        </select>
                                                                        {formErrors.productMerchantId && (
                                                                            <p className="text-danger">* {formErrors.productMerchantId}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" mb-15">
                                                            <label className="form-label" htmlFor="input5">Product Description <span className="contact__form--label__star">*</span></label>
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
                                                                {formErrors.productDescription && (
                                                                    <p className="text-danger">* {formErrors.productDescription}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col">
                                                        <div className="mb3">
                                                            <div className="form-group">
                                                                <Form.Label>Product Images (Not specific to Variants)</Form.Label>
                                                                <div className="uplogInrDiv">
                                                                    <input onChange={uploadImages} type="file" multiple className="form-control fileUpload  form-control-lg" />
                                                                    <div className="uploadBlkInr">
                                                                        <div className="uplogImg">
                                                                            {(!imagesToUpload || imagesToUpload.length === 0) && (
                                                                                <img src={upload} alt="" height="50" />
                                                                            )}
                                                                            {imagesToUpload.map(i => (
                                                                                <img src={i.imageUrl} style={{ margin: 10 }} alt="" height="100" />
                                                                            ))}
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
                                                <div className="">
                                                    <button className="btnCommon  mt-3" type="button" onClick={handleSubmit}>Save Changes</button>
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
export default AdminEditProduct;  
