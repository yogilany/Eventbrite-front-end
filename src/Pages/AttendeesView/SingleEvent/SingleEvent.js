import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap/";
import { Layout } from "../../../app/layout";
import event_image from "../../../assets/event_image.png";
import organizer_avatar from "../../../assets/Organizer/AnasOrg.jpg";
import EventImage from "./Components/EventImage.js";
import EventOrganizerCard from "./Components/EventOrganizerCard";
import EventLocation from "./Components/EventLocation.js";
import EventAbout from "./Components/EventAbout";
import { EventShare } from "./Components/EventShare";
import EventAboutOrganizer from "./Components/EventAboutOrganizer";
import { EventTicketCard } from "./Components/EventTicketCard";
import * as HIIcons from "react-icons/hi";
import "./SingleEvent.scss";
import testbackground from "../../../assets/adelEv10.png";
import Header from "../../../Components/header/Header";
import Footer from "../../../Components/footer/Footer";
import { useParams } from "react-router";
import axios from "axios";
const SingleEvent = (props) => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const EventNameHeaderStyle = {
    color: "#1e0a3c",
    fontWeight: "bold",
    fontSize: "48px",
  };

  const fetchEvent = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API}/events/id/${id}`)
      .then(function (response) {
        console.log("response", response);

        setEvent(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("props", props);
    fetchEvent();
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div style={{ display: "flow" }}>
        <Container>
          <Row>{/* <Layout /> */}</Row>
          <Row className="align-items-center overflow-hidden">
            <Col>
              <Container fluid className="pt-3">
                {event ? (
                  <Col>
                    <Row className="pb-5 ">
                      <Col md={12}>
                        <EventImage img_url={event.image_link} />
                      </Col>
                    </Row>
                    <Row className="">
                      <Row className="mb-5">
                        <Stack gap={3}>
                          <div>
                            <Container>
                              <Row>
                                <Col>
                                  <h3
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {/* {props.event_date}{" "} */}
                                    {new Date(
                                      event.date_and_time.start_date_time
                                    ).toLocaleString("default", {
                                      month: "long",
                                    }) +
                                      " " +
                                      new Date(
                                        event.date_and_time.start_date_time
                                      ).getDay()}
                                  </h3>
                                </Col>
                                <Col md={{ offset: 9, span: 1 }}>
                                  <HIIcons.HiOutlineHeart size="2em" />
                                </Col>
                                <Col md={{ span: 1 }}>
                                  <HIIcons.HiOutlineUpload size="2em" />
                                </Col>
                              </Row>
                            </Container>

                            <h1 style={EventNameHeaderStyle}>
                              {event.basic_info.title}
                            </h1>
                          </div>
                          <p>{event.description}</p>
                        </Stack>
                        <Col md={8}>
                          <EventOrganizerCard
                            avatar={organizer_avatar}
                            name={event.basic_info.organizer}
                            follower_count="1.5k"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <EventLocation
                          location={event.location}
                          date_and_time={event.date_and_time}
                        />
                      </Row>
                      <Row>
                        <EventAbout summary={event.summary} />
                      </Row>
                      <Row className="mb-5 mt-5">
                        <EventShare />
                      </Row>
                      <Row>
                        <EventAboutOrganizer
                          avatar={organizer_avatar}
                          organizer_name="E7kky magazine"
                          follower_count="1.4k"
                        />
                      </Row>
                      <Row></Row>
                    </Row>
                  </Col>
                ) : (
                  <div>loading</div>
                )}
              </Container>
            </Col>
            <Col style={{ top: "105%", left: "25%", position: "absolute" }}>
              {event ? (
                <EventTicketCard
                  img_url={event ? event.image_link : null}
                  event={event}
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SingleEvent;
