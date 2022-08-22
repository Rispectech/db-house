import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion } from "react-bootstrap";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';


window.jQuery = window.$ = $;
require("jquery-nice-select"); 
function AdminChangePassword() {
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
                                            <h4>Change Password</h4>
                                        </div>
                                    </div>
                                </div>                              
                                <div className="hrStyle pb-5" ><hr/></div>
                                <div className="row justify-content-sm-center">
                                    <div className="col-sm-9 align-self-center ">
                                        <div className=" Bgwhite Shadow radius20 p-4">
                                            <div className="addAcordion">
                                                <form className="formStyle addFormStyle" action="#"> 
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <Form.Label>Old Password</Form.Label>
                                                        <Form.Control type="text" placeholder="Old Password" /> 
                                                    </div>                                                                                                                      
                                                </div> 
                                                <div className="row  mb-3">
                                                    <div className="col">
                                                        <Form.Label>New Password</Form.Label>
                                                        <Form.Control type="text" placeholder="New Password" /> 
                                                    </div>                                                     
                                                </div>
                                                <div className="row ">
                                                    <div className="col">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <Form.Control type="text" placeholder="Confirm Password" /> 
                                                    </div>                                                     
                                                </div>
                                                    <div className="">
                                                        <button className="btnCommon  mt-3 " type="submit">Submit</button>  
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
export default AdminChangePassword;  
