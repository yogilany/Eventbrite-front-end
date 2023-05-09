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
import {
  getUserDetails,
  logOut,
  selectLoggedIn,
  selectUserAvatarURL,
  selectUserEmail,
  selectUserFirstName,
  selectUserLastName,
} from "../../features/authSlice";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../features/authSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
const Header = ({ location }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);

  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userIsLoggedIn = useSelector(selectLoggedIn);
  const userEmail = useSelector(selectUserEmail);
  const userAvatarURL = useSelector(selectUserAvatarURL);
  const [userFullName, setUserFullName] = useState(
    userFirstName + " " + userLastName
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // Update user details every 15 minutes
  setInterval(() => {
    dispatch(getUserDetails());
  }, 15 * 60 * 1000);

  // Update user details as soon as page loads:
  useEffect(() => {
    if (!userIsLoggedIn) {
      return;
    }
    dispatch(getUserDetails("aaa")).then(() => {
      console.log(
        "User data: ",
        userFirstName,
        userLastName,
        userEmail,
        userAvatarURL
      );
      setUserFullName(userFirstName + " " + userLastName);
    });

    // cleanup
    return () => {};
  }, []);

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
          {!userEmail ? (
            <>
              <div className="dropdown">
                <button className="dropbtn" id="organizeBtn">
                  <div className="flex flex-row">
                    <div className="font-bold">Organize</div>
                    <div>
                      <MdOutlineKeyboardArrowDown className="arrow" />
                    </div>
                  </div>
                </button>
                <div className="dropdown-content">
                  <a href="#">Create events</a>
                  <a href="#">Pricing</a>
                  <a href="#">Resources</a>
                  <a href="#">Contact Sales</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn" id="helpBtn">
                  <div className="flex flex-row">
                    <div className="font-bold">Help</div>
                    <div>
                      <MdOutlineKeyboardArrowDown className="arrow" />
                    </div>
                  </div>
                </button>
                <div className="dropdown-content">
                  <a href="#">Find your tickets</a>
                  <a href="#">Contact your event organizer</a>
                  <a href="#">Visit the help center3</a>
                </div>
              </div>
              <div className="button">
                <Link to="/login">
                  <button className="header-button font-semibold" id="loginBtn">
                    Log In
                  </button>
                </Link>
              </div>
              <div className="button">
                <Link to="/signup">
                  <button
                    className="header-button font-semibold"
                    id="signupBtn"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/create-event">
                <div className="header-button flex flex-col items-center">
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
                <div className="header-button flex flex-col items-center">
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
              <Link to="/likes">
                <div className="header-button flex flex-col items-center">
                  {" "}
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <svg
                      className="w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                  </div>{" "}
                  Tickets
                </div>
              </Link>
            </>
          )}

          {isOrganizer ? (
            <div className="dropdown">
              <button className="dropbtn" id="userBtn">
                {userFullName} <MdKeyboardArrowUp className="arrow" />
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

          {userEmail ? (
            <div className="dropdown flex flex-col items-center">
              <button className="dropbtn">
                <div className="flex flex-row">
                  <div>{userEmail}</div>
                  <div>
                    <MdOutlineKeyboardArrowDown className="arrow" />
                  </div>
                </div>
              </button>
              <div className="dropdown-content mt-14 translate-x-1">
                <a href="#">Browse events</a>
                <a href="/create-event">Manage my events</a>
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
      {toggleSearch && (
        <SearchPage toggle={setToggleSearch} location={location} />
      )}
    </>
  );
};

export default Header;
