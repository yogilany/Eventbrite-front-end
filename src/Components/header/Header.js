import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container-left">
        <img src={Logo} alt="headerLogo" />
        <input type="search" placeholder="Search event" />
      </div>
      <div className="header__container-links">
        <div className="header__container-link">
          <a href="#">Browse Events</a>
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
    </div>
  );
};

export default Header;
