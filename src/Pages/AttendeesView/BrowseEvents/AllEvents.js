import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../../Components/header/Header";
import { useEffect } from "react";
import { useState } from "react";
import EventHorizontal from "../HomePage/Components/EventHorizontal";
import { Placeholder, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../features/authSlice";
import axios from "axios";
import MainGrayButton from "src/Components/Buttons/MainGrayButton";
import OutlineGrayButton from "src/Components/Buttons/OutlineGrayButton";
import Event from "./Event";
import GoogleMapReact from 'google-map-react';
import mapImage from "../../../assets/map.png";








/**
 *
 * @param {*} param0
 * @returns
 */

const AllEvents = ({ toggle }) => {
  const [location, setLocation] = React.useState(null);
  const [events, setEvents] = React.useState([]);
  const [serach, setSearch] = React.useState("");
  const [newlocation, setNewLocation] = useState(location ? location : "Cairo");
  const [loading, setLoading] = React.useState(true);

  const fetchEvents = () => {
    console.log("baseee location", location);

    console.log("baseee", newlocation);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/search`, {
        params: { city: newlocation ? newlocation : location, title: serach ? serach : null},
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
    setLoading(true);
    fetchEvents();
  }, [serach, newlocation]);


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
  }, []);

  const navigate = useNavigate();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;


  return (<>
    <Header location={location} />

    <Container fluid  className=" ">

      <Row className="">
        
        <Col  md={9} >
        <div className="">
                      <div className="flex flex-row  p-6 pb-2">
                        <svg
                          className="w-6 h-6 text-gray-600 mr-4"
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
                          className="  w-full text-xl mr-4  font-semibold  text-gary-700 focus:ring-0 focus:outline-none "
                          placeholder="Serach for anything"
                        />
                        <OutlineGrayButton text="Search"  />

                     
                      </div>
                      <div className="flex flex-row p-6 pt-2 ">
                        <svg
                          className="w-6 h-6 text-gray-600 mr-4"
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
                          // id="default-search"
                          className="   w-full text-xl font-semibold  text-gary-700   focus:ring-0 focus:outline-none "
                          placeholder="location"
                        />
                      </div>
                    </div>
                    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

                    
                  
     
          <Row className="">
          <Col md={3} className="pl-12 ">
            <h1 className=" font-bold  text-2xl">Filters</h1>
            <div class="flex items-center mb-4 mt-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 border-4 rounded focus:ring-blue-500 focus:ring-2" />
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Default checkbox</label>
</div>
<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 border-4 rounded focus:ring-blue-500 focus:ring-2" />
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Default checkbox</label>
</div>
<h3 className=" font-semibold text-md">Date</h3>
<div class="flex items-center mb-2">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Today</label>
</div>
<div class="flex items-center mb-2">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Tomorrow</label>
</div>
<div class="flex items-center mb-2">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">This weekend</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">pick a date</label>
</div>

<h3 className=" font-semibold text-md mt-4">Price</h3>
<div class="flex items-center mb-2">
    <input id="default-radio-1" type="radio" value="" name="default-price" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Free</label>
</div>
<div class="flex items-center mb-2">
    <input id="default-radio-1" type="radio" value="" name="default-price" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Paid</label>
</div>

  
              

        </Col>
        <Col md={9} className="">
       
                    <div style={{}}>
                        {!loading ? events.length != 0 ? (
                          events.map((event, index) => {
                            return (
                              <Event
                                Title={event.basic_info.title}
                                Date={event.date_and_time.start_date_time}
                                Organizer={event.basic_info.organizer}
                                Image={event.image_link}
                                Location={event.location.city}
                                Price={event.price}
                                Id={event.id}
                              ></Event>
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
        </Col>
            </Row>
       
        </Col>
        <Col md={3} className=" bg-white  overflow-hidden" >

          
   
       
          </Col>
     
      </Row>
    </Container>
    </>
  );
};

export default AllEvents;
