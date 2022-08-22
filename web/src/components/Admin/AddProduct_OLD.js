import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Style from './AdminStyle';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import { useSelector, useDispatch } from 'react-redux'
import plus from "../../assets/images/plus.svg";
import { RestAdmin, RestMerchant } from '../../rest'

window.jQuery = window.$ = $;
require("jquery-nice-select");

function AdminAddProduct() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [formErrors, setFormErrors] = useState({
        productName: false,
        productMerchantId: false,
        productBrandName: false,
        productCategory: false,
        productSubCategory: false,
        productDescription: false,
        productVariants: false
    })

    const [imagesToUpload, setImagesToUpload] = useState([]);
    const uploadImages = (e) => {
        let arr = []
        console.log(e.target.files)
        for (let file of e.target.files) {
            arr.push({
                imageUrl: URL.createObjectURL(file),
                image: file
            })
        }
        setImagesToUpload(arr)
    };

    const initialVariant = {
        priority: 7,
        size: "",
        dimension: '',
        price: '',
        color: ''
    };

    const initialFormData = {
        name: '',
        merchantId: '',
        status: 'INACTIVE',
        brandId: '',
        categoryId: '',
        subCategoryId: '',
        description: '',
        variants: [{ ...initialVariant }]
    };

    const [formData, setFormData] = useState(x => { return _.cloneDeep(initialFormData) });
    const [disabled, setDisabled] = useState(true);
    const [categories, setCategories] = useState(undefined);
    const [merchants, setMerchants] = useState(undefined);
    const [subCategories, setSubCategories] = useState(undefined);
    const [brands, setBrands] = useState(undefined);

    const selectRef1 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef1.current).on("change", (e) => {
            let val = ($(selectRef1.current)).val();

            setFormData(_formData => {
                if (val == "" || !val) return ({ ..._.cloneDeep(_formData), categoryId: val, subCategoryId: "" })
                return ({ ..._.cloneDeep(_formData), categoryId: val })
            });
        })
    }, []);

    const selectRef2 = useRef();
    useEffect(() => {
        $(selectRef2.current).niceSelect();
        $(selectRef2.current).on("change", (e) => {
            let val = ($(selectRef2.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), subCategoryId: val }));
        })
    }, []);

    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef3.current).niceSelect();
        $(selectRef3.current).on("change", (e) => {
            let val = ($(selectRef3.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), brandId: val }));
        })
    }, []);

    const selectRef4 = useRef();
    useEffect(() => {
        $(selectRef4.current).niceSelect();
        $(selectRef4.current).on("change", (e) => {
            let val = ($(selectRef4.current)).val();
            setFormData(_formData => ({ ..._.cloneDeep(_formData), merchantId: val }));
        })
    }, []);

    const updateDisabled = useCallback(
        () => {
            let formDataKeys = Object.keys(formData);
            let flag = false;
            formDataKeys.map(key => {
                if (!formData[key]) flag = true
                if (key == "variants") {
                    formData[key].map(variant => {
                        Object.keys(variant).map(variantKey => {
                            if (!variant[variantKey]) flag = true
                        })
                    })
                }
            });
            setDisabled(flag);
        },
        [formData],
    );

    const handleChange = ({ nativeEvent }) => {
        let _formData = _.cloneDeep(formData)
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData(_formData);
    }

    const addVariant = () => {
        let _formData = _.cloneDeep(formData);
        _formData.variants.push({ ...initialVariant });
        setFormData(_formData);
    }

    const removeVariant = (index) => {
        let _formData = _.cloneDeep(formData);
        _formData.variants.splice(index, 1);
        setFormData(_formData);
    }

    const handleVariantsChange = (({ nativeEvent }, index) => {
        let _formData = _.cloneDeep(formData)
        _formData.variants[index][nativeEvent.target.name] = nativeEvent.target.value;
        setFormData(_formData);
    })

    useEffect(() => {
        updateDisabled();
    }, [formData]);

    useEffect(() => {
        RestAdmin.getAllCategories().then(_categories => setCategories(_categories));
        RestAdmin.getAllMerchants().then(merchants =>{
            setMerchants(merchants)
            if({merchants}.length===0){
                if (confirm("No merchants available. Proceed to adding a merchant?")) {
                    console.log("redirecting to admin/AddMerchant")
                    navigate('/admin/AddMerchant')
                }
            }
        });
        RestMerchant.getAllBrands().then(x => setBrands(x));
    }, []);

    const handleSubmit = async (e) => {
        setDisabled(true);
        let _formData = _.cloneDeep(formData);
        let { name, brandId, merchantId, categoryId, subCategoryId, description, variants} = formData;
        let isError = false;
        let formErrors = {
            productName: false,
            productBrandName: false,
            productCategory: false,
            productSubCategory: false,
            productDescription: false,
            productVariants: false
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
        if (!variants || !variants.length || JSON.stringify(variants[0]) === JSON.stringify(initialVariant)) {
            formErrors.productVariants = `Please enter a valid Variant`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            let newProductForm = {
                name,
                merchantId,
                status: _formData.status,
                categoryId,
                description,
                subCategoryId,
                brandId,
                variants,
                images: [],
                seo: _formData.seo,
                createdAt: Date.now(),
            }
            let newProduct = await RestMerchant.createProduct(newProductForm);
            if (imagesToUpload.length > 0 && newProduct.product) {
                const formData = new FormData();
                formData.append("productId", newProduct.product._id.toString());
                for (let image of imagesToUpload) {
                    formData.append("image", image.image);
                }
                await RestAdmin.newProductImages(formData);
            }
            setDisabled(false);
            setFormData(_.cloneDeep(initialFormData));
            navigate(`/admin/productlist`)
        }
    }

    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef2.current).niceSelect();
        $(selectRef3.current).niceSelect();
        $(selectRef4.current).niceSelect();
    }, [formData]);

    useEffect(() => {
        setSubCategories(undefined);
        if (!formData.categoryId || formData.categoryId === "") return () => { };
        RestAdmin.getAllSubCategoriesById(formData.categoryId).then((subCategories) => {
            setSubCategories(subCategories);
        });

    }, [formData.categoryId]);

    const [noOfRows, setNoOfRows] = useState(1);

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
                                        <div className="MainHdng mb-3">
                                            <h3>New Product</h3>
                                        </div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Add Product Info</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className=" mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <Form.Label>Product Name</Form.Label>
                                                                                <Form.Control type="text" placeholder="Enter Product Name" name="name" value={formData.name} onChange={handleChange}/>
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
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Add Variant</Accordion.Header>
                                                        <Accordion.Body>
                                                            {formData.variants.map((variant, index) => (
                                                                <div className="varintRow">
                                                                    <div className=" mb-3">
                                                                        <div className="row">
                                                                            <div className="col-sm-2">
                                                                                <Form.Label>Size</Form.Label>
                                                                                <Form.Control type="text" name="size" onChange={(e) => { handleVariantsChange(e, index) }} value={formData.variants[index].size} placeholder="size.." />
                                                                            </div>
                                                                            <div className="col-sm-2">
                                                                                <Form.Label>Dimension</Form.Label>
                                                                                <Form.Control type="text" name="dimension" onChange={(e) => { handleVariantsChange(e, index) }} value={formData.variants[index].dimension} placeholder="10x10x20" />
                                                                            </div>
                                                                            <div className="col-sm-2">
                                                                                <Form.Label>Price</Form.Label>
                                                                                <Form.Control type="number" placeholder="$10" name="price" onChange={(e) => { handleVariantsChange(e, index) }} value={formData.variants[index].price} />
                                                                            </div>
                                                                            <div className="col-sm-2">
                                                                                <Form.Label>Color</Form.Label>
                                                                                <Form.Control type="text" placeholder="Red" name="color" onChange={(e) => { handleVariantsChange(e, index) }} value={formData.variants[index].color} />
                                                                            </div>
                                                                            <div className="col-sm-3">
                                                                                <Form.Label></Form.Label>
                                                                                <div className="addBtn pt-1">
                                                                                    <button type="button" className="btnCommon me-3" onClick={addVariant}><span><img src={plus} alt="" height="12" /></span> Add</button>
                                                                                    <button type="button" className="btnCommon btnDark deletBtn" onClick={() => { removeVariant(index) }}>Delete</button>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    {formErrors.productVariants && (
                                                        <p className="text-danger">* {formErrors.productVariants}</p>
                                                    )}
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Upload Images</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="col">
                                                                <div className="mb3">
                                                                    <div className="form-group">
                                                                        <Form.Label>Add Images</Form.Label>
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
                                                                {/* <div className="row form-group preview">
                                                                    <div className="col-md-2 col-sm-3 pt-4 pb-3 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                        <div className="addPhotoItem">
                                                                            <div className="addPhotoItemMedia imgClose">
                                                                                <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                                <div className="">
                                                    <button className="btnCommon  mt-3 " type="button" onClick={handleSubmit}>Continue</button>
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
export default AdminAddProduct;  
