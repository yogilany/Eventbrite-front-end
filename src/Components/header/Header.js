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
import { logOut, selectUserState } from "../../features/authSlice";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../features/authSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);

  const USER = useSelector(selectUserState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(window.User);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
      // console.log(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const [user, setUser] = useState(window.User);

  return (
    <>
      <div className="header-container">
        <div className="header-container-left">
          <a href="/">
            <img src={Logo} alt="headerLogo" />
          </a>
          {screenSize.width > 768 ? (
            <button
              id="eventSearchBtn"
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
          ) : null}
        </div>
        <div className="header-container-links">
          {!USER ? (
            <>
              <div className="dropdown">
                <button className="dropbtn" id="organizeBtn">
                  Organize <MdOutlineKeyboardArrowDown />
                </button>
                <div className="dropdown-content">
                  <a href="google.com">Create events</a>
                  <a href="google.com">Pricing</a>
                  <a href="google.com">Resources</a>
                  <a href="google.com">Contact Sales</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn" id="helpBtn">
                  Help <MdOutlineKeyboardArrowDown />
                </button>
                <div className="dropdown-content">
                  <a href="google.com">Find your tickets</a>
                  <a href="google.com">Contact your event organizer</a>
                  <a href="google.com">Visit the help center3</a>
                </div>
              </div>
              <div className="button">
                <Link to="/login">
                  <button className="header-button" id="loginBtn">
                    Log In
                  </button>
                </Link>
              </div>
              <div className="button">
                <Link to="/signup">
                  <button className="header-button" id="signupBtn">
                    Sign Up
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/basic-info">
                <div
                  className="header-button"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <HiOutlinePlus fontSize="18px" />
                  </div>{" "}
                  <span style={{ color: "#3659e3" }}>Create an event</span>
                </div>
              </Link>
              <Link to="/likes">
                <div
                  className="header-button"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <IoMdHeartEmpty fontSize="18px" />
                  </div>{" "}
                  Likes
                </div>
              </Link>
            </>
          )}

          {isOrganizer ? (
            <div className="dropdown">
              <button className="dropbtn" id="userBtn">
                Mahmoud Khaled <MdKeyboardArrowUp className="arrow" />
              </button>
              <div className="dropdown-content">
                <a href="google.com" style={{ fontWeight: "500" }}>
                  <HiOutlineSwitchHorizontal fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>
                    Switching to attending
                  </span>
                </a>
                <a href="google.com" style={{ fontWeight: "500" }}>
                  <VscAccount fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>Account Settings</span>
                </a>

                <a href="google.com" style={{ fontWeight: "500" }}>
                  <BiLogOut fontSize="25px" color="black" />{" "}
                  <span style={{ marginLeft: "10px" }}>Log out</span>
                </a>
              </div>
            </div>
          ) : null}

          {USER ? (
            <div className="dropdown">
              <button className="dropbtn">
                {USER} <MdOutlineKeyboardArrowDown />
              </button>
              <div className="dropdown-content">
                <a href="google.com">Browse events</a>
                <a href="/basic-info">Manage my events</a>
                <a href="/profile">Account settings</a>
                <a
                  href="/login"
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  Log out
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {toggleSearch && <SearchPage toggle={setToggleSearch} />}
    </>
  );
};

export default Header;
