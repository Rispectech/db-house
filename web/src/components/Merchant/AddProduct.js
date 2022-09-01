import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  Tab,
  Tabs,
  Row,
  Col,
  Alert,
  Container,
  Form,
  label,
  Accordion,
} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Style from "./DashboardStyle";
import Sidebar from "./SideBar";
import NavBar from "./NavBar";
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import useMerchantAuth from "../../hooks/useMerchantAuth";
import _ from "lodash";
import { RestMerchant, RestAdmin } from "../../rest";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";
import { store } from "../..";

window.jQuery = window.$ = $;
require("jquery-nice-select");
function AddProduct() {
  const navigate = useNavigate();
  const isMerchant = useMerchantAuth(true);
  const merchantId = useSelector((s) => s.user?.user?._id);
  const jwt = useSelector((s) => s.user.jwt);

  const [formErrors, setFormErrors] = useState({
    productName: false,
    productBrandName: false,
    productCategory: false,
    productSubCategory: false,
    productDescription: false,
    productVariants: false,
  });

  const [imagesToUpload, setImagesToUpload] = useState([]);
  const uploadImages = (e) => {
    let arr = [];
    console.log(e.target.files);
    for (let file of e.target.files) {
      arr.push({
        imageUrl: URL.createObjectURL(file),
        image: file,
      });
    }
    setImagesToUpload(arr);
  };

  const initialVariant = {
    priority: 7,
    size: "",
    dimension: "",
    price: "",
    color: "",
  };

  const initialFormData = {
    name: "",
    merchantId: merchantId,
    status: "INACTIVE",
    brandId: "",
    categoryId: "",
    subCategoryId: "",
    description: "",
    //metaTagTitle: '',
    //metaTagDescription: '',
    //metaTagKeywords: '',
    variants: [{ ...initialVariant }],
  };
  const [formData, setFormData] = useState((x) => {
    return _.cloneDeep(initialFormData);
  });
  const [disabled, setDisabled] = useState(false);
  const [categories, setCategories] = useState(undefined);

  const [subCategories, setSubCategories] = useState(undefined);
  const [brands, setBrands] = useState(undefined);

  const selectRef1 = useRef();
  useEffect(() => {
    $(selectRef1.current).niceSelect();
    $(selectRef1.current).on("change", (e) => {
      let val = $(selectRef1.current).val();

      setFormData((_formData) => {
        if (val == "" || !val)
          return { ..._.cloneDeep(_formData), categoryId: val, subCategoryId: "" };
        return { ..._.cloneDeep(_formData), categoryId: val };
      });
    });
  }, []);

  const selectRef2 = useRef();
  useEffect(() => {
    $(selectRef2.current).niceSelect();
    $(selectRef2.current).on("change", (e) => {
      let val = $(selectRef2.current).val();
      setFormData((_formData) => ({ ..._.cloneDeep(_formData), subCategoryId: val }));
    });
  }, []);

  const selectRef3 = useRef();
  useEffect(() => {
    $(selectRef3.current).niceSelect();
    $(selectRef3.current).on("change", (e) => {
      let val = $(selectRef3.current).val();
      setFormData((_formData) => ({ ..._.cloneDeep(_formData), brandId: val }));
    });
  }, []);

  const updateDisabled = useCallback(() => {
    // let formDataKeys = Object.keys(formData);
    // let flag = false;
    // formDataKeys.map(key => {
    //     if (!formData[key]) flag = true
    //     if (key == "variants") {
    //         formData[key].map(variant => {
    //             Object.keys(variant).map(variantKey => {
    //                 if (!variant[variantKey]) flag = true
    //             })
    //         })
    //     }
    // });
    // setDisabled(flag);
  }, [formData]);

  const handleChange = ({ nativeEvent }) => {
    let _formData = _.cloneDeep(formData);
    _formData[nativeEvent.target.name] = nativeEvent.target.value;
    setFormData(_formData);
  };

  const addVariant = () => {
    let _formData = _.cloneDeep(formData);
    _formData.variants.push({ ...initialVariant });
    setFormData(_formData);
  };

  const removeVariant = (index) => {
    let _formData = _.cloneDeep(formData);
    _formData.variants.splice(index, 1);
    setFormData(_formData);
  };

  const handleVariantsChange = ({ nativeEvent }, index) => {
    let _formData = _.cloneDeep(formData);
    _formData.variants[index][nativeEvent.target.name] = nativeEvent.target.value;
    setFormData(_formData);
  };

  useEffect(() => {
    updateDisabled();
  }, [formData]);

  useEffect(() => {
    // RestMerchant.getAllCategories().then((_categories) => setCategories(_categories));
    RestMerchant.getAllBrands().then((x) => setBrands(x));
  }, []);

  const handleSubmit = async (e) => {
    setDisabled(true);
    let _formData = _.cloneDeep(formData);
    let { name, brandId, merchantId, categoryId, subCategoryId, description, variants } =
      formData;
    let isError = false;
    let formErrors = {
      productName: false,
      productBrandName: false,
      productCategory: false,
      productSubCategory: false,
      productDescription: false,
    };
    if (!name || !name.length || name.length < 3) {
      formErrors.productName = `Please enter a valid Name`;
      isError = true;
    }
    if (!brandId || !brandId.length) {
      formErrors.productBrandName = `Please select a Brand`;
      isError = true;
    }
    if (!merchantId || !merchantId.length) {
      formErrors.productMerchantId = `Please select a Merchant`;
      isError = true;
    }
    if (!categoryId || !categoryId.length) {
      formErrors.productCategory = `Please select a Category`;
      isError = true;
    }
    if (!subCategoryId || !subCategoryId.length) {
      formErrors.productSubCategory = `Please select a SubCategory`;
      isError = true;
    }
    // if (!description || !description.length || description.length < 10) {
    //   formErrors.productDescription = `Please enter a valid Description`;
    //   isError = true;
    // }
    setFormErrors(formErrors);
    if (!isError) {
      let newProductForm = {
        name,
        merchantId,
        status: _formData.status,
        categoryId,
        description,
        subCategoryId,
        brandId,
        images: [],
        seo: _formData.seo,
        variantParameters: {
          styleEnabled: false,
          styleList: [],
          sizeEnabled: false,
          sizeList: [],
          colorEnabled: false,
          dimensionHeightEnabled: false,
          dimensionWidthEnabled: false,
          dimensionThicknessEnabled: false,
        },
        variants: [],
        createdAt: Date.now(),
      };
      let newProduct = await RestMerchant.createProduct(newProductForm, store.getState().jwt);
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
      navigate(`/merchant/productlist`);
    }
  };

  const [pageLoading, setPageLoading] = useState(true);
  const [merchants, setMerchants] = useState(undefined);
  const handleNameChange = ({ nativeEvent }) => {
    let _formData = _.cloneDeep(formData);
    _formData[nativeEvent.target.name] = nativeEvent.target.value;
    setFormData(_formData);
  };

  const selectCategoryRef = useRef();
  const selectSubCategoryRef = useRef();
  const selectBrandRef = useRef();
  const selectMerchantRef = useRef();

  useEffect(() => {
    $(selectRef1.current).niceSelect();
    $(selectRef2.current).niceSelect();
    $(selectRef3.current).niceSelect();
  }, [formData]);

  useEffect(() => {
    setSubCategories(undefined);
    if (!formData.categoryId || formData.categoryId === "") return () => {};
    RestAdmin.getAllSubCategoriesById(formData.categoryId).then((subCategories) => {
      setSubCategories(subCategories);
    });
  }, [formData.categoryId]);

  let loadData = () => {
    setPageLoading(true);
    RestAdmin.getAllCategories()
      .then((_categories) => {
        RestAdmin.getAllMerchants()
          .then((merchants) => {
            RestMerchant.getAllBrands()
              .then((brands) => {
                setMerchants(merchants);
                setCategories(_categories);
                setBrands(brands);
                setPageLoading(false);
              })
              .catch(console.error);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  useEffect(() => loadData(), []);

  useEffect(() => {
    $(selectCategoryRef.current).niceSelect();
    $(selectSubCategoryRef.current).niceSelect();
    $(selectBrandRef.current).niceSelect();
    $(selectMerchantRef.current).niceSelect();
    $(selectCategoryRef.current).on("change", (e) => {
      let val = $(selectCategoryRef.current).val();
      setFormData((_formData) => {
        if (val == "" || !val)
          return { ..._.cloneDeep(_formData), categoryId: val, subCategoryId: "" };
        return { ..._.cloneDeep(_formData), categoryId: val };
      });
    });
    $(selectSubCategoryRef.current).on("change", (e) => {
      let val = $(selectSubCategoryRef.current).val();
      setFormData((_formData) => ({ ..._.cloneDeep(_formData), subCategoryId: val }));
    });
    $(selectBrandRef.current).on("change", (e) => {
      let val = $(selectBrandRef.current).val();
      setFormData((_formData) => ({ ..._.cloneDeep(_formData), brandId: val }));
    });
    $(selectMerchantRef.current).on("change", (e) => {
      let val = $(selectMerchantRef.current).val();
      setFormData((_formData) => ({ ..._.cloneDeep(_formData), merchantId: val }));
    });
  }, [pageLoading]);

  // console.log(subCategories);

  let getBody = () => {
    if (!categories || !categories.length) {
      return (
        <div className="d-flex">
          <p className="mx-auto">(Please Add Categories First)</p>
        </div>
      );
    } else if (!merchants || !merchants.length) {
      return (
        <div className="d-flex">
          <p className="mx-auto">(No Merchants Added yet)</p>
        </div>
      );
    } else {
      return (
        <form className="formStyle addFormStyle" action="#">
          <div className="row">
            <div className="col">
              <div className=" mb-3">
                <div className="row">
                  <div className="col">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Product Name"
                      name="name"
                      value={formData.name}
                      onChange={handleNameChange}
                    />
                    {formErrors.productName && (
                      <p className="text-danger">* {formErrors.productName}</p>
                    )}
                  </div>
                  <div className="col">
                    <Form.Label>Enter Brand Name</Form.Label>
                    <select
                      ref={selectBrandRef}
                      className="wide"
                      disabled={!brands}
                      value={formData.brandId}
                      onChange={() => {}}
                    >
                      <option value="">Enter Brand Name </option>
                      {brands &&
                        (() => {
                          return brands.map((x) => (
                            <option value={x._id} key={x._id}>
                              {x.name}
                            </option>
                          ));
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
                    <Form.Label>
                      Add Category <span className="contact_star">*</span>
                    </Form.Label>
                    <div className="form-group">
                      <select
                        ref={selectCategoryRef}
                        className="wide"
                        disabled={!categories}
                        onChange={() => {}}
                      >
                        <option value="">Select Category</option>
                        {categories &&
                          (() => {
                            return categories.map((category) => (
                              <option value={category._id} key={category._id}>
                                {category.name}
                              </option>
                            ));
                          })()}
                      </select>
                      {formErrors.productCategory && (
                        <p className="text-danger">* {formErrors.productCategory}</p>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <Form.Label>
                      Add Sub Category <span className="contact_star">*</span>
                    </Form.Label>
                    <div className="form-group">
                      <select
                        ref={selectSubCategoryRef}
                        className="wide"
                        disabled={!subCategories}
                        value={formData.subCategoryId}
                        onChange={() => {}}
                      >
                        <option value="">Select Sub Category</option>
                        {subCategories &&
                          (() => {
                            window.setTimeout(() => {
                              $(selectSubCategoryRef.current).niceSelect("update");
                            }, 0);
                            return subCategories.map((sc) => (
                              <option value={sc._id} key={sc._id}>
                                {sc.name}
                              </option>
                            ));
                          })()}
                      </select>
                      {formErrors.productSubCategory && (
                        <p className="text-danger">* {formErrors.productSubCategory}</p>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <Form.Label>
                      Add Merchant<span className="contact_star">*</span>
                    </Form.Label>
                    <div className="form-group">
                      <select
                        ref={selectMerchantRef}
                        className="wide"
                        disabled={!merchants}
                        value={formData.merchantId}
                        onChange={() => {}}
                      >
                        <option value="">Select Merchant</option>
                        {merchants &&
                          (() => {
                            return merchants.map((x) => (
                              <option value={x._id} key={x._id}>
                                {x.email}
                              </option>
                            ));
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
                <label className="form-label" htmlFor="input5">
                  Product Description <span className="contact__form--label__star">*</span>
                </label>
                <div className="ckEditor">
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData.description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setFormData((_formdata) => {
                        return { ..._formdata, description: data };
                      });
                    }}
                  />
                  {formErrors.productDescription && (
                    <p className="text-danger">* {formErrors.productDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb3">
              <div className="form-group">
                <Form.Label>Add Images</Form.Label>
                <div className="uplogInrDiv">
                  <input
                    onChange={uploadImages}
                    type="file"
                    multiple
                    className="form-control fileUpload  form-control-lg"
                  />
                  <div className="uploadBlkInr">
                    <div className="uplogImg">
                      {(!imagesToUpload || imagesToUpload.length === 0) && (
                        <img src={upload} alt="" height="50" />
                      )}
                      {imagesToUpload.map((i) => (
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
          <div className="">
            <button className="btnCommon  mt-3 " type="button" onClick={handleSubmit}>
              Add Product
            </button>
          </div>
        </form>
      );
    }
  };

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
                    <div className="MainHdng">
                      <h3>New Product</h3>
                    </div>
                    <div className="addAcordion">{getBody()}</div>
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
export default AddProduct;
