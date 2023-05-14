import React, { useState, useContext } from "react";
import "./creatorHeader.css";
import Logo from "../../../../../assets/logo.png";
import { AiOutlineMenu, AiFillEye } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../Details";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { RiMore2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  selectUserFirstName,
  selectUserLastName,
} from "src/features/authSlice";
/**
 * @author Mahmoud Khaled
 * @description This is Creator Header which will be displayed on Details Page
 * @param {Boolean} MenuShow This Prop used to check whether we need menubar that will be displayed in responsive mood (< 600px) or not
 * @returns {JSX.Element}
 */
const CreatorHeader = ({ MenuShow }) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userFullname = `${userFirstName} ${userLastName}`;
  const dispatch = useDispatch();
  return (
    <div data-testid="HDID" className="header__container">
      <div className="header__container-left">
        <a href="/">
          <img src={Logo} alt="headerLogo" />
        </a>
      </div>

      <div className="header__container-links">
        {/* <div className="header__responsive-links">
          <button className="event__details" style={{ marginRight: "10px" }}>
            <AiFillEye />
          </button>
          <button className="sidebar__details" style={{ marginRight: "10px" }}>
            <MdApps />
          </button>
          <button className="header__more-btn" style={{ marginRight: "45px" }}>
            <RiMore2Fill className="more-logo" />{" "}
            <span style={{ fontSize: "14px" }}>More</span>
          </button>
        </div> */}
        {/* <div className="header__container-link">
          <Link to="/likes">Preview your Event</Link>
        </div>
        <div className="header__container-link">
          <Link to="/publish" style={{ marginLeft: "30px" }}>
            {" "}
            Publish
          </Link>
        </div> */}
        {/* <div className="header__container-link more" onClick = {() => {setShowMore(!showMore)}}>
          <Link to="" >
            {" "}
            More <MdOutlineKeyboardArrowDown className="arrow" />{" "}
          </Link>
          {showMore &&
            <div className="account__dropdown" style={{ height: '56px' }}>
              <div className="account__dropdown-item">
                Copy Event
              </div>
            </div>}
        </div> */}
        <div
          className="header__container-right"
          style={{ marginLeft: "-15px" }}
          onClick={() => setShowAccountSetting(!showAccountSetting)}
        >
          <div className="circular__name">
            {" "}
            {userFirstName[0]}
            {userLastName[0]}
          </div>
          <div className="user__name" style={{ cursor: "pointer" }}>
            <span className="login__name-header pr-10"> {userFullname}</span>{" "}
            {showAccountSetting ? (
              <MdKeyboardArrowUp className="arrow" />
            ) : (
              <MdOutlineKeyboardArrowDown className="arrow" />
            )}
          </div>
          {showAccountSetting && (
            <div className="account__dropdown">
              <div className="account__dropdown-item">
                <HiOutlineSwitchHorizontal className="account__logo" />{" "}
                <a href="/" style={{ fontWeight: "500" }}>
                  <span>Switching to attending</span>
                </a>
              </div>
              <div className="account__dropdown-item">
                <VscAccount className="account__logo" />{" "}
                <a href="/profile" style={{ fontWeight: "500" }}>
                  <span>Account Settings</span>
                </a>
              </div>
              <hr style={{ marginBottom: "3px", marginTop: "5px" }}></hr>
              <div className="account__dropdown-item">
                <BiLogOut className="account__logo" />{" "}
                <a
                  onClick={() => dispatch(logOut())}
                  href="/login"
                  style={{ fontWeight: "500" }}
                >
                  <span>Log out</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {MenuShow && (
        <div className="details-menu">
          <button
            className="menu"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <AiOutlineMenu className="menu-logo" />
          </button>{" "}
          Details{" "}
        </div>
      )}
    </div>
  );
};

export default CreatorHeader;
