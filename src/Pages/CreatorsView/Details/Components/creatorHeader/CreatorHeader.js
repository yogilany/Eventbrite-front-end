import React, { useState, useContext } from "react";
import "./creatorHeader.css";
import Logo from '../../../../../assets/logo.png'
import { AiOutlineMenu} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../Details";
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { VscAccount } from 'react-icons/vsc'
import { BiLogOut } from 'react-icons/bi'
/**
 * @author Mahmoud Khaled
 * @description This is Creator Header which will be displayed on Details Page
 * @param {Boolean} MenuShow This Prop used to check whether we need menubar that will be displayed in responsive mood (< 600px) or not 
 * @returns {JSX.Element}
 */
const CreatorHeader = ({ MenuShow }) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showMore , setShowMore] = useState(false)
  return (
    <div className="header__container">
      <div className="header__container-left">
        <a href="/">
          <img src={Logo} alt="headerLogo" />
        </a>
      </div>
      <div className="header__container-links">
        <div className="header__container-link">
          <Link to="/likes">Preview your Event</Link>
        </div>
        <div className="header__container-link">
          <Link to="/publish" style={{ marginLeft: "30px" }}>
            {" "}
            Publish
          </Link>
        </div>
        <div className="header__container-link more" onClick = {() => {setShowMore(!showMore)}}>
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
        </div>
        <div className="header__container-right" style = {{marginLeft:'-15px'}} onClick = {() => setShowAccountSetting(!showAccountSetting)}>
          <div className="circular__name">MK</div>
          <div className="user__name" style = {{cursor:'pointer'}}>
            Mahmoud Khaled {showAccountSetting ? <MdKeyboardArrowUp className="arrow" /> : <MdOutlineKeyboardArrowDown className="arrow" />}
          </div>
          {showAccountSetting &&
          <div className="account__dropdown">
            <div className="account__dropdown-item">
              <HiOutlineSwitchHorizontal className="account__logo" /> <a href = "#"  style = {{fontWeight : '500'}}>Switching to attending</a>
            </div>
            <div className="account__dropdown-item">
              <VscAccount className="account__logo" /> <a href = "#" style = {{fontWeight : '500'}}>Account Settings</a>
            </div>
            <hr style = {{marginBottom : "3px" , marginTop:'5px'}}></hr>
            <div className="account__dropdown-item">
              <BiLogOut className="account__logo" /> <a href = "#"  style = {{fontWeight : '500'}}>Log out</a>
            </div>
        </div> }
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
