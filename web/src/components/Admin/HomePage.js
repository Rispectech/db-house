import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label, Accordion } from "react-bootstrap";
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

function HomePage() {

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
            <Style />



            <article id="root" className="mainRoot">
                <div className="wrapper">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content-page">
                        <div className="content">
                            <div className="MainNavRow">
                                <NavBar />
                            </div>
                            <div className="container-fluid  mt-4">
                                <div className="bnrBlk">
                                    <div className="Bgwhite Shadow radius20 p-4 mx-4">
                                        <div className="addPrdctRow">
                                            <div className="MainHdng mb-3">
                                                <h3>Add Main Banner</h3>
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
                                                                    <div className="col">
                                                                        <div className=" mb-3">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <Form.Label>Banner Title</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Title" />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Button Title</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Button Title" />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Button Link</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Link" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
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

                                <div className="Bgwhite Shadow radius20 p-4 mx-4 mt-4">
                                    <div className="addPrdctRow">
                                        <div className="MainHdng mb-3">
                                            <h3>Add Small Banner</h3>
                                        </div>
                                        <div className="addAcordion">
                                            <form className="formStyle addFormStyle" action="#">
                                                <div className="lghtBg">
                                                    <div className="row">

                                                        <div className="col">
                                                            <div className="greyCol">
                                                                <div className="row" >
                                                                    <div className="col">
                                                                        <div className=" mb-3">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <Form.Label>Banner Title</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Title" />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Button Title</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Button Title" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                                        </div>


                                                        <div className="col">
                                                            <div className="greyCol">
                                                                <div className="row" >
                                                                    <div className="col">
                                                                        <div className=" mb-3">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <Form.Label>Banner Title</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Title" />
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Form.Label>Button Link</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Link" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <button className="btnCommon" type="submit">Continue</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="Bgwhite Shadow radius20 p-4 mx-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3">
                                                    <h3>Material Selection</h3>
                                                </div>
                                                <div className="addAcordion">
                                                    <form className="formStyle addFormStyle" action="#">
                                                        <div className="lghtBg">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb3">
                                                                        <div className="form-group">
                                                                            <div className="mb3">
                                                                                <div className="form-group">
                                                                                    <Form.Label>Choose Three Categories </Form.Label>
                                                                                    <div className="multiSelctCustom">
                                                                                        <Multiselect
                                                                                            displayValue="key"
                                                                                            onKeyPressFn={function noRefCheck() { }}
                                                                                            onRemove={function noRefCheck() { }}
                                                                                            onSearch={function noRefCheck() { }}
                                                                                            onSelect={function noRefCheck() { }}
                                                                                            options={[
                                                                                                {
                                                                                                    cat: 'Category One',
                                                                                                    key: 'Category One'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Two',
                                                                                                    key: 'Category Two'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Three',
                                                                                                    key: 'Category Three'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Four',
                                                                                                    key: 'Category Four'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Five',
                                                                                                    key: 'Category Five'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                }
                                                                                            ]}
                                                                                            selectionLimit={3}
                                                                                            placeholder="Select Category"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3">
                                                    <h3>Shop By Category</h3>
                                                </div>
                                                <div className="addAcordion">
                                                    <form className="formStyle addFormStyle" action="#">
                                                        <div className="lghtBg">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb3">
                                                                        <div className="form-group">
                                                                            <div className="mb3">
                                                                                <div className="form-group">
                                                                                    <Form.Label>Choose Any Eight </Form.Label>
                                                                                    <div className="multiSelctCustom">
                                                                                        <Multiselect
                                                                                            displayValue="key"
                                                                                            onKeyPressFn={function noRefCheck() { }}
                                                                                            onRemove={function noRefCheck() { }}
                                                                                            onSearch={function noRefCheck() { }}
                                                                                            onSelect={function noRefCheck() { }}
                                                                                            options={[
                                                                                                {
                                                                                                    cat: 'Category One',
                                                                                                    key: 'Category One'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Two',
                                                                                                    key: 'Category Two'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Three',
                                                                                                    key: 'Category Three'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Four',
                                                                                                    key: 'Category Four'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Five',
                                                                                                    key: 'Category Five'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                }
                                                                                            ]}
                                                                                            selectionLimit={8}
                                                                                            placeholder="Select Category"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Bgwhite Shadow radius20 p-4 mx-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3">
                                                    <h3>Material Selection 2</h3>
                                                </div>
                                                <div className="addAcordion">
                                                    <form className="formStyle addFormStyle" action="#">
                                                        <div className="lghtBg">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb3">
                                                                        <div className="form-group">
                                                                            <div className="mb3">
                                                                                <div className="form-group">
                                                                                    <Form.Label>Choose Material Selection Three Categories </Form.Label>
                                                                                    <div className="multiSelctCustom">
                                                                                        <Multiselect
                                                                                            displayValue="key"
                                                                                            onKeyPressFn={function noRefCheck() { }}
                                                                                            onRemove={function noRefCheck() { }}
                                                                                            onSearch={function noRefCheck() { }}
                                                                                            onSelect={function noRefCheck() { }}
                                                                                            options={[
                                                                                                {
                                                                                                    cat: 'Category One',
                                                                                                    key: 'Category One'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Two',
                                                                                                    key: 'Category Two'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Three',
                                                                                                    key: 'Category Three'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Four',
                                                                                                    key: 'Category Four'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Five',
                                                                                                    key: 'Category Five'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Category Six',
                                                                                                    key: 'Category Six'
                                                                                                }
                                                                                            ]}
                                                                                            selectionLimit={3}
                                                                                            placeholder="Select Category"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3" >
                                                    <h3>Featured Products</h3>
                                                </div>
                                                <div className="addAcordion">
                                                    <form className="formStyle addFormStyle" action="#">
                                                        <div className="lghtBg">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb3">
                                                                        <div className="form-group">
                                                                            <div className="mb3">
                                                                                <div className="form-group">
                                                                                    <Form.Label>Choose Any Four Latest Product </Form.Label>
                                                                                    <div className="multiSelctCustom">
                                                                                        <Multiselect
                                                                                            displayValue="key"
                                                                                            onKeyPressFn={function noRefCheck() { }}
                                                                                            onRemove={function noRefCheck() { }}
                                                                                            onSearch={function noRefCheck() { }}
                                                                                            onSelect={function noRefCheck() { }}
                                                                                            options={[
                                                                                                {
                                                                                                    cat: 'Product One',
                                                                                                    key: 'Product One'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Two',
                                                                                                    key: 'Product Two'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Three',
                                                                                                    key: 'Product Three'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Four',
                                                                                                    key: 'Product Four'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Five',
                                                                                                    key: 'Product Five'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Six',
                                                                                                    key: 'Product Six'
                                                                                                },
                                                                                                {
                                                                                                    cat: 'Product Six',
                                                                                                    key: 'Product Six'
                                                                                                }
                                                                                            ]}
                                                                                            selectionLimit={8}
                                                                                            placeholder="Select Product"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Bgwhite Shadow radius20 p-4 mx-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3">
                                                    <h3>Benefits of having Marble</h3>
                                                </div>
                                                <div className="ckEditor">
                                                    <CKEditor editor={ClassicEditor}
                                                        data="<p>Specification</p>"
                                                        onReady={editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log('Editor is ready to use!', editor);
                                                        }}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            console.log({ event, editor, data });
                                                        }}
                                                        onBlur={(event, editor) => {
                                                            console.log('Blur.', editor);
                                                        }}
                                                        onFocus={(event, editor) => {
                                                            console.log('Focus.', editor);
                                                        }}
                                                    />
                                                </div>
                                                <div className="addFormStyle mt-3">
                                                    <button className="btnCommon" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="addPrdctRow">
                                                <div className="MainHdng mb-3">
                                                    <h3>About Us</h3>
                                                </div>
                                                <div className="ckEditor">
                                                    <CKEditor editor={ClassicEditor}
                                                        data="<p>Specification</p>"
                                                        onReady={editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            console.log('Editor is ready to use!', editor);
                                                        }}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            console.log({ event, editor, data });
                                                        }}
                                                        onBlur={(event, editor) => {
                                                            console.log('Blur.', editor);
                                                        }}
                                                        onFocus={(event, editor) => {
                                                            console.log('Focus.', editor);
                                                        }}
                                                    />
                                                </div>
                                                <div className="addFormStyle mt-3">
                                                    <button className="btnCommon" type="submit">Submit</button>
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
export default HomePage;  
