import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion } from "react-bootstrap";
import Sidebar from './SideBar';
import NavBar from './NavBar';
import Style from './DashboardStyle';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import userImg from "../../assets/images/joshi.jpg";


window.jQuery = window.$ = $;
require("jquery-nice-select"); 
function EditProfile() {
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
    
     return (
        <>
        <Style/>

         <article id="root">
            <div className="wrapper">
                 <div className="sidebar">
                    <Sidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <NavBar/>
                        </div>
                        <div className="container-fluid">
                            <div className="cardFull p-4">
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>Edit Profile</h4>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="addPrdctBtn">
                                            <Link to="/merchant/editprofile" className="btnCommon">
                                                <span className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                    </svg>
                                                </span> Edit Profile
                                                
                                            </Link>  
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <div className="usrPrflBlk text-center">
                                                <div className="usrMedia">
                                                    <img src={userImg} alt="" height="190" className="rounded-circle " />
                                                </div>
                                                <div className="usrTitle mt-3">
                                                    <h4 className="mb-0 mt-2">Pankaj Joshi</h4>
                                                    <p>Founder</p>
                                                </div>
                                                <div className="usrInfo text-start mt-3">
                                                    <h5>ABOUT ME :</h5>
                                                    <p>Hi I'm Pankaj Joshi has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                                </div>
                                                <div className="text-start mt-3">
                                                  <p className="text-muted mb-2 font-13"><strong>Full Name :</strong>
                                                  <span className="ms-2">Pankaj Joshi</span></p>
                                                  <p className="text-muted mb-2 font-13">
                                                    <strong>Mobile :</strong>
                                                    <span className="ms-2">+91 98960 98960</span></p>
                                                    <p className="text-muted mb-2 font-13">
                                                        <strong>Email :</strong>
                                                        <span className="ms-2 ">info@email.com</span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Address :</strong>
                                                        <span className="ms-2">123 Near Rama Petrol Pumb  </span>
                                                    </p>
                                                    <p className="text-muted mb-1 font-13">
                                                        <strong>Location :</strong>
                                                        <span className="ms-2">Ambala Cantt, Haryana India </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <div className="addAcordion">
                                                <form className="formStyle addFormStyle" action="#"> 
                                                    <Accordion defaultActiveKey="0">
                                                        <Accordion.Item eventKey="0">
                                                        <Accordion.Header>PERSONAL INFO</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className=" mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <Form.Label>First Name</Form.Label>
                                                                                <Form.Control type="text" placeholder="First Name" /> 
                                                                            </div> 
                                                                            <div className="col">
                                                                                <Form.Label>Last Name</Form.Label>
                                                                                <Form.Control type="text" placeholder="Last Name" /> 
                                                                            </div>
                                                                            <div className="col">
                                                                                <Form.Label>Business Name</Form.Label>
                                                                                <Form.Control type="text" placeholder="Business Name" /> 
                                                                            </div>                                                                   
                                                                        </div>                            
                                                                    </div>
                                                                    <div className=" mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <Form.Label>About Info</Form.Label>
                                                                                <textarea className="form-control" name="message" id="input5" placeholder="About Info">
                                                                        </textarea>
                                                                               
                                                                            </div> 
                                                                                                                                    
                                                                        </div>                            
                                                                    </div>                                                                                                                                                 
                                                                </div>
                                                            </div>                                                        
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
                                                    </Accordion>
                                                    <div className="">
                                                        <button className="btnCommon  mt-3 " type="submit">Continue</button>  
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
export default EditProfile;  
