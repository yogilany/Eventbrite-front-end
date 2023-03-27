import React, { useState, useContext } from "react";
import "./header.scss";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AppContext } from "../../Pages/CreatorsView/Details/Details";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";

const Header = ({ MenuShow }) => {
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  return (
    <div className="header-container">
      <div className="header-container-left">
        <a href="/">
          <img src={Logo} alt="headerLogo" />
        </a>
        <button className="search-button">
          <Container>
            <Row>
              <Col md="auto" className="m-0 p-0">
                <MdOutlineSearch className="btn-search-icon" />
              </Col>
              <Col>
                <span>Search event</span>
              </Col>
            </Row>
          </Container>
        </button>
      </div>
      <div className="header-container-links">
        <div class="dropdown">
          <button class="dropbtn">
            Organize <MdOutlineKeyboardArrowDown />
          </button>
          <div class="dropdown-content">
            <a href="#">Create events</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <a href="#">Contact Sales</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Help <MdOutlineKeyboardArrowDown />
          </button>
          <div class="dropdown-content">
            <a href="#">Find your tickets</a>
            <a href="#">Contact your event organizer</a>
            <a href="#">Visit the help center3</a>
          </div>
        </div>
        <div class="button">
          <button class="header-button">Log In</button>
        </div>
        <div class="button">
          <button class="header-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
