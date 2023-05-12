import { Row, Col, Container } from "react-bootstrap";
import Events from "./Components/Events";
import Hero from "./Components/Hero";
import Header from "../../../Components/header/Header";
import "./HomePage.scss";
import Footer from "../../../Components/footer/Footer";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

/**
 * @author Yousef Gilany
 * @description This is the Main page of the application that contains the Hero , Categories , Events and More Events Sections.
 * It is the first page that the user sees when he enters the application.
 * @returns {JSX.Element}
 * @todo make the page more responsive .
 */

export const HomePage = () => {
  // console.log("USERR", window.User);
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

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

  const LocationTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      fontSize: "1rem",
      width: "100px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const fetchEvents = () => {
    console.log("baseee", location);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/search`, {
        params: { city: location ? location : "Cairo" },
      })
      .then(function (response) {
        console.log("response", response.data);
        setEvents(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    async function fetchLocation() {
      let url = "https://ipinfo.io/json?token=89085807858d6e";
      let response = await fetch(url);
      let data = await response.json();
      console.log("locaation", data);
      setLocation(data.city);
    }

    fetchLocation();

    const testLocation = {
      hostname: "host-156.215.249.101-static.tedata.net",
      city: "Cairo",
      region: "Cairo",
      country: "EG",
      loc: "30.0626,31.2497",
      org: "AS8452 TE-AS",
      timezone: "Africa/Cairo",
    };

    setLocation(testLocation.city);
    fetchEvents();
  }, []);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // console.log(selectCurrentUser);
  return (
    <>
      <Header screenSize={screenSize} location={location} />
      <Container fluid id="homePageContainer">
        <Row>
          <Col className="p-0">
            <Hero screenSize={screenSize} />
            {/* <Categories /> */}
            <Container>
              <Row>
                <Col>
                  <div className="flex flex-row ml">
                    <div className="location-popular ">
                      <span
                        style={{
                          fontSize: "32px",
                          fontFamily: "Neue Plak Bold !important",
                          lineHeight: "40px",
                        }}
                      >
                        Popular in
                      </span>{" "}
                    </div>
                    <input
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      onKeyPress={handleEnter}
                      type="search"
                      id="default-search"
                      className="  p-2 w-min text-3xl font-bold text-blue-700 border-b border-b-gray-300 focus-visible: focus:ring-0 focus:outline-none "
                      placeholder="Location"
                    />
                    <MdOutlineKeyboardArrowDown
                      onClick={fetchEvents}
                      color="#3659e3"
                      className="w-12 h-12"
                    />

                    {/* <LocationTextField
                      inputProps={{
                        style: {
                          fontSize: "30px",
                          fontWeight: "900",
                          letterSpacing: "0.5px",
                          lineHeight: "40px",
                          color: "#3659e3",
                          marginRight: "1rem",
                        },
                      }} // font size of input text
                      defaultValue={location ? location.city : "Loading..."}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      id="location-input"
                      variant="standard"
                      value={location}
                      style={{ borderBottom: "1px solid #e2e2e1" }}
                    />
                    <input type="text"   onChange={(e) => {
                        setLocation(e.target.value);
                      }}                     value={location}
 /> */}
                  </div>
                </Col>
              </Row>
            </Container>

            <Events location={location} events={events} />
            {/* <MoreEvents /> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
