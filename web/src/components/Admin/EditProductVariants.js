import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, label, Accordion, FormCheck, InputGroup, Button, Modal, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Style from './AdminStyle';
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import $ from "jquery";
import { RestAdmin, RestMerchant } from '../../rest'
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const NewVariantObject = {
    name: "",
    priority: 1,
    style: "",
    size: "",
    colorId: "",
    dimensions: {
        height: 0,
        width: 0,
        thickness: 0,
    },
    minPurchaseQuantity: 1,
    availableQuantity: 0,
    discountPercentage: 0,
    price: 0,
    images: []
}

function AdminEditProductVariants() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const product = state.product
    const [formErrors, setFormErrors] = useState({
        productVariants: false
    })
    const [dataLoading, setDataLoading] = useState(true)
    const [allColors, setAllColors] = useState()
    const [allUnits, setAllUnits] = useState()

    const [editParams, setEditParams] = useState(false)
    const [params, setParams] = useState({ ...product.variantParameters });
    const [variants, setVariants] = useState([...product.variants]);
    const [newStyleText, setNewStyleText] = useState("")
    const [newSizeText, setNewSizeText] = useState("")

    const [newVariantModal, setNewVariantModal] = useState({ visible: false, editIndex: -1 })
    const [newVariant, setNewVariant] = useState(NewVariantObject)

    const handleSubmit = async (e) => {

        let newProduct = { ...product }
        newProduct.variants = [...variants]
        newProduct.variantParameters = { ...params }

        await RestAdmin.updateProduct(newProduct)
        navigate('/admin/productlist')

        // let { name, brandId, merchantId, categoryId, subCategoryId, description, variants } = formData;
        // let isError = false;
        // let formErrors = {
        //     productName: false,
        //     productBrandName: false,
        //     productCategory: false,
        //     productSubCategory: false,
        //     productDescription: false,
        //     productVariants: false
        // }
        // if (!name || !name.length || name.length < 3) {
        //     formErrors.productName = `Please enter a valid Name`
        //     isError = true
        // }
        // if (!brandId || !brandId.length) {
        //     formErrors.productBrandName = `Please select a Brand`
        //     isError = true
        // }
        // if (!merchantId || !merchantId.length) {
        //     formErrors.productMerchantId = `Please select a Merchant`
        //     isError = true
        // }
        // if (!categoryId || !categoryId.length) {
        //     formErrors.productCategory = `Please select a Category`
        //     isError = true
        // }
        // if (!subCategoryId || !subCategoryId.length) {
        //     formErrors.productSubCategory = `Please select a SubCategory`
        //     isError = true
        // }
        // if (!description || !description.length || description.length < 10) {
        //     formErrors.productDescription = `Please enter a valid Description`
        //     isError = true
        // }
        // if (!variants || !variants.length || JSON.stringify(variants[0]) === JSON.stringify(initialVariant)) {
        //     formErrors.productVariants = `Please enter a valid Variant`
        //     isError = true
        // }
        // setFormErrors(formErrors)
        // if (!isError) {
        // let updatedProductForm = {
        //     _id: product._id,
        //     name,
        //     merchantId,
        //     status: _formData.status,
        //     categoryId,
        //     description,
        //     subCategoryId,
        //     brandId,
        //     variants,
        //     images: [],
        //     seo: _formData.seo,
        //     createdAt: _formData.createdAt
        // }
        // await RestMerchant.updateProduct(updatedProductForm);
        // navigate(`/admin/productlist`)
        // }
    }

    let getUnit = (unitId) => {
        return allUnits?.find(u => u._id === unitId)
    }
    let getColor = (colorId) => {
        return allColors?.find(u => u._id === colorId)
    }

    let loadData = async () => {
        let { colors } = await RestAdmin.getAllColors()
        let { units } = await RestAdmin.getAllUnits()
        setAllColors(colors)
        setAllUnits(units)
        setDataLoading(false)
    }

    useEffect(() => loadData(), [])

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

                                    {dataLoading && (
                                        <div className="d-flex align-items-center justify-content-center" style={{ height: 100 }}>
                                            <PuffLoader />
                                        </div>
                                    )}
                                    {!dataLoading && (
                                        <div className="addPrdctRow">

                                            <div className="MainHdng">
                                                <h3>Variants for {product.name}</h3>
                                            </div>

                                            <h5 className="text-muted mt-4">Variation Configurations</h5>
                                            <div className="row mt-3">
                                                <div className="col-12">
                                                    <div className="card card-body">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <FormCheck
                                                                    checked={params.styleEnabled}
                                                                    type="switch"
                                                                    onChange={e => {
                                                                        setParams({ ...params, styleEnabled: e.target.checked })
                                                                    }}
                                                                    label={`Enable Styles`}
                                                                />
                                                                {params.styleEnabled && (
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="row mt-3">
                                                                                <div className="col-12">
                                                                                    <p className="ms-1">List of Styles</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                {params.styleList.map(style => (
                                                                                    <div className="col-sm-2">
                                                                                        <InputGroup className="mb-3">
                                                                                            <Form.Control
                                                                                                disabled
                                                                                                type="text"
                                                                                                onChange={(e) => { handleVariantsChange(e, index) }}
                                                                                                value={style}
                                                                                                placeholder="Style" />
                                                                                            <Button
                                                                                                variant="outline-warning"
                                                                                                onClick={() => {
                                                                                                    let index = params.styleList.findIndex(s => s === style)
                                                                                                    if (index !== -1) {
                                                                                                        let newParams = { ...params }
                                                                                                        newParams.styleList.splice(index, 1)
                                                                                                        setParams(newParams)
                                                                                                    }
                                                                                                }}>X</Button>
                                                                                        </InputGroup>
                                                                                    </div>
                                                                                ))}
                                                                                <div className="col-sm-2">
                                                                                    <InputGroup className="mb-3">
                                                                                        <Form.Control
                                                                                            value={newStyleText}
                                                                                            onChange={(e) => { setNewStyleText(e.target.value) }}
                                                                                            placeholder="Style" />
                                                                                        <Button
                                                                                            variant="outline-success"
                                                                                            onClick={() => {
                                                                                                let index = params.styleList.findIndex(s => s === newStyleText)
                                                                                                if (index === -1) {
                                                                                                    setNewStyleText("")
                                                                                                    setParams({ ...params, styleList: [...params.styleList, newStyleText] })
                                                                                                }
                                                                                            }}>+</Button>
                                                                                    </InputGroup>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <FormCheck
                                                                    checked={params.sizeEnabled}
                                                                    type="switch"
                                                                    onChange={e => {
                                                                        setParams({ ...params, sizeEnabled: e.target.checked })
                                                                    }}
                                                                    label={`Enable Sizes`}
                                                                />
                                                                {params.sizeEnabled && (
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="row mt-3">
                                                                                <div className="col-12">
                                                                                    <p className="ms-1">List of Sizes</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                {params.sizeList.map(size => (
                                                                                    <div className="col-sm-2">
                                                                                        <InputGroup className="mb-3">
                                                                                            <Form.Control
                                                                                                disabled
                                                                                                type="text"
                                                                                                onChange={(e) => { handleVariantsChange(e, index) }}
                                                                                                value={size}
                                                                                                placeholder="Style" />
                                                                                            <Button
                                                                                                variant="outline-warning"
                                                                                                onClick={() => {
                                                                                                    let index = params.sizeList.findIndex(s => s === size)
                                                                                                    if (index !== -1) {
                                                                                                        let newParams = { ...params }
                                                                                                        newParams.sizeList.splice(index, 1)
                                                                                                        setParams(newParams)
                                                                                                    }
                                                                                                }}>X</Button>
                                                                                        </InputGroup>
                                                                                    </div>
                                                                                ))}
                                                                                <div className="col-sm-2">
                                                                                    <InputGroup className="mb-3">
                                                                                        <Form.Control
                                                                                            value={newSizeText}
                                                                                            onChange={(e) => { setNewSizeText(e.target.value) }}
                                                                                            placeholder="Style" />
                                                                                        <Button
                                                                                            variant="outline-success"
                                                                                            onClick={() => {
                                                                                                let index = params.sizeList.findIndex(s => s === newSizeText)
                                                                                                if (index === -1) {
                                                                                                    setNewSizeText("")
                                                                                                    setParams({ ...params, sizeList: [...params.sizeList, newSizeText] })
                                                                                                }
                                                                                            }}>+</Button>
                                                                                    </InputGroup>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <FormCheck
                                                                    checked={params.colorEnabled}
                                                                    type="switch"
                                                                    onChange={e => {
                                                                        setParams({ ...params, colorEnabled: e.target.checked })
                                                                    }}
                                                                    label={`Enable Colors`}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <FormCheck
                                                                    checked={params.dimensionHeightEnabled}
                                                                    type="switch"
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            setParams({
                                                                                ...params,
                                                                                dimensionHeightEnabled: true,
                                                                                dimensionWidthEnabled: false,
                                                                                dimensionThicknessEnabled: false,
                                                                            })
                                                                        } else {
                                                                            setParams({
                                                                                ...params,
                                                                                dimensionHeightEnabled: false,
                                                                                dimensionWidthEnabled: false,
                                                                                dimensionThicknessEnabled: false,
                                                                            })
                                                                        }
                                                                    }}
                                                                    label={`Enable Dimensions`}
                                                                />
                                                                {params.dimensionHeightEnabled && (
                                                                    <div className="row mt-3">
                                                                        <div className="col px-4">
                                                                            <InputGroup className="mb-3">
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        setParams({
                                                                                            ...params,
                                                                                            dimensionHeightEnabled: true,
                                                                                            dimensionWidthEnabled: false,
                                                                                            dimensionThicknessEnabled: false,
                                                                                        })
                                                                                    }}
                                                                                    variant={params.dimensionHeightEnabled ? "primary" : "outline-secondary"}>
                                                                                    Height
                                                                                </Button>
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        setParams({
                                                                                            ...params,
                                                                                            dimensionHeightEnabled: true,
                                                                                            dimensionWidthEnabled: true,
                                                                                            dimensionThicknessEnabled: false,
                                                                                        })
                                                                                    }}
                                                                                    variant={params.dimensionWidthEnabled ? "primary" : "outline-secondary"}>
                                                                                    X Width
                                                                                </Button>
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        setParams({
                                                                                            ...params,
                                                                                            dimensionHeightEnabled: true,
                                                                                            dimensionWidthEnabled: true,
                                                                                            dimensionThicknessEnabled: true,
                                                                                        })
                                                                                    }}
                                                                                    variant={params.dimensionThicknessEnabled ? "primary" : "outline-secondary"}>
                                                                                    X Thickness
                                                                                </Button>
                                                                            </InputGroup>

                                                                            <div className="row mt-3">
                                                                                <div className="col col-md-4">
                                                                                    <div className="form-group">
                                                                                        <label className="text-muted px-2">Select Unit for Dimensions</label>
                                                                                        <select
                                                                                            value={params.dimensionUnitId} className="form-control"
                                                                                            onChange={(e) => {
                                                                                                setParams({ ...params, dimensionUnitId: e.target.value })
                                                                                            }} >
                                                                                            <option value="">(Select Unit)</option>
                                                                                            {allUnits.map(u => (
                                                                                                <option value={u._id}>{u.name}</option>
                                                                                            ))}
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5 className="text-muted mt-4">
                                                List of Variants
                                                <div className="row d-inline-block ms-3">
                                                    <div className="col">
                                                        <button
                                                            className="btn btn-sm btn-success m-2"
                                                            onClick={() => {
                                                                setNewVariant({ ...NewVariantObject })
                                                                setNewVariantModal({ visible: true, editIndex: -1 })
                                                            }}>
                                                            Add Variant
                                                        </button>
                                                    </div>
                                                </div>
                                            </h5>
                                            <div className="row mt-3">
                                                <div className="col-12">
                                                    <div className="card card-body p-0">
                                                        <table className="table m-0">
                                                            <thead>
                                                                <td className="text-center py-2">#</td>
                                                                <td className="py-2 px-2">Name</td>
                                                                {params.colorEnabled && (
                                                                    <td className="text-center py-2">Color</td>
                                                                )}
                                                                {params.styleEnabled && (
                                                                    <td className="text-center py-2">Style</td>
                                                                )}
                                                                {params.sizeEnabled && (
                                                                    <td className="text-center py-2">Size</td>
                                                                )}
                                                                {(params.dimensionHeightEnabled
                                                                    || params.dimensionWidthEnabled
                                                                    || params.dimensionThicknessEnabled) && (
                                                                        <td className="text-center py-2">Dimensions</td>
                                                                    )}
                                                                <td></td>
                                                            </thead>
                                                            <tbody>
                                                                {(!variants.length) && (
                                                                    <tr>
                                                                        <td colSpan={1}>
                                                                            <small className="text-center p-0 m-0 py-3 d-block">
                                                                                (No Variants)
                                                                            </small>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                                {variants.map((variant, index) => (
                                                                    <tr>
                                                                        <td className="text-center">{index + 1}</td>
                                                                        <td>{variant.name}</td>
                                                                        {params.colorEnabled && (
                                                                            <td className="text-center">
                                                                                {Boolean(variant.colorId) && (
                                                                                    <span>{getColor(variant.colorId)?.name}</span>
                                                                                )}
                                                                                {!Boolean(variant.colorId) && (
                                                                                    <span className="badge bg-danger">
                                                                                        Select Color
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        )}
                                                                        {params.styleEnabled && (
                                                                            <td className="text-center">
                                                                                {Boolean(variant.style) && (
                                                                                    <span>{variant.style}</span>
                                                                                )}
                                                                                {!Boolean(variant.style) && (
                                                                                    <span className="badge bg-danger">
                                                                                        Select Style
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        )}
                                                                        {params.sizeEnabled && (
                                                                            <td className="text-center">
                                                                                {Boolean(variant.size) && (
                                                                                    <span>{variant.size}</span>
                                                                                )}
                                                                                {!Boolean(variant.size) && (
                                                                                    <span className="badge bg-danger">
                                                                                        Select Size
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        )}
                                                                        {(params.dimensionHeightEnabled) && (
                                                                            <td className="text-center">
                                                                                {variant.dimensions.height + " "}
                                                                                {Boolean(params.dimensionWidthEnabled && Number.isInteger(variant.dimensions.width)) && (
                                                                                    <span>X {variant.dimensions.width}</span>
                                                                                )}
                                                                                {Boolean(params.dimensionThicknessEnabled && Number.isInteger(variant.dimensions.thickness)) && (
                                                                                    <span>X {variant.dimensions.thickness}</span>
                                                                                )} {" "}
                                                                                {getUnit(params.dimensionUnitId)?.name || "Units"}
                                                                            </td>
                                                                        )}
                                                                        <td className="text-center">
                                                                            <button className="btn btn-sm btn-info"
                                                                                onClick={() => {
                                                                                    setNewVariant({ ...variant })
                                                                                    setNewVariantModal({ visible: true, editIndex: index })
                                                                                }}>
                                                                                Edit
                                                                            </button>
                                                                            <button className="btn btn-sm btn-warning ms-2"
                                                                                onClick={() => {
                                                                                    if (confirm("Delete Variant Entry?")) {
                                                                                        let newVariants = [...variants]
                                                                                        newVariants.splice(index, 1)
                                                                                        setVariants(newVariants)
                                                                                    }
                                                                                }}>
                                                                                Delete
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="addAcordion mt-2">
                                                <form className="formStyle addFormStyle" action="#">
                                                    <div className="">
                                                        <button className="btnCommon  mt-3" type="button" onClick={handleSubmit}>
                                                            Save Variants
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>


            <Modal
                show={newVariantModal.visible}
                size={"lg"}
                onHide={() => {
                    setNewVariantModal({ visible: false, editIndex: -1 })
                    setNewVariant({ ...NewVariantObject })
                }}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Product Variant
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <Form.Label className="text-muted px-2">Name of Variant</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => { setNewVariant({ ...newVariant, name: e.target.value }) }}
                                        value={newVariant.name}
                                        placeholder="Name of Variant" />
                                </div>
                                {params.sizeEnabled && (
                                    <div className="form-group mt-3">
                                        <label className="text-muted px-2">Select a Size</label>
                                        <select
                                            value={newVariant.size} className="form-control"
                                            onChange={(e) => { setNewVariant({ ...newVariant, size: e.target.value }) }} >
                                            <option value="">(Select Size)</option>
                                            {params.sizeList.map(s => (
                                                <option value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {params.styleEnabled && (
                                    <div className="form-group mt-3">
                                        <label className="text-muted px-2">Select a Style</label>
                                        <select
                                            value={newVariant.style} className="form-control"
                                            onChange={(e) => { setNewVariant({ ...newVariant, style: e.target.value }) }} >
                                            <option value="">(Select Style)</option>
                                            {params.styleList.map(s => (
                                                <option value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {params.colorEnabled && (
                                    <div className="form-group mt-3">
                                        <label className="text-muted px-2">Select a Color</label>
                                        <select
                                            value={newVariant.colorId} className="form-control"
                                            onChange={(e) => { setNewVariant({ ...newVariant, colorId: e.target.value }) }} >
                                            <option value="">(Select Color)</option>
                                            {allColors?.map(c => (
                                                <option value={c._id}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {(params.dimensionHeightEnabled
                                    || params.dimensionWidthEnabled
                                    || params.dimensionThicknessEnabled) && (
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group mt-3">
                                                            <label className="text-muted px-2">Height</label>
                                                            <div className="input-group">
                                                                <input
                                                                    value={newVariant.dimensions.height} className="form-control" type={"number"}
                                                                    onChange={(e) => {
                                                                        let num = Number.parseInt(e.target.value)
                                                                        if (Number.isInteger(num)) {
                                                                            let newVariant2 = { ...newVariant }
                                                                            newVariant2.dimensions.height = num
                                                                            setNewVariant(newVariant2)
                                                                        }
                                                                    }} />
                                                                <div className="input-group-append">
                                                                    <div className="input-group-text">
                                                                        {getUnit(params.dimensionUnitId)?.name || "Units"}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {(params.dimensionWidthEnabled || params.dimensionThicknessEnabled) && (
                                                        <div className="col">
                                                            <div className="form-group mt-3">
                                                                <label className="text-muted px-2">Width</label>
                                                                <div className="input-group">
                                                                    <input
                                                                        value={newVariant.dimensions.width} className="form-control" type={"number"}
                                                                        onChange={(e) => {
                                                                            let num = Number.parseInt(e.target.value)
                                                                            if (Number.isInteger(num)) {
                                                                                let newVariant2 = { ...newVariant }
                                                                                newVariant2.dimensions.width = num
                                                                                setNewVariant(newVariant2)
                                                                            }
                                                                        }} />
                                                                    <div className="input-group-append">
                                                                        <div className="input-group-text">
                                                                            {getUnit(params.dimensionUnitId)?.name || "Units"}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(params.dimensionThicknessEnabled) && (
                                                        <div className="col">
                                                            <div className="form-group mt-3">
                                                                <label className="text-muted px-2">Thickness</label>
                                                                <div className="input-group">
                                                                    <input
                                                                        value={newVariant.dimensions.thickness} className="form-control" type={"number"}
                                                                        onChange={(e) => {
                                                                            let num = Number.parseInt(e.target.value)
                                                                            if (Number.isInteger(num)) {
                                                                                let newVariant2 = { ...newVariant }
                                                                                newVariant2.dimensions.thickness = num
                                                                                setNewVariant(newVariant2)
                                                                            }
                                                                        }} />
                                                                    <div className="input-group-append">
                                                                        <div className="input-group-text">
                                                                            {getUnit(params.dimensionUnitId)?.name || "Units"}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            setNewVariant({ ...NewVariantObject })
                            setNewVariantModal({ visible: false, editIndex: -1 })
                        }}>
                        Discard
                    </Button>
                    <Button variant="success"
                        onClick={() => {
                            let newVariants = [...variants]
                            if (newVariantModal.editIndex === -1) {
                                setVariants([...newVariants, newVariant])
                            } else {
                                newVariants[newVariantModal.editIndex] = { ...newVariant }
                                setVariants(newVariants)
                            }
                            setNewVariant({ ...NewVariantObject })
                            setNewVariantModal({ visible: false, editIndex: -1 })
                        }}>
                        Save Variant
                    </Button>
                </Modal.Footer>
            </Modal>

        </>


    );
}
export default AdminEditProductVariants;  
