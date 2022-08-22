import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import Modal from 'react-modal';
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
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
import { set } from "lodash";
import { PuffLoader } from "react-spinners";

window.jQuery = window.$ = $;
require("jquery-nice-select");

function MiscellaneousSettings() {

    const isAdmin = useAdminAuth(true);
    const selectRef1 = useRef();
    const [statusUpdating, setStatusUpdating] = useState(false);

    const [colorFormErrors, setColorFormErrors] = useState({
        colorName: false,
        colorHexValue: false
    })

    const [unitFormErrors, setUnitFormErrors] = useState({
        unitName: false
    })

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
    $('select').niceSelect();

    const [colors, setColors] = useState([]);
    const [units, setUnits] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [unitPriorities, setUnitPriorities] = useState([]);
    const initialColorFormData = {
        name: '',
        hexValue: ''
    };
    const initialUnitFormData = {
        name: ''
    };
    const [updatedColor, setUpdatedColor] = useState(x => { return { ...initialColorFormData } });
    const [updatedUnit, setUpdatedUnit] = useState(x => { return { ...initialUnitFormData } });
    const [colorFormData, setColorFormData] = useState(x => { return { ...initialColorFormData } });
    const [unitFormData, setUnitFormData] = useState(x => { return { ...initialUnitFormData } });
    const [indexChanged, setIndexChanged] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleNewColorChange = ({ nativeEvent }) => {
        let _formData = colorFormData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setColorFormData({ ..._formData });
    }
    const handleNewUnitChange = ({ nativeEvent }) => {
        let _formData = unitFormData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setUnitFormData({ ..._formData });
    }
    const handleColorChange = (e) => {
        let newPriority = parseInt(e.target.value);
        let color = colors[(e.target[0].value) - 1]
        color.priority = newPriority
        setUpdatedColor(color)
        setIndexChanged(e)
    }
    const handleUnitChange = (e) => {
        let newPriority = parseInt(e.target.value);
        let unit = units[(e.target[0].value) - 1]
        unit.priority = newPriority
        setUpdatedUnit(unit)
        setIndexChanged(e)
    }
    const updateDisabled = useCallback(
        () => { },
        [colorFormData],
    );
    useEffect(() => {
        updateDisabled();
    }, [colorFormData]);

    function compare(a, b) {
        if (a.priority < b.priority) return -1
        if (a.priority > b.priority) return 1
        return 0;
    }

    const refreshMiscellaneous = async () => {
        let _colors = (await RestAdmin.getAllColors()).colors;
        let _units = (await RestAdmin.getAllUnits()).units;
        _colors.sort(compare)
        _units.sort(compare)
        setColors(_colors)
        console.log(_colors)
        console.log(colors)
        setUnits(_units)
        let _priorities = []
        let _unitPriorities = []
        for (var i = 1; i <= _colors.length; i++) {
            _priorities.push(i)
        }
        for (var i = 1; i <= _units.length; i++) {
            _unitPriorities.push(i)
        }
        setPriorities(_priorities)
        setUnitPriorities(_unitPriorities)
    };

    useEffect(() => {
        refreshMiscellaneous();
    }, []);

    const handleColorUpdate = async (e) => {
        let { priority } = updatedColor;
        let isError = false;
        if (!priority || priority > colors.length + 1) isError = true
        if (!isError) {
            await RestAdmin.updateColor(updatedColor);
            refreshMiscellaneous();
            indexChanged.target.value = indexChanged.target[0].value
        } else {
            console.log("error updating color")
        }
    }

    const handleUnitUpdate = async (e) => {
        let { priority } = updatedUnit;
        let isError = false;
        if (!priority || priority > units.length + 1) isError = true
        if (!isError) {
            await RestAdmin.updateUnit(updatedUnit);
            indexChanged.target.value = indexChanged.target[0].value
            refreshMiscellaneous();
        } else {
            console.log("error updating unit")
        }
    }

    const handleColorSubmit = async (e) => {
        let { name, hexValue } = colorFormData;
        let isError = false;
        let colorFormErrors = {
            colorName: false,
            colorHexValue: false,
        }
        if (!name || !name.length || name.length < 3) {
            colorFormErrors.colorName = `Please enter a valid Name`
            isError = true
        }
        if (!hexValue || !hexValue.length || hexValue.length < 6) {
            colorFormErrors.colorHexValue = `Please enter a valid Hex Value`
            isError = true
        }
        setColorFormErrors(colorFormErrors)
        if (!isError) {
            setDisabledColor(true);
            let data = {
                name,
                hexValue: '#' + hexValue
            }
            const createColorResponse = await RestAdmin.createColor({ ...data });
            console.log(createColorResponse)
            window.setTimeout(() => {
                setColorFormData({ ...initialColorFormData })
                refreshMiscellaneous();
                setDisabledColor(false);
            }, 10);
        }
    }

    const handleUnitSubmit = async (e) => {
        let { name } = unitFormData;
        let isError = false;
        let unitFormErrors = {
            unitName: false
        }
        if (!name || !name.length) {
            unitFormErrors.unitName = `Please enter a valid Name`
            isError = true
        }
        setUnitFormErrors(unitFormErrors)
        if (!isError) {
            setDisabledUnit(true);
            let data = {
                name
            }
            const createUnitResponse = await RestAdmin.createUnit({ ...data });
            console.log(createUnitResponse)
            window.setTimeout(() => {
                setUnitFormData({ ...initialUnitFormData })
                refreshMiscellaneous();
                setDisabledUnit(false);
            }, 10);
        } else {
            console.log("error")
        }
    }

    const _delete = async (id, field) => {
        let fieldName = field
        if (confirm("Are you Sure?")) {
            console.log(`deleting ${fieldName}`)
            let result = (fieldName == "color") ? await RestAdmin.deleteColor(id) : await RestAdmin.deleteUnit(id);
            console.log(result)
            if (result.status == 405) {
                let message = (await (result).json()).message
                alert(message)
            }
            refreshMiscellaneous();
        }
    }

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

                            <div className="container-fluid ">
                                <div className="cardFull p-4">
                                    <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>Miscellaneous Settings</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" className="form-control" placeholder="Search Settings" />
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
                                    <Button variant="primary" onClick={handleShow}>+ New Color</Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Please Select Yours Color</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body><div className="row col-auto ms-3">
                                            <div className="col-xs-6">

                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ width: 130 }} >Color Name</div>
                                                    <input type="text" className="form-control" name="name"
                                                        placeholder="Color name" value={colorFormData.name}
                                                        onChange={handleNewColorChange} />
                                                </div>
                                                {colorFormErrors.colorName && (
                                                    <p className="text-danger mt-2">* {colorFormErrors.colorName}</p>
                                                )}
                                            </div>
                                            <div className="col-md-12 mt-2">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ width: 130 }} >Hexa Value</div>
                                                    <input type="text" className="form-control"
                                                        name="hexValue" placeholder="Hex Value"
                                                        value={colorFormData.hexValue} onChange={handleNewColorChange} />
                                                </div>
                                                {colorFormErrors.colorHexValue && (
                                                    <p className="text-danger mt-2">* {colorFormErrors.colorHexValue}</p>
                                                )}
                                            </div>
                                        </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="col-auto">
                                                <div className="addPrdctBtn">
                                                    <a className="btnCommon" onClick={handleColorSubmit}> Save Color</a>
                                                </div>
                                            </div>
                                            <Button variant="primary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="prdctListTble common-table">
                                        <div class="row">
                                            <div class="table-responsive col-md-6">
                                                {!colors && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <PuffLoader />
                                                </div>}

                                                {colors?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    No Data Found. Please Add Colors.
                                                </div>)}
                                                {colors?.length > 0 && (
                                                    <Table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th><input className="form-check-input" type="checkbox" /></th>
                                                                <th>Color</th>
                                                                <th>Hex Value</th>
                                                                <th>Priority</th>
                                                                <th align="center" width="150">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {colors.map((color, index) => {
                                                                return (
                                                                    <tr className="whitebgRow">
                                                                        <td>
                                                                            <input className="form-check-input" type="checkbox" />
                                                                        </td>
                                                                        <td>
                                                                            <div className="pdrctCat">
                                                                                {color.name}
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="SubCat">
                                                                                {color.hexValue}
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="form-group">
                                                                                <select onChange={handleColorChange} className="wide nice-select">
                                                                                    <option value={color.priority} name="priority">{color.priority}</option>
                                                                                    {priorities.map((priority) => {
                                                                                        if (priority != color.priority) {
                                                                                            return (
                                                                                                <option value={priority} name="priority">{priority}</option>
                                                                                            )
                                                                                        }
                                                                                        return (
                                                                                            <option class="current" value={priority} name="priority">{priority}</option>
                                                                                        )
                                                                                    })}
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td className="actions">
                                                                            <div className="tbl-actn">
                                                                                <ul>
                                                                                    <li className="edit-btn">
                                                                                        <div onClick={handleColorUpdate}>
                                                                                            <img src={editIcon} alt="" height="18" />
                                                                                            <span><img src={editWhite} alt="" height="18" /></span>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="delete-btn">
                                                                                        <div className="">
                                                                                            <a onClick={(e) => { e.preventDefault(); _delete(color._id, "color"); }}>
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
                                                                )
                                                            })}
                                                        </tbody>
                                                    </Table>
                                                )}
                                            </div>
                                            <div class="table-responsive col-md-6">
                                                {!units && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <PuffLoader />
                                                </div>}

                                                {units?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    No Data Found. Please Add Units.
                                                </div>)}
                                                {units?.length > 0 && (
                                                    <Table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th><input className="form-check-input" type="checkbox" /></th>
                                                                <th>Unit</th>
                                                                <th>Date</th>
                                                                <th>Priority</th>
                                                                <th align="center" width="150">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {units.map((unit, index) => {
                                                                return (<tr className="whitebgRow">
                                                                    <td>
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="pdrctCat">
                                                                            {unit.name}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="SubCat">
                                                                            {moment(unit.createdAt).format("DD MMMM")}
                                                                        </div>
                                                                    </td>
                                                                    <td className="priority">
                                                                        <div className="form-group">
                                                                            <select onChange={handleUnitChange} className="wide nice-select">
                                                                                <option value={unit.priority} name="priority">{unit.priority}</option>
                                                                                <select onChange={handleUnitChange} class="nice-select" className="wide">
                                                                                    {unitPriorities.map((priority) => {
                                                                                        if (priority != unit.priority) {
                                                                                            return (
                                                                                                <option value={priority} name="priority">{priority}</option>
                                                                                            )
                                                                                        }
                                                                                        <option class="current" value={priority} name="priority">{priority}</option>
                                                                                    })}
                                                                                </select>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td className="actions">
                                                                        <div className="tbl-actn">
                                                                            <ul>
                                                                                <li className="edit-btn">
                                                                                    <div onClick={handleUnitUpdate}>
                                                                                        <img src={editIcon} alt="" height="18" />
                                                                                        <span><img src={editWhite} alt="" height="18" /></span>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="delete-btn">
                                                                                    <div className="">
                                                                                        <a onClick={(e) => { e.preventDefault(); _delete(unit._id, "unit"); }}>
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
                                        <div className="row align-items-center justify-content-between pb-20 hdngRowBlk">
                                            <div className="row col-auto ms-3">
                                                <div className="col-auto">
                                                    <input type="text" className="form-control" name="name" placeholder="Color name" value={colorFormData.name} onChange={handleNewColorChange} />
                                                    {colorFormErrors.colorName && (
                                                        <p className="text-danger mt-2">* {colorFormErrors.colorName}</p>
                                                    )}
                                                </div>
                                                <div className="col-auto">
                                                    <input type="text" className="form-control" name="hexValue" placeholder="Hex Value" value={colorFormData.hexValue} onChange={handleNewColorChange} />
                                                    {colorFormErrors.colorHexValue && (
                                                        <p className="text-danger mt-2">* {colorFormErrors.colorHexValue}</p>
                                                    )}
                                                </div>
                                                <div className="col-auto">
                                                    <div className="addPrdctBtn">
                                                        <a className="btnCommon"><span><img src={plus} alt="" height="12" onClick={handleColorSubmit} /></span> Add</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row col-auto me-3">
                                                <div className="col-auto">
                                                    <input type="text" className="form-control" name="name" placeholder="Unit name" value={unitFormData.name} onChange={handleNewUnitChange} />
                                                    {unitFormErrors.unitName && (
                                                        <p className="text-danger mt-2">* {unitFormErrors.unitName}</p>
                                                    )}
                                                </div>
                                                <div className="col-auto">
                                                    <div className="addPrdctBtn">
                                                        <a className="btnCommon"><span><img src={plus} alt="" height="12" onClick={handleUnitSubmit} /></span> Add</a>
                                                    </div>
                                                </div>
                                            </div>
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
export default MiscellaneousSettings;