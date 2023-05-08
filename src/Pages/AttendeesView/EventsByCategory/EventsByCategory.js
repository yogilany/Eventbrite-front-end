import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Hero from "./Components/Hero-1";
import Header from "../../../Components/header/Header";
import Footer from "../../../Components/footer/Footer";
import testimage from "../../../assets/adelEv2.png";
import axios from "axios";
import SubCategoryCard from "./Components/SubCategoryCard-1";
import EventCard from "../HomePage/Components/EventCard";
import { MdCalendarMonth } from "react-icons/md";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const EventsByCategory = () => {
  const { category, location } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchSubCategories = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_API}/categories/${category}/sub_categories`
      )
      .then(function (response) {
        // console.log(response.data);
        setSubcategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchEvents = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/search`,{ params: { city: "Sudan", category: "Health" } })
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
                  {subcategories.map((subcategory, index) => {
                    return (
                      <SubCategoryCard
                        name={subcategory}
                        testimage={testimage}
                        key={index}
                        
                      />
                    );
                  })}
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
            ) : (
              <Container className="pt-5">
                <Row className="justify-content-md-center">
                  <Col md={12} style={{ textAlign: "center" }}>
                    <MdCalendarMonth size={50} color="#39364f" />
                    <h3 className="heading3 mb-0">
                      No events in your location
                    </h3>
                    <h6 className="heading6">Try another location</h6>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EventsByCategory;
