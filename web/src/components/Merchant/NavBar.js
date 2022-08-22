import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Style from './DashboardStyle';
import notification from "../../assets/images/notification.svg";
import UserIcon from "../../assets/images/userIcon.png";
import navBarIcon from "../../assets/images/barIcon.svg";
import SetingUser from "../../assets/images/settingIcons/userIcon.svg";
import Edit from "../../assets/images/settingIcons/editIcon.svg";
import Wallet from "../../assets/images/settingIcons/walletIcon.svg";
import ChangePassword from "../../assets/images/settingIcons/changePaswrd.svg";
import SetingLogout from "../../assets/images/settingIcons/logout.svg";
import { Button, Modal, Dropdown, DropdownButton, Offcanvas, Accordion } from "react-bootstrap";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../../redux/stateActions";

function NavBar() {


  const user = useSelector(s => s.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick = event => {
    event.currentTarget.classList.toggle('close');
  };

  const showonclick = event => {
    $("#root").toggleClass("intro");

  };
  const [show, setShow] = React.useState();
  return (
    <div className="navbar-custom align-items-center row  d-flex justify-content-between">
      <div className="row d-flex align-items-center">
        <div className="col">
          <div className="navBarClose">
            <a href="javascript:void(0);" onClick={() => showonclick()}>
              <img src={navBarIcon} alt="" height="18" className="" />
            </a>
          </div>
        </div>
        <div className="col-auto">
          <div className="navRightSideBar d-flex align-items-center">
            <div className="notification-list">
              <Dropdown>
                <Dropdown.Toggle className="notificatnCol" id="dropdown-basic">
                  <span><img src={notification} alt="" height="22" /></span>
                  <i className="notificationCryle"></i>
                </Dropdown.Toggle>
                {/* <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu> */}
              </Dropdown>
            </div>
            <div className="acntUsrBlk">
              <Dropdown>
                <Dropdown.Toggle className="notificatnCol" id="dropdown-basic">
                  <div className="userContnt d-flex">
                    <div className="usrImg"><span><img src={UserIcon} alt="" height="40" className="rounded-circle" /></span></div>
                    <div>
                      <p>Welcome</p>
                      {Boolean(user?.user?.firstName) && (
                        <h5>{user?.user?.firstName}</h5>
                      )}
                      {!Boolean(user?.user?.firstName) && (
                        <h5>Merchant</h5>
                      )}
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/merchant/myprofile"><span><img src={SetingUser} alt="" height="13" /></span> View Profile</Dropdown.Item>
                  <Dropdown.Item href="/merchant/editprofile"><span><img src={Edit} alt="" height="13" /></span> Edit Profile</Dropdown.Item>
                  <Dropdown.Item href="/merchant/merchantpassword"><span><img src={ChangePassword} alt="" height="13" /></span> Change Password</Dropdown.Item>
                  <Dropdown.Item>
                    <div onClick={() => {
                      dispatch(stateActions.logout())
                      navigate('/merchant/login')
                    }}>
                      <span>
                        <img src={SetingLogout} alt="" height="13" />
                      </span> Logout
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;