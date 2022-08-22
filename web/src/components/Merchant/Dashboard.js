import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, } from "react-router-dom";
import Sidebar from './SideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar';
import $ from "jquery";
import Style from './DashboardStyle';
import order from "../../assets/images/orderWhite.svg";
import product from "../../assets/images/productWhite.svg";
import payment from "../../assets/images/paymentWhite.svg";
import expertation from "../../assets/images/ExpertationWhite.svg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import useMerchantAuth from "../../hooks/useMerchantAuth";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function Dashboard() {

    const isMerchant = useMerchantAuth(true)

    const selectRef1 = useRef();
    useEffect(() => {
        $(selectRef1.current).niceSelect();
    }, []);
    const data = [
        { name: 'Jan', uv: 380, pv: 480, amt: 2400 },
        { name: 'Feb', uv: 150, pv: 420, amt: 1500 },
        { name: 'March', uv: 240, pv: 420, amt: 1500 },
        { name: 'April', uv: 305, pv: 420, amt: 1500 },
        { name: 'May', uv: 110, pv: 420, amt: 1500 },
        { name: 'June', uv: 340, pv: 420, amt: 1500 },
        { name: 'July', uv: 140, pv: 420, amt: 1500 },
    ];

    const [startDate, setStartDate] = useState(new Date());

    const chart = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];



    return (
        <>
            <Style />
            <article id="root" >
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
                                <div className="cardFull  Bgwhite Shadow radius20 p-4 mx-4">
                                    <div className="dashBrCardRow">
                                        <div className="row">
                                            <div className="col">
                                                <div className="dashBrdCard">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <div className="dsbrdIcon">
                                                                <img src={order} alt="" height="50" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="dshbrColCnt">
                                                                <div className="dshbrCrdTitle">
                                                                    <p>Total Orders</p>
                                                                </div>
                                                                <div className="dshbrCrdTtal">
                                                                    <h5>2548</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="dashBrdCard">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <div className="dsbrdIcon blueLightBg">
                                                                <img src={product} alt="" height="50" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="dshbrColCnt">
                                                                <div className="dshbrCrdTitle">
                                                                    <p>Total Products</p>
                                                                </div>
                                                                <div className="dshbrCrdTtal">
                                                                    <h5>2548</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="dashBrdCard">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <div className="dsbrdIcon yeloBg">
                                                                <img src={payment} alt="" height="50" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="dshbrColCnt">
                                                                <div className="dshbrCrdTitle">
                                                                    <p>Total Payment</p>
                                                                </div>
                                                                <div className="dshbrCrdTtal">
                                                                    <h5>£4526</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="dashBrdCard">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <div className="dsbrdIcon grenBg">
                                                                <img src={expertation} alt="" height="50" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="dshbrColCnt">
                                                                <div className="dshbrCrdTitle">
                                                                    <p>Expertation</p>
                                                                </div>
                                                                <div className="dshbrCrdTtal">
                                                                    <h5>526</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBrdr mt-3 p-3">
                                        <div className="row d-flex align-items-center pb-3 p-3">
                                            <div className="col">
                                                <div className="MainHdng">
                                                    <h3>Dashboard</h3>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="hdngDropDwn">
                                                    <div className="form-group">
                                                        <div className="mrchntDatePickr">
                                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />
                                                        </div>

                                                        {/* <select ref={selectRef1} className="wide">
                                                        <option value="Featured">16 May - 15 June</option>
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <BarChart width={700} height={340} data={data}>
                                                    <XAxis dataKey="name" stroke="#767676" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <CartesianGrid stroke="#ddd" strokeDasharray="4 4" />
                                                    <Bar dataKey="uv" fill="#F2672A" barSize={20} />
                                                </BarChart>
                                            </div>
                                            <div className="col-md-6">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <LineChart
                                                        width={700}
                                                        height={360}
                                                        data={chart}
                                                        margin={{
                                                            top: 0,
                                                            right: 30,
                                                            left: 0,
                                                            bottom: 0,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                    </LineChart>
                                                </ResponsiveContainer>
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
export default Dashboard;