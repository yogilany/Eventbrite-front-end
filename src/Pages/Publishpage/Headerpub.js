import React from "react";
import "./Headerpub.css";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { MdApps } from 'react-icons/md'
import { RiMore2Fill } from 'react-icons/ri'
import { Link } from "react-router-dom";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows header of the page.
 * @returns {JSX.Element of Header component found in publish page}
 */
const Headerpub = (props) => {
  const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="header_container" data-testid={props.data_testid}>
      <div className="header_container-left">
        <Link to="/" style={{ textDecoration: "none" }}>
        <img src={Logo} alt="headerLogo" />
        </Link>
      </div>
      <div  className="header__responsive-links">
          <button className="event__details" style = {{marginRight:'10px'}} ><AiFillEye /></button>
          <button className="sidebar__details" style = {{marginRight:'10px'}}><MdApps /></button>
          <button className="header__more-btn" style={{ marginRight: '45px'}}><RiMore2Fill className="more-logo" /> <span style = {{fontSize:'14px'}}>More</span></button>
        </div>
      <div
        className="header__container-right"
        style={{ marginLeft: "-15px" }}
        onClick={() => setShowAccountSetting(!showAccountSetting)}
      >
        <div className="circular__name">MK</div>
        <div className="user__name" style={{ cursor: "pointer" }}>
          Mahmoud Khaled{" "}
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
                Switching to attending
              </a>
            </div>
            <div className="account__dropdown-item">
              <VscAccount className="account__logo" />{" "}
              <a href="#" style={{ fontWeight: "500" }}>
                Account Settings
              </a>
            </div>
            <hr style={{ marginBottom: "3px", marginTop: "5px" }}></hr>
            <div className="account__dropdown-item">
              <BiLogOut className="account__logo" />{" "}
              <a href="#" style={{ fontWeight: "500" }}>
                Log out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headerpub;
