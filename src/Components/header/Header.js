import React, { useState , useContext } from "react";
import "./header.scss";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AppContext } from "../../Pages/CreatorsView/Details/Details";
const Header = ({MenuShow}) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  return (
    <div className="header__container">
      <div className="header__container-left">
        <a href="/">
          <img src={Logo} alt="headerLogo" />
        </a>
        <input type="search" placeholder="Search event" />
      </div>
      <div className="header__container-links">
        <div className="header__container-link">
          <a href="/likes">Likes</a>
        </div>
        <div className="header__container-link">
          <a href="#">Create event</a>
        </div>
        <div className="header__container-link">
          <a href="#"> Help </a>
        </div>
        <div className="header__container-link">
          <a href="#"> Organize </a>
          <RiArrowDownSLine />
        </div>
        <div className="header__container-link">
          <CgProfile className="profile" />
          <a href="#">mahmoudkk177@gmail.com </a>
          <RiArrowDownSLine />
        </div>
      </div>
      {MenuShow && <div className="details-menu"><button className="menu" onClick={() => setToggleSidebar(!toggleSidebar)}><AiOutlineMenu className="menu-logo" /></button>Details</div>}
    </div>
  );
};

export default Header;
