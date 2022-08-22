import React, { useEffect, useState,useRef } from "react";
import {  Form , Accordion, InputGroup,FormControl  } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Style from './AdminStyle';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
window.jQuery = window.$ = $;
require("jquery-nice-select"); 
function Setting() {
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
                            <div className="cardFull Bgwhite Shadow radius20 p-4 mx-4">
                                <div className="addPrdctRow">
                                    <div className="MainHdng mb-3">
                                        <h3>Setting </h3>
                                    </div>
                                    <div className="addAcordion">
                                        <form className="formStyle addFormStyle" action="#"> 
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Setting</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className=" mb-3">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <Form.Label>Name</Form.Label>
                                                                            <Form.Control type="text" placeholder="Enter Name" /> 
                                                                        </div> 
                                                                        <div className="col">
                                                                        <Form.Label>Email</Form.Label>
                                                                            <Form.Control type="text" placeholder="Email" /> 
                                                                        </div>                                                                   
                                                                    </div>                            
                                                                </div>                                                            
                                                                <div className=" mb-15 mt-3">
                                                                    <label className="form-label" htmlFor="input5">Address<span className="contact__form--label__star">*</span></label>
                                                                    <div className="ckEditor">
                                                                    <CKEditor  editor={ ClassicEditor }
                                                                        data="<p>Enter Address</p>"
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
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                <Accordion.Header>Add Social Links</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="row">
                                                        <div className="col">
                                                            <label className="form-label">Facebook</label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text id="basic-addon1" className="facebok">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                                </svg>
                                                                </InputGroup.Text>
                                                                <FormControl
                                                                placeholder="Enter Facebook Link"
                                                                aria-label="Username"
                                                                aria-describedby="basic-addon1"
                                                                />
                                                            </InputGroup>
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label">Google Plus</label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text id="basic-addon1" className="google">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                                                </svg>
                                                                </InputGroup.Text>
                                                                <FormControl
                                                                placeholder="Enter Google Link"
                                                                aria-label="Username"
                                                                aria-describedby="basic-addon1"
                                                                />
                                                            </InputGroup>
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label">Twitter</label>
                                                            <InputGroup className="mb-3">
                                                                <InputGroup.Text id="basic-addon1" className="twitter">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                                                </svg>
                                                                </InputGroup.Text>
                                                                <FormControl
                                                                placeholder="Enter Twitter Link"
                                                                aria-label="Username"
                                                                aria-describedby="basic-addon1"
                                                                />
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                 
                                                </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Upload Images</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="row">
                                                        <div className="col">
                                                            <div className="mb3">
                                                                <div className="form-group">
                                                                <Form.Label>Website Logo</Form.Label>
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
                                                        <div className="col">
                                                            <div className="mb3">
                                                                <div className="form-group">
                                                                <Form.Label>Fav Icon Upload</Form.Label>
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
                                                    </div>
                                                </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>SEO</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="SeoForm">
                                                            <div className="row d-flex align-items-center my-3 mb-4">
                                                            <div className="col-sm-2 text-end">
                                                                    <Form.Label>Title  </Form.Label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <input type="text" name="product_description[1][meta_title]"  placeholder="Title" id="input-meta-title1" className="form-control"/>
                                                                    </div>                                                          
                                                            </div>
                                                            <div className="row d-flex align-items-center my-3  mb-4">
                                                                <div className="col-sm-2 text-end">
                                                                    <Form.Label>Meta Tag Description </Form.Label>                                                                
                                                                </div>
                                                                <div className="col">
                                                                <textarea className="form-control"></textarea>
                                                                </div>                                                          
                                                            </div>
                                                            <div className="row d-flex align-items-center my-3 ">
                                                                <div className="col-sm-2 text-end">
                                                                    <Form.Label>Meta Tag Keywords  </Form.Label>
                                                                </div>
                                                                <div className="col">
                                                                    <textarea className="form-control"></textarea>
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
        </article>
    </>
  );
}
export default Setting;