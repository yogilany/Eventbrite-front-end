import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const Header = () => {
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
          <a href="all-events">Create event</a>
        </div>
        <div className="header__container-link">
          <a href="/likes">Likes</a>
        </div>
        <div className="header__container-link">
          <a href="#"> Tickets </a>
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
