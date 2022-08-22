import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label } from "react-bootstrap";
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
import upload from "../../assets/images/uploadIcon.svg";
import { RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
window.jQuery = window.$ = $;
require("jquery-nice-select");


function EditMerchant() {


    const navigate = useNavigate()
    const { state } = useLocation();
    const merchant = state.merchant

    const [formErrors, setFormErrors] = useState({
        merchantFirstName: false,
        merchantLastName: false,
        merchantEmail: false,
        onboardingAmount: false,
        commisionType: false,
        commisionPercentage: false,
        commisionAmount: false
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

    const initialFormData = {
        firstName: merchant.firstName,
        lastName: merchant.lastName,
        email: merchant.email,
        password: merchant.password,
        onboardingAmount: merchant.onboardingAmount,
        commisionPercentage: merchant.commisionPercentage,
        commisionAmount: merchant.commisionAmount
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = ({ nativeEvent }) => {
        let _formData = formData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData({ ..._formData });
    }

    const handleSubmit = async (e) => {
        let { firstName, lastName, email, password } = formData;
        let commisionType = $(selectRef1.current).val()
        let commisionAmount = parseInt(formData.commisionAmount)
        let commisionPercentage = parseInt(formData.commisionPercentage)
        let onboardingAmount = parseInt(formData.onboardingAmount)
        let isError = false;
        let formErrors = {
            merchantFirstName: false,
            merchantLastName: false,
            merchantEmail: false,
            onboardingAmount: false,
            commisionType: false,
            commisionPercentage: false,
            commisionAmount: false
        }
        if (!firstName || !firstName.length || firstName.length < 3) {
            formErrors.merchantFirstName = `Invalid First Name`
            isError = true
        }
        if (!lastName || !lastName.length || lastName.length < 3) {
            formErrors.merchantLastName = `Invalid Last Name`
            isError = true
        }
        if (!email || !email.length) {
            formErrors.merchantEmail = `Invalid email`
            isError = true
        }
        if (!onboardingAmount) {
            formErrors.onboardingAmount = `Invalid OnBoarding Amount`
            isError = true
        }
        if (!commisionType || !commisionType.length) {
            formErrors.commisionType = `Invalid Commision Type`
            isError = true
        }
        if (!commisionPercentage) {
            formErrors.commisionPercentage = `Invalid Commision Percentage`
            isError = true
        }
        if (!commisionAmount) {
            formErrors.commisionAmount = `Invalid Commision Amount`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            let data = {
                _id: merchant._id,
                firstName,
                lastName,
                email,
                password,
                identification: [],
                onboardingAmount,
                commisionAmount,
                commisionPercentage
            }
            try {
                const updateMerchantResponse = await RestAdmin.updateMerchant({ ...data });
                console.log(updateMerchantResponse);
            } catch (e) { console.error(e) }
            navigate(`/admin/merchantlist`)
        }
    }

    useEffect(() => {

    }, [formData]);

    return (
        <>
            <Style />
            <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <AdSidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <AdNavBar />
                            </div>
                            <div className="container-fluid ">
                                <div className="cardFull p-4">
                                    <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>Edit Merchant</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="addPrdctBtn">
                                                <Link to="/admin/addmerchant" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hrStyle pb-5" ><hr /></div>
                                    <div className="row justify-content-sm-center">
                                        <div className="col-sm-12 align-self-center">
                                            <div className=" Bgwhite Shadow radius20 p-4">
                                                <div className="addAcordion">
                                                    <form className="formStyle addFormStyle" action="#">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className=" mb-3">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <Form.Label>First Name</Form.Label>
                                                                            <Form.Control type="text" placeholder="First name" className="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                                                                            {formErrors.merchantFirstName && (
                                                                                <p className="text-danger mt-2">* {formErrors.merchantFirstName}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Last Name</Form.Label>
                                                                            <Form.Control type="text" placeholder="Last Name" className="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                                                                            {formErrors.merchantLastName && (
                                                                                <p className="text-danger mt-2">* {formErrors.merchantLastName}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Email ID</Form.Label>
                                                                            <Form.Control type="text" placeholder="Email" className="email" name="email" value={formData.email} onChange={handleChange} />
                                                                            {formErrors.merchantEmail && (
                                                                                <p className="text-danger mt-2">* {formErrors.merchantEmail}</p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className=" mb-3">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <Form.Label>Onboarding Amount</Form.Label>
                                                                            <Form.Control type="text" placeholder="$10" className="onboardingAmount" name="onboardingAmount" value={formData.onboardingAmount} onChange={handleChange} />
                                                                            {formErrors.onboardingAmount && (
                                                                                <p className="text-danger mt-2">* {formErrors.onboardingAmount}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Commision Type </Form.Label>
                                                                            <select ref={selectRef1} className="wide commisionType" name="commisionType" value={formData.commisionType} onChange={handleChange}>
                                                                                <option value="Featured">%</option>
                                                                                <option value="10">Fix</option>
                                                                            </select>
                                                                            {formErrors.commisionType && (
                                                                                <p className="text-danger mt-2">* {formErrors.commisionType}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Commision Value </Form.Label>
                                                                            <Form.Control type="text" placeholder="10%" className="commisionPercentage" name="commisionPercentage" value={formData.commisionPercentage} onChange={handleChange} />
                                                                            {formErrors.commisionPercentage && (
                                                                                <p className="text-danger mt-2">* {formErrors.commisionPercentage}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Amount</Form.Label>
                                                                            <Form.Control type="text" placeholder="$10" className="commisionAmount" name="commisionAmount" value={formData.commisionAmount} onChange={handleChange} />
                                                                            {formErrors.commisionAmount && (
                                                                                <p className="text-danger mt-2">* {formErrors.commisionAmount}</p>
                                                                            )}
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col">
                                                            <div className="mb3">
                                                                <div className="form-group">
                                                                    <Form.Label>Add Images</Form.Label>
                                                                    <div className="uplogInrDiv">
                                                                        <input type="file" multiple className="form-control fileUpload  form-control-lg" />
                                                                        <div className="uploadBlkInr">
                                                                            <div className="uplogImg">
                                                                                <img src={upload} alt="" height="50" />
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

                                                        {/* <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="0">
                                                            <Accordion.Header>PERSONAL INFO</Accordion.Header>
                                                            <Accordion.Body>
                                                                                                                    
                                                            </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Address</Accordion.Header>
                                                            <Accordion.Body>
                                                        
                                                            <div className="varintRow">
                                                                <div className=" mb-3">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <Form.Label>Mobile Number</Form.Label>
                                                                            <Form.Control type="text" placeholder="+91" />                                          
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Email</Form.Label>
                                                                            <Form.Control type="text" placeholder="Email" />                                          
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mt-3">
                                                                        <div className="col">
                                                                            <Form.Label>Address</Form.Label>
                                                                            <Form.Control type="text" placeholder="Address" />                                          
                                                                        </div>                                                                    
                                                                    </div>
                                                                    <div className="row mt-3">
                                                                        <div className="col">
                                                                            <Form.Label>Country</Form.Label>
                                                                                <select ref={selectRef1} className="wide">
                                                                                    <option value="Featured">India</option>
                                                                                    <option value="10">Australia</option>
                                                                                    <option value="25">Canada</option>
                                                                                </select>                                          
                                                                        </div> 
                                                                        <div className="col">
                                                                            <Form.Label>State</Form.Label>
                                                                                <select ref={selectRef2} className="wide">
                                                                                    <option value="Featured">Haryana</option>
                                                                                    <option value="10">Punjab</option>
                                                                                    <option value="25">UP</option>
                                                                                </select>                                          
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>City</Form.Label>
                                                                                <select ref={selectRef3} className="wide">
                                                                                    <option value="Featured">Ambala Cantt</option>
                                                                                    <option value="10">Panipat</option>
                                                                                    <option value="25">Chandhigarh</option>
                                                                                </select>                                          
                                                                        </div>                                                                   
                                                                    </div>
                                                                </div>
                                                            </div>                                                       
                                                            </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="2">
                                                                <Accordion.Header>Upload Images</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className="col">
                                                                        <div className="mb3">
                                                                            <div className="form-group">
                                                                            <Form.Label>Add Images</Form.Label>
                                                                                <div className="uplogInrDiv"> 
                                                                                <input  type="file"  multiple  className="form-control fileUpload  form-control-lg" /> 
                                                                                    <div className="uploadBlkInr">
                                                                                        <div className="uplogImg">
                                                                                        <img src={upload} alt="" height="50" />
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
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion> */}
                                                        <div className="">
                                                            <button className="btnCommon  mt-3" type="button" onClick={handleSubmit}>Continue</button>
                                                        </div>
                                                    </form>
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
export default EditMerchant;  
