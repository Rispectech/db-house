import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label } from "react-bootstrap";
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
import upload from "../../assets/images/uploadIcon.svg";

window.jQuery = window.$ = $;
require("jquery-nice-select");
function UserEdit() {
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
    
     return (
        <>
        <Style/>
         <article id="root">
            <div className="wrapper">
                 <div className="sidebar">
                 <AdSidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <AdNavBar/>
                        </div>
                        <div className="container-fluid ">
                            <div className="cardFull p-4">
                                <div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
                                    <div className="col">
                                        <div className="MainHdng">
                                            <h4>Edit User</h4>
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-4" ><hr/></div>
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
                                                                                    <Form.Control type="text" placeholder="Pankaj" value="Pankaj" /> 
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <Form.Label>Last Name</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Joshi" value="Joshi" /> 
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Email ID</Form.Label>
                                                                                    <Form.Control type="text" placeholder="joshi1309@gmail.com" value="joshi1309@gmail.com" /> 
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
                                                                                    <Form.Control type="text" placeholder="$10"  value="$10"  /> 
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <Form.Label>Commision Type </Form.Label>
                                                                                    <select ref={selectRef1} className="wide">
                                                                                    <option value="Featured">%</option>
                                                                                    <option value="10">Fix</option>
                                                                                    </select>  
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Commision Value </Form.Label>
                                                                                    <Form.Control type="text" placeholder="10%" value="10%" /> 
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Amount</Form.Label>
                                                                                    <Form.Control type="text" placeholder="$10" value="$10" /> 
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
export default UserEdit;  
