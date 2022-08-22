import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
import Sidebar from './Sidebar';
import Style from './AdminStyle';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import { RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";

window.jQuery = window.$ = $;
require("jquery-nice-select");

function AddMerchant() {

    const navigate = useNavigate()
    const isAdmin = useAdminAuth(true);
    const selectRef1 = useRef();

    const [formErrors, setFormErrors] = useState({
        merchantFirstName: false,
        merchantLastName: false,
        merchantEmail: false,
        merchantPassword: false,
        onboardingAmount: false,
        commisionType: false,
        commisionPercentage: false,
        commisionAmount: false
    })

    useEffect(() => {
        $(selectRef1.current).niceSelect();
        $(selectRef1.current).on("change", (e) => {
            updateDisabled();
        })
    }, []);

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

    const selectRef2 = useRef();
    useEffect(() => {
        $(selectRef2.current).niceSelect();
    }, []);

    const selectRef3 = useRef();
    useEffect(() => {
        $(selectRef3.current).niceSelect();
    }, []);

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        onboardingAmount: "",
        commisionPercentage: "",
        commisionAmount: ""
    };
    const [noOfRows, setNoOfRows] = useState(1);
    const [formData, setFormData] = useState(initialFormData);
    const [disable, setDisabled] = useState(false);

    const updateDisabled = useCallback(
        () => {
            // if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.onboardingAmount || !formData.commisionPercentage || !formData.commisionAmount) setDisabled(true);
            // else setDisabled(false);
        },
        [formData],
    );

    const handleChange = ({ nativeEvent }) => {
        let _formData = formData;
        _formData[nativeEvent.target.name] = nativeEvent.target.value;
        setFormData({ ..._formData });
        updateDisabled();
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
            merchantPassword: false,
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
        if (!password || !password.length || password.length < 6) {
            formErrors.merchantPassword = `Invalid password (Minimum 6 characters required)`
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
        if (!commisionPercentage || commisionPercentage < 0 || commisionPercentage > 100) {
            formErrors.commisionPercentage = `Invalid Commision Percentage`
            isError = true
        }
        if (!commisionAmount) {
            formErrors.commisionAmount = `Invalid Commision Amount`
            isError = true
        }
        setFormErrors(formErrors)
        if (!isError) {
            let result = await RestAdmin.merchantSignup(email, password)
            await RestAdmin.updateMerchant({
                ...result?.user,
                commisionAmount,
                commisionPercentage,
                commisionType,
                email,
                firstName,
                lastName,
                identification: [],
                onboardingAmount
            });
            if (imagesToUpload.length > 0 && result.user._id) {
                const merchantFormData = new FormData();
                merchantFormData.append("merchantId", result.user._id);
                for (let image of imagesToUpload) {
                    merchantFormData.append("image", image.image);
                }
                const createCategoryImageResponse = await RestAdmin.newMerchantImages(merchantFormData);
            }
            $(selectRef1.current).val(undefined);
            setFormData(initialFormData);
            setImagesToUpload([])
            navigate('/admin/merchantlist')
            setDisabled(false);
        }
    }

    return (
        <>
            <Style />
            <article id="root">
                <div className="wrapper">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <NavBar />
                            </div>
                            <div className="container-fluid">
                                <div className="cardFull p-4">
                                    <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>Merchant Profile </h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="addPrdctBtn">
                                                <Link to="/admin/merchantlist" className="btnCommon">
                                                    <span className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                                            <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                                                        </svg>
                                                    </span> Merchant List
                                                </Link>
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
                                                                            <Form.Control type="text" placeholder="First Name" className="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
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
                                                                            <Form.Control type="email" placeholder="Email" className="email" name="email" value={formData.email} onChange={handleChange} />
                                                                            {formErrors.merchantEmail && (
                                                                                <p className="text-danger mt-2">* {formErrors.merchantEmail}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Password</Form.Label>
                                                                            <Form.Control type="password" placeholder="Password" className="password" name="password" value={formData.password} onChange={handleChange} />
                                                                            {formErrors.merchantPassword && (
                                                                                <p className="text-danger mt-2">* {formErrors.merchantPassword}</p>
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
                                                                            <Form.Control type="number" placeholder="$10" className="onboardingAmount" name="onboardingAmount" value={formData.onboardingAmount} onChange={handleChange} />
                                                                            {formErrors.onboardingAmount && (
                                                                                <p className="text-danger mt-2">* {formErrors.onboardingAmount}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Commision Type </Form.Label>
                                                                            <select ref={selectRef1} className="wide commisionType" name="commisionType" value={formData.commisionType} onChange={handleChange}>
                                                                                <option value="PERCENTAGE">%</option>
                                                                                <option value="FIXED">Fix</option>
                                                                            </select>
                                                                            {formErrors.commisionType && (
                                                                                <p className="text-danger mt-2">* {formErrors.commisionType}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Commision Percentage (%)</Form.Label>
                                                                            <Form.Control type="number" placeholder="10%" className="commisionPercentage" name="commisionPercentage" value={formData.commisionPercentage} onChange={handleChange} />
                                                                            {formErrors.commisionPercentage && (
                                                                                <p className="text-danger mt-2">* {formErrors.commisionPercentage}</p>
                                                                            )}
                                                                        </div>
                                                                        <div className="col">
                                                                            <Form.Label>Amount</Form.Label>
                                                                            <Form.Control type="number" placeholder="$10" className="commisionAmount" name="commisionAmount" value={formData.commisionAmount} onChange={handleChange} />
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
                                                            <button className="btnCommon mt-3" type="button" disabled={disable} onClick={handleSubmit}>Continue</button>
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
export default AddMerchant;
