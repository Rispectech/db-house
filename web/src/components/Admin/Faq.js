import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion, ToastBody } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Style from './AdminStyle';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
window.jQuery = window.$ = $;

require("jquery-nice-select"); 

function Faq() {    
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
        <article id="root" className="mainRoot">
            <div className="wrapper">
                 <div className="sidebar">
                    <Sidebar/>
                 </div>
                <div className="content-page">
                    <div className="content">
                        <div className="MainNavRow">
                        <NavBar/>
                        </div>
                        <div className="container-fluid  mt-4">
                            <div className="bnrBlk">
                                <div className="Bgwhite Shadow radius20 p-4 mx-4">
                                    <div className="addPrdctRow">
                                        <div className="MainHdng mb-4">
                                            <h3>FAQ</h3>
                                        </div>
                                        <div className="addBnrRow">
                                            <form className="formStyle addFormStyle" action="#"> 
                                                {[...Array(noOfRows)].map((elementInArray, index) => {            
                                                return (
                                                <div className="bnrCol">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="float-end">
                                                                <button type="button" className="btnCommon me-3" onClick={() => setNoOfRows(noOfRows + 1)}><span><img src={plus} alt="" height="12" /></span> Add More</button>
                                                                <button type="button" className="btnCommon btnDark deletBtn" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" >
                                                        <div className="col mb-3">
                                                            <Form.Label>Question</Form.Label>
                                                            <Form.Control type="text" placeholder="Question" /> 
                                                        </div>                                                       
                                                    </div>
                                                    <div className="row">
                                                        <div className="col mb-3">
                                                            <Form.Label>Answer</Form.Label>
                                                                <div className="ckEditor">
                                                                    <CKEditor  editor={ ClassicEditor }
                                                                        data="<p>Answer</p>"
                                                                        onReady={ editor => {
                                                                            // You can store the "editor" and use when it is needed.
                                                                            console.log( 'Editor is ready to use!', editor );
                                                                        } }
                                                                        onChange={ ( event, editor ) => {
                                                                            const data = editor.getData();
                                                                            console.log( { event, editor, data } );
                                                                        } }
                                                                        onBlur={ ( event, editor ) => {
                                                                            console.log( 'Blur.', editor );
                                                                        } }
                                                                        onFocus={ ( event, editor ) => {
                                                                            console.log( 'Focus.', editor );
                                                                        } }
                                                                    />
                                                                </div> 
                                                        </div>                                                       
                                                    </div>
                                                </div>                                                
                                                  );
                                                })}
                                                <div className="">
                                                    <button className="btnCommon" type="submit">Submit</button>  
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
         </article>
         </>
  );
}
export default Faq;