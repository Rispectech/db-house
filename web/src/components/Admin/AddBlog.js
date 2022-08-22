import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import {  Form , Accordion } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Style from './AdminStyle';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";

window.jQuery = window.$ = $;
require("jquery-nice-select"); 
function AddBlog() {
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
                            <div className="cardFull  Bgwhite Shadow radius20 p-4 mx-4">
                                <div className="addPrdctRow">
                                    <div className="MainHdng mb-3">
                                        <h3>Add Blog</h3>
                                    </div>
                                    <div className="addAcordion">
                                        <form className="formStyle addFormStyle" action="#"> 
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                <Accordion.Header>Add Blog Info</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className=" mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <Form.Label>Blog Title</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter Blog Title" /> 
                                                                    </div> 
                                                                    <div className="col">
                                                                        <Form.Label>Choose Category <span className="contact_star">*</span></Form.Label>
                                                                        <div className="form-group">
                                                                            <select ref={selectRef1} className="wide">
                                                                                <option value="Featured">Stone</option>
                                                                                <option value="10">Marbel</option>
                                                                                <option value="25">White Floor Tiles</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>                                                                  
                                                                </div>                            
                                                            </div>

                                                            <div className=" mb-15">
                                                                <label className="form-label" htmlFor="input5">Blog Description <span className="contact__form--label__star">*</span></label>
                                                                <div className="ckEditor">
                                                                <CKEditor  editor={ ClassicEditor }
                                                                    data="<p>Blog Description</p>"
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
                                                                        <div className="row form-group preview">
                                                                            <div className="col-md-2 col-sm-3 pt-4 pb-3 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={noimage} alt="" height="220" className="rounded img-responsive" />
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
                                                                <Form.Label>Meta Tag Title  </Form.Label>
                                                                </div>
                                                                <div className="col">
                                                                    <input type="text" name="product_description[1][meta_title]"  placeholder="Meta Tag Title" id="input-meta-title1" className="form-control"/>
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
export default AddBlog;  
