import React, { useState, useContext, useEffect } from "react";
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

const Header = ({ MenuShow }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);

  useEffect(() => {
    {
      toggleSearch
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }
  }, [toggleSearch]);

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
          <div className="button">
            <Link to="/login">
              <button className="header-button">Log In</button>
            </Link>
          </div>
          <div className="button">
            <button className="header-button">Sign Up</button>
          </div>
        </div>
      </div>
      {toggleSearch && <SearchPage toggle={setToggleSearch} />}
    </>
  );
};

export default Header;
