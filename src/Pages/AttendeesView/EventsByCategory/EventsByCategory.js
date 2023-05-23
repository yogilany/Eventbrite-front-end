import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Hero from "./Components/Hero-1";
import Hero from "./Components/Hero-1";
import Header from "../../../Components/header/Header";
import Footer from "../../../Components/footer/Footer";
import testimage from "../../../assets/adelEv2.png";
import axios from "axios";
import SubCategoryCard from "./Components/SubCategoryCard-1";
import SubCategoryCard from "./Components/SubCategoryCard-1";
import EventCard from "../HomePage/Components/EventCard";
import { MdCalendarMonth } from "react-icons/md";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import "./index.css"
import { set } from "date-fns";

/**
 * @author Anas Sherif
 * @param {}
 * @description This is the page where we shows the events of a specific category.
 * @returns {JSX.Element}
 */
const EventsByCategory = () => {
  window.scrollTo(0, 0)

  const { category, location } = useParams();
  // console.log("categorycategory", category);
  // console.log("locationlocation", location);
  const [subcategories, setSubcategories] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const fetchSubCategories = () => {
    setLoadingCategories(true);
    axios
      .get(
        `${process.env.REACT_APP_BASE_API}/categories/${category}/sub_categories`
      )
      .then(function (response) {
        // console.log(response.data);
        setSubcategories(response.data);
        setLoadingCategories(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchEvents = () => {
    setLoadingEvents(true);
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/search`,{ params: { city: location, category: category } })
      .then(function (response) {
        // console.log("responseeee", response.data);
        setLoadingEvents(false);
        setEvents(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEvents();
    fetchSubCategories();
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Breadcrumbs aria-label="breadcrumb" style={{ padding: "15px" }}>
              <Link underline="hover" color="inherit" href="/" id="backHomeBtn">
                Home
              </Link>

              <Typography color="text.primary">{category}</Typography>
            </Breadcrumbs>
            <Hero category={category} location={location} />
            <Container className="mt-5">
              <Row>
                <Col
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 className="heading3">
                    Explore what's popular within {category}
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col
                  md="auto"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "scroll",
                  }}
                >
                  {subcategories.length != 0 ? subcategories.map((subcategory, index) => {
                    return (
                      <SubCategoryCard
                        name={subcategory}
                        testimage={testimage}
                        key={index}
                        
                      />
                    );
                  }) :   <div class="flex items-center justify-center rounded-lg ">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-12 h-12 mr-2 text-gray-200 animate-spin  fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>}
                </Col>
              </Row>
            </Container>
            <Container className="mt-5">
              <Row>
                <Col>
                  <h3 className="heading3">Most popular events</h3>
                </Col>
              </Row>
            </Container>
            {events.length != 0 ? (
              <Container className=" pl-5 pr-5 mb-5">
                {/* <h3 className="heading3">Events in {location}</h3> */}

                <Row className="justify-content-md-right">
                  {events
                    ? events.map((event, index) => (
                        <EventCard
                          eventID={event.id}
                          key={index}
                          eventTitle={event.basic_info.title}
                          eventDate={event.date_and_time.start_date_time}
                          eventTime={event.date_and_time.start_date_time}
                          eventLocation={event.location.location}
                          eventPrice="Free"
                          eventOrganizer={event.basic_info.organizer}
                          organizerFollowers="1000"
                          eventCover={event.image_link}
                        />
                      ))
                    : "Loading..."}
                </Row>
              </Container>
            ) : !loadingEvents ?  (
              <Container className="pt-5 pb-20">
                <Row className="justify-content-md-center">
                  <Col md={12} className="flex flex-col items-center">
                    <MdCalendarMonth size={50} color="#39364f" />
                    <h3 className="heading3 mb-0">
                      No events in your location
                    </h3>
                    <h6 className="heading6">Try another location</h6>
                  </Col>
                </Row>
              </Container>
            ) :   <div class="flex items-center justify-center rounded-lg mb-36">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-12 h-12 mr-2 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EventsByCategory;
