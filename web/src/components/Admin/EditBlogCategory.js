import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion } from "react-bootstrap";
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
function EditBlogCategory() {
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
                                    <div className="MainHdng">
                                        <h3>Edit Category</h3>
                                    </div>
                                    <div className="hrStyle pb-5"><hr/></div>
                                    <div className="addAcordion">
                                        <form className="formStyle addFormStyle" action="#">
                                            <div className="row row d-flex align-items-center ">
                                                <div className="col-sm-2 text-end">
                                                    <Form.Label>Category Name </Form.Label>
                                                </div>
                                                <div className="col">
                                                <Form.Control type="text" placeholder="Enter Category Name" /> 
                                                </div>
                                            </div>                                                    
                                            <div className=" mb-15">
                                                <div className="row row d-flex align-items-center mt-4">
                                                    <div className="col-sm-2 text-end">
                                                        <label className="form-label" htmlFor="input5">Description <span className="contact__form--label__star">*</span></label>
                                                    </div>
                                                    <div className="col">
                                                        <div className="ckEditor">
                                                            <CKEditor  editor={ ClassicEditor }
                                                                data="<p>Description</p>"
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
                                            <div className="mb-15 mt-4">
                                                <div className="row">
                                                    <div className="col-sm-2 text-end">
                                                        <Form.Label>Add Image</Form.Label>
                                                    </div> 
                                                    <div className="col">
                                                        <div className="form-group">
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
                                            <div className="SeoForm">
                                                <div className="row d-flex align-items-center my-3 mb-4">
                                                    <div className="col-sm-2 text-end">
                                                        <Form.Label>Meta Tag Title </Form.Label>
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
                                            <div className="row d-flex align-items-center my-3  mb-4">
                                                <div className="col-sm-2 text-end">
                                                </div>
                                                <div className="col">
                                                    <button className="btnCommon  mt-3 " type="submit">Continue</button>  
                                                </div>  
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
export default EditBlogCategory;  
