import React, { useState, useContext, useEffect, useRef } from "react";
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
import SearchPage from "../../Pages/AttendeesView/HomePage/Components/SearchPage";
import { useSelector } from "react-redux";
import { selectUserState } from "../../features";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
const Header = ({ MenuShow }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);

  const USER = useSelector(selectUserState);

  return (
    <>
      <div className="header-container">
        <div className="header-container-left">
          <a href="/">
            <img src={Logo} alt="headerLogo" />
          </a>
          <button
            className="search-button"
            onClick={() => setToggleSearch(true)}
          >
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
          <div className="dropdown">
            <button className="dropbtn">
              Organize <MdOutlineKeyboardArrowDown />
            </button>
            <div className="dropdown-content">
              <a href="#">Create events</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
              <a href="#">Contact Sales</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Help <MdOutlineKeyboardArrowDown />
            </button>
            <div className="dropdown-content">
              <a href="#">Find your tickets</a>
              <a href="#">Contact your event organizer</a>
              <a href="#">Visit the help center3</a>
            </div>
          </div>

          {!USER ? (
            <div className="button">
              <Link to="/login">
                <button className="header-button">Log In</button>
              </Link>
            </div>
          ) : null}
          {!USER ? (
            <div className="button">
              <Link to="/signup">
                <button className="header-button">Sign Up</button>
              </Link>
            </div>
          ) : null}

          {isOrganizer ? (
            <div className="dropdown">
              <button className="dropbtn">
                Mahmoud Khaled <MdKeyboardArrowUp className="arrow" />
              </button>
              <div className="dropdown-content">
                <a href="#" style={{ fontWeight: "500" }}>
                  <HiOutlineSwitchHorizontal fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>
                    Switching to attending
                  </span>
                </a>
                <a href="#" style={{ fontWeight: "500" }}>
                  <VscAccount fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>Account Settings</span>
                </a>

                <a href="#" style={{ fontWeight: "500" }}>
                  <BiLogOut fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>Log out</span>
                </a>
              </div>
            </div>
          ) : null}

          <div className="dropdown">
            <button className="dropbtn">
              yogilany@gmail.com <MdOutlineKeyboardArrowDown />
            </button>
            <div className="dropdown-content">
              <a href="#">Browse events</a>
              <a href="#">Manage my events</a>
              <a href="#">Account settings</a>
              <a href="#">Log out</a>
            </div>
          </div>

          {USER ? "Welcome " : "NO USER"}
        </div>
      </div>
      {toggleSearch && <SearchPage toggle={setToggleSearch} />}
    </>
  );
};

export default Header;
