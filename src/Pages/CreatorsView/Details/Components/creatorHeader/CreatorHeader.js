import React, { useState, useContext } from "react";
import "./creatorHeader.css";
import Logo from '../../../../../assets/logo.png'
import { AiOutlineMenu} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { Link } from "react-router-dom";
import { AppContext } from "../../Details";
const CreatorHeader = ({ MenuShow }) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  return (
    <div className="header__container">
      <div className="header__container-left">
        <a href="/">
          <img src={Logo} alt="headerLogo" />
        </a>
      </div>
      <div className="header__container-links">
        <div className="header__container-link">
          <a href="/likes">Preview your Event</a>
        </div>
        <div className="header__container-link">
          <a href="#" style={{ marginLeft: "30px" }}> Publish</a>
        </div>
        <div className="header__container-link">
          <a href="#"> More <MdOutlineKeyboardArrowDown className="arrow" /> </a>
        </div>
        <div className="header__container-right">
            <div className="circular__name">MK</div>
            <div className="user__name">Mahmoud Khaled <MdOutlineKeyboardArrowDown className="arrow" /></div>
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
