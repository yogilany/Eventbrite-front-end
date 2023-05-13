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
import { Container, Row, Col, Placeholder, Card } from "react-bootstrap";
import SearchPage from "../../Pages/AttendeesView/HomePage/Components/SearchPage";
import { useSelector } from "react-redux";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";
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
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartDislike } from "react-icons/io";

import EventHorizontal from "src/Pages/AttendeesView/HomePage/Components/EventHorizontal";

const Header = ({ location }) => {

  const [toggleSearch, setToggleSearch] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [show, setShow] = useState(false);
  const [serach, setSearch] = React.useState("");
  const [newlocation, setNewLocation] = useState(location);
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  console.log("locococ", location)

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const fetchEvents = () => {
    console.log("baseee", newlocation);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/search`, {
        params: { city: newlocation, title: serach ? serach : null},
      })
      .then(function (response) {
        console.log("response", response.data);
        setLoading(false);
        setEvents(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
    dispatch(getUserDetails()).then(() => {
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

  useEffect(() => { 
    setLoading(true);
    fetchEvents();
  }, [serach, newlocation]);

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
              onClick={() => setShow(true)}
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
                <div className="header-button flex flex-col items-center font-semibold">
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
                <div className="header-button flex flex-col items-center font-semibold">
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
                <div className="header-button flex flex-col items-center font-semibold">
                  {" "}
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <svg
                      className="w-4 h-4"
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
                <div className="flex flex-row font-semibold">
                  <div>{userEmail}</div>
                  <div>
                    <MdOutlineKeyboardArrowDown className="arrow" />
                  </div>
                </div>
              </button>
              <div className="dropdown-content mt-12 translate-x-1">
                <a href="/browse-events">Browse events</a>
                <a href="/manage-events">Manage my events</a>
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
      {
        // <SearchPage toggle={setToggleSearch} location={location} />
        <Modal
          size="lg"
          dialogClassName="modal-fullscreen"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Container fluid className="search-page p-5">
              <button
                onClick={() => setShow(false)}
                type="button"
                className="absolute right-12 text-white bg-gray-400 hover:bg-gray-500 focus:ring-0 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 "
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
              <Row className="p-5">
                <Col className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex flex-row mb-4">
                        <svg
                          className="w-12 h-12 text-gray-600 mr-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          />
                        </svg>
                        <input
                          value={serach}
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          type="search"
                          id="default-search"
                          className="  p-2 w-min text-3xl font-bold text-blue-700 border-b-4 border-b-gray-300  focus:border-b-blue-600 focus:ring-0 focus:outline-none "
                          placeholder="Serach for anything"
                        />

                        <svg
                          className="w-12 h-12 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-row ">
                        <svg
                          className="w-12 h-12 text-gray-600 mr-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                          />
                        </svg>
                        <input
                          defaultValue={location}
                          value={newlocation}
                          onChange={(e) => {
                            setNewLocation(e.target.value);
                          }}
                          type="search"
                          id="default-search"
                          className="  p-2 w-56 text-3xl font-bold text-blue-700 border-b-4 border-b-gray-300  focus:border-b-blue-600 focus:ring-0 focus:outline-none "
                          placeholder="location"
                        />
                      </div>
                    </div>
                    <div className="">
                      <h1 className=" text-6xl font-extrabold text-blue-950 mb-12">
                        Top Matches
                      </h1>
                      <div style={{ height: "500px", overflow: "scroll", width:"900px" }}>
                        {!loading ? events.length != 0 ? (
                          events.map((event, index) => {
                            return (
                              <EventHorizontal
                                Title={event.basic_info.title}
                                Date={event.date_and_time.start_date_time}
                                Organizer={event.basic_info.organizer}
                                Image={event.image_link}
                              ></EventHorizontal>
                            );
                          })
                        ) : <h2 className=" font-medium  text-2xl">No results found </h2>: (
                          <div className="grid grid-cols-3 p-4 bg-white hover:drop-shadow-2xl w-max h-auto mb-2">
                            <div className="col-span-2">
                              <h1
                                style={{
                                  fontWeight: "600",
                                  color: "#39364f",
                                  fontSize: "1.125rem",
                                  lineHeight: "1.5rem",
                                  marginBottom: ".5rem",
                                }}
                              >
                                <Placeholder as={Card.Title} animation="glow">
                                  <Placeholder xs={6} />
                                  <Placeholder className="w-75" /> 
                                  <Placeholder className="w-50" /> 
                                </Placeholder>
                              </h1>
                     

                         
                            </div>
                            <div className="col-span-1">
                              <div class="flex items-center justify-center w-36 h-24  bg-gray-300 rounded ">
                                <svg
                                  class="w-6 h-6 text-gray-200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 640 512"
                                >
                                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default Header;
