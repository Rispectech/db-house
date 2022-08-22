import React, { useEffect, useState,useRef } from "react";
import { Link, NavLink,} from "react-router-dom";
import { Button,Table, Tab, Tabs,Row, Col, Alert, Container, Form ,label, Accordion } from "react-bootstrap";
import Style from './DashboardStyle';
import Sidebar from './SideBar';
import NavBar from './NavBar';  
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import $ from "jquery";
import upload from "../../assets/images/uploadIcon.svg";
import noimage from "../../assets/images/noImage.jpg";
import plus from "../../assets/images/plus.svg";
import product1 from "../../assets/images/productImg1.jpg";
import product2 from "../../assets/images/productImg2.jpg";
import product3 from "../../assets/images/productImg3.jpg";
import product4 from "../../assets/images/productImg4.jpg";
import product5 from "../../assets/images/productImg5.jpg";
window.jQuery = window.$ = $;
require("jquery-nice-select"); 
function ViewProduct() {
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
                                        <h3>View Product</h3>
                                    </div>
                                    <div className="addAcordion">
                                        <form className="formStyle addFormStyle" action="#"> 
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                <Accordion.Header> Product Info</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className=" mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <Form.Label>Product Name</Form.Label>
                                                                        <Form.Control disabled type="text" placeholder="G654 Pangdang Granite Pedestal..." /> 
                                                                    </div> 
                                                                    <div className="col">
                                                                        <Form.Label>White Stone </Form.Label>
                                                                        <select ref={selectRef3} className="wide" disabled>
                                                                                <option value="Featured">Brand Name </option>
                                                                                <option value="10">Taneja Marbel</option>
                                                                                <option value="25">Brand Name Three</option>
                                                                            </select>
                                                                    </div>                                                                   
                                                                </div>                            
                                                            </div>

                                                            <div className=" mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <Form.Label>Add Category <span className="contact_star">*</span></Form.Label>
                                                                        <div className="form-group">
                                                                            <select ref={selectRef1} className="wide" disabled>
                                                                                <option value="Featured">Stone</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <Form.Label>Add Sub Category <span className="contact_star">*</span></Form.Label>
                                                                        <div className="form-group">
                                                                            <select ref={selectRef2} className="wide" disabled>
                                                                                <option value="Featured">White Stone</option>                                                                               
                                                                            </select>
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                            </div>                                                            
                                                            <div className=" mb-15">
                                                                <label className="form-label" htmlFor="input5">Product Description <span className="contact__form--label__star">*</span></label>
                                                                <div className="ckEditor">
                                                                <CKEditor   editor={ ClassicEditor }
                                                                    data="<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                                                    and more recently with desktop publishing software 
                                                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>"
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
                                                <Accordion.Item eventKey="0">
                                                <Accordion.Header>Add Varients</Accordion.Header>
                                                <Accordion.Body>
                                                   <div className="varintRow">
                                                    <div className=" mb-3">
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <Form.Label>Size</Form.Label>
                                                                <Form.Control type="text" placeholder="size.." disabled />                                          
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <Form.Label>Dimension</Form.Label>
                                                                <Form.Control type="text" placeholder="10x10x20" disabled />                                          
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <Form.Label>Price</Form.Label>
                                                                <Form.Control type="email" placeholder="$10" disabled />                                          
                                                            </div>                                                         
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-sm-4">
                                                                <Form.Label>Size</Form.Label>
                                                                <Form.Control type="text" placeholder="size.." disabled />                                          
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <Form.Label>Dimension</Form.Label>
                                                                <Form.Control type="text" placeholder="10x10x20" disabled />                                          
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <Form.Label>Price</Form.Label>
                                                                <Form.Control type="email" placeholder="$10" disabled />                                          
                                                            </div>                                                         
                                                        </div>
                                                    </div>
                                                   </div>
                                                   
                                                </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Images</Accordion.Header>
                                                    <Accordion.Body>
                                                    <div className="col">
                                                                       
                                                                        <div className="row form-group preview">
                                                                            <div className="col-md-2 col-sm-3 pt-4 pb-3 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product1} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product2} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product3} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product4} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product5} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                            <div className="col-md-2 col-sm-3 pt-4 col-xs-6 removebannerpreview">
                                                                                <div className="addPhotoItem">
                                                                                    <div className="addPhotoItemMedia imgClose">
                                                                                        <img src={product1} alt="" height="220" className="rounded img-responsive" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>                                              
                                                                        </div>                                
                                                                    </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            {/* <div className="">
                                                <button className="btnCommon  mt-3 " type="submit">Continue</button>  
                                            </div> */}
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
export default ViewProduct;  
