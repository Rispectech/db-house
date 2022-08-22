import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Tab, Tabs, Row, Col, Alert, Container, Form, label } from "react-bootstrap";
import AdSidebar from './Sidebar';
import AdNavBar from './NavBar';
import $ from "jquery";
import Style from './AdminStyle';
import plus from "../../assets/images/plus.svg";
import view from "../../assets/images/icons/view-icon.png";
import viewWhite from "../../assets/images/icons/view-white-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import deleteWhite from "../../assets/images/icons/delete-white-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import editWhite from "../../assets/images/icons/edit-white-icon.png";
import { RestAdmin } from "../../rest";
import useAdminAuth from "../../hooks/useAdminAuth";
import { PuffLoader } from "react-spinners";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function MerchantList() {

	const selectRef1 = useRef();
	const isAdmin = useAdminAuth(true);

	const [statusUpdating, setStatusUpdating] = useState(false);
	const [flag, forceUpdate] = useState(false);
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

	const [merchants, setMerchants] = useState(undefined);

	const navigate = useNavigate();

    const editMerchant = (merchant) => {
        navigate('/admin/EditMerchant',{ state: {merchant} })
    }

	const refreshMerchants = async () => {
		let merchants = (await RestAdmin.getAllMerchants());
		setMerchants(merchants);
	};

	useEffect(() => {
		refreshMerchants();
	}, []);

	const handleStatusChange = async (merchant) => {
		setStatusUpdating(true);
		await RestAdmin.updateMerchant({ ...merchant, status: (merchant.status == "INACTIVE") ? "ACTIVE" : "INACTIVE" });
		setStatusUpdating(false);
		refreshMerchants();
	}

	const _delete = async (id) => {
        if (confirm("Do you want to delete Merchant?")) {
			let result = await RestAdmin.deleteMerchant(id);
            if(result.status == 405){
                let message = (await (result).json()).message
                alert(message)
            }
            refreshMerchants();
        }
    }

	return (
		<>
			<Style />
			<article id="root">
				<div className="wrapper">
					<div className="sidebar">
						<AdSidebar />
					</div>
					<div className="content-page">
						<div className="content">
							<div className="MainNavRow">
								<AdNavBar />
							</div>
							<div className="container-fluid ">
								<div className="cardFull p-4">
									<div className="row align-items-center justify-content-center pb-20 hdngRowBlk">
										<div className="col">
											<div className="MainHdng">
												<h4>Merchant List</h4>
											</div>
										</div>
										<div className="col-auto">
											<input type="text" className="form-control" placeholder="Merchant Search.." />
										</div>
										<div className="col-auto">
											<div className="prdctsortCol">
												<div className="form-group">
													<select ref={selectRef3} className="wide">
														<option value="Featured">Search By</option>
														<option value="10">Name</option>
														<option value="25">Email</option>
														<option value="50">Status</option>
														<option value="100">Price</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-auto">
											<div className="prdctsortCol">
												<div className="form-group">
													<select ref={selectRef2} className="wide">
														<option value="Featured">Sort</option>
														<option value="10">10</option>
														<option value="25">25</option>
														<option value="50">50</option>
														<option value="100">100</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-auto">
											<div className="addPrdctBtn">
												<Link to="/admin/addmerchant" className="btnCommon"><span><img src={plus} alt="" height="12" /></span>Add</Link>
											</div>
										</div>
									</div>
									<div className="hrStyle pb-5" ><hr /></div>
									<div className="prdctListTble common-table">

										{!merchants && <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <PuffLoader />
										</div>}

										{merchants?.length < 1 && (<div className="container-fluid" style={{ backgroundColor: '#EEEEEE', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
											No Merchants Found. Please Add Merchants.
										</div>)}

										{merchants?.length > 0 && (
											<Table className="table">
												<thead>
													<tr>
														<th><input className="form-check-input" type="checkbox" /></th>
														<th>Sr. No.</th>
														<th>User Name</th>
														<th>Email</th>
														<th className="text-center">Onboarding Amount</th>
														<th className="text-center">Commision Type</th>
														<th className="text-center">Amount</th>
														<th className="text-center">Commision Value</th>
														<th>Status</th>
														<th align="center" width="150">Action</th>
													</tr>
												</thead>
												<tbody>
													{merchants.map((merchant, index) => {
														return (<tr className="whitebgRow">
															<td>
																<input className="form-check-input" type="checkbox" />
															</td>
															<td>{index + 1}</td>
															<td>
																<div className="prodctTitle">
																	<div className="d-flex">
																		<div><Link to="/admin/merchantprofile">{merchant.firstName} {merchant.lastName}</Link></div>
																	</div>
																</div>
															</td>
															<td>
																<div className="">
																	{merchant.email}
																</div>
															</td>
															<td className="text-center">
																<div className="pdrctCat">
																	$ {merchant.onboardingAmount}
																</div>
															</td>
															<td className="text-center" >
																<div className="">
																	{merchant.commisionType}
																</div>
															</td>
															<td className="price text-center">
																$ {merchant.commisionAmount}
															</td>
															<td className="text-center">
																<div className="SubCat">
																	{merchant.commisionPercentage}%
																</div>
															</td>

															<td className="status">
																<button className={(merchant?.status.toLowerCase() == "active") ? "btnCommon" : "btnDark"} onClick={() => { handleStatusChange(merchant) }} disabled={statusUpdating}>{merchant.status}</button>
															</td>
															<td className="actions">
																<div className="tbl-actn">
																	<ul>
																		<li className="view-btn">
																			<div className="">
																				<a href="/admin/merchantprofile">
																					<img src={view} alt="" height="18" />
																					<span><img src={viewWhite} alt="" height="18" /></span>
																				</a>
																			</div>
																		</li>
																		<li className="edit-btn">
																			<div className="" onClick={()=>{editMerchant(merchant);}}>
																				<a>
																					<img src={editIcon} alt="" height="18" />
																					<span><img src={editWhite} alt="" height="18" /></span>
																				</a>
																			</div>
																		</li>
																		<li className="delete-btn">
																			<div className="">
																				<a onClick={(e) => { e.preventDefault(); _delete(merchant._id); }}>
																					<img src={deleteIcon} alt="" height="18" />
																					<span>
																						<img src={deleteWhite} alt="" height="18" />
																					</span>
																				</a>
																			</div>
																		</li>
																	</ul>
																</div>
															</td>
														</tr>);
													})}
												</tbody>
											</Table>
										)}
									</div>
									{/*<div className="pgntnOuter text-center pt-3 ">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">
                                            <span aria-hidden="true">‹</span>
                                        <span className="visually-hidden">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">2</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" role="button" tabIndex="0" href="#">3</a>
                                    </li>
                                     <li className="page-item active">
                                        <span className="page-link">4<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">…</span>
                                        <span className="visually-hidden">More</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">22</a></li>
                                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">
                                        <span aria-hidden="true">›</span><span className="visually-hidden">Next</span></a>
                                    </li>
                                </ul>
                            </div>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>

	);
}
export default MerchantList;  
