import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Spinner,
  Placeholder,
} from "react-bootstrap/";
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
import Header from "../../../Components/header/Header";
import Footer from "../../../Components/footer/Footer";
import { useParams } from "react-router";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import LikeButton from "src/Components/LikeButton/LikeButton";
import { useEffect } from "react";
import { useState } from "react";
/* 
------Get event
{
  "creator_id": "2dg3f4g5h6j7k8l9",
  "basic_info": {
    "title": "Let's be loyal",
    "organizer": "Loyalty Organization",
    "category": "Loyalty",
    "sub_category": "Loyalty"
  },
  "image_link": "https://www.example.com/image.png",
  "summary": "This is a summary of the event",
  "description": "This is a description of the event",
  "state": {
    "is_public": true,
    "publish_date_time": "2023-05-01T09:00:00"
  },
  "date_and_time": {
    "start_date_time": "2023-05-01T15:30:00",
    "end_date_time": "2023-05-01T18:30:00",
    "is_display_start_date": true,
    "is_display_end_date": true,
    "time_zone": "US/Pacific",
    "event_page_language": "en-US"
  },
  "location": {
    "is_online": false,
    "city": "San Francisco"
  },
  "id": "2dg3f4g5h6j7k8l9",
  "price": 100,
  "is_free": false
}


	
-----get user 

application/json
Controls Accept header.
Example Value
Schema
{
  "email": "user@gmail.com",
  "firstname": "user",
  "lastname": "user",
  "avatar_url": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
}

*/

/**
 * @description Single Event page which displays the event details including:
 *  - Event image
 *  - Event name
 *  - Event organizer
 *  - Event location
 *  - Event about
 *  - Event share
 *  - Event about organizer
 *  - Event tickets
 *  - Checkout with tickets
 * @date 5/12/2023 - 7:00:49 PM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
const SingleEvent = (props) => {
  const { id } = useParams();
  const { data: event } = useGetEventByIdQuery(id);
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    setEventDate(
      new Date(event?.date_and_time.start_date_time).toLocaleString("default", {
        month: "long",
      }) +
        " " +
        new Date(event?.date_and_time.start_date_time).getDate()
    );
  });

  return (
    <>
      <Header />
      <div style={{ display: "flow" }}>
        <EventImage img_url={event?.image_link} />
        <Container className="pl-5 ml-5">
          <Row className="align-items-center overflow-hidden ml-5">
            <Container fluid className="pt-3">
              {event ? (
                <>
                  <Col md={8}>
                    <Row className="pb-5 ">
                      <Col md={12} style={{ position: "relative" }}></Col>
                    </Row>
                    <Row className="mb-5">
                      <Stack gap={3}>
                        <div>
                          <Container>
                            <Row>
                              <Col>
                                <h3 className="event-date-text">{eventDate}</h3>
                              </Col>
                              <Col md={{ offset: 9, span: 1 }}>
                                <LikeButton id={event?.id} />
                              </Col>
                              <Col md={{ span: 1 }}>
                                <HIIcons.HiOutlineUpload size="2em" />
                              </Col>
                            </Row>
                          </Container>

                          <h1 className="event-name-text">
                            {event?.basic_info.title}
                          </h1>
                        </div>
                        <p className="mb-5">{event?.summary}</p>
                      </Stack>
                      <Col>
                        <EventOrganizerCard
                          organizerId={event?.creator_id}
                          follower_count="1.5k"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-5">
                      <EventLocation
                        location={event?.location}
                        date_and_time={event?.date_and_time}
                      />
                    </Row>
                    <Row>
                      <EventAbout
                        startDate={event?.date_and_time.start_date_time}
                        endDate={event?.date_and_time.end_date_time}
                        description={event?.description}
                      />
                    </Row>
                    <Row className="mb-5 mt-5">
                      <EventShare />
                    </Row>
                    <Row className="mb-5">
                      <EventAboutOrganizer
                        organizerId={event?.creator_id}
                        follower_count="1.4k"
                      />
                    </Row>
                  </Col>
                  <Col
                    style={{ top: "105%", right: "10%", position: "absolute" }}
                  >
                    {event ? (
                      <EventTicketCard
                        img_url={event ? event.image_link : null}
                        event={event}
                      />
                    ) : null}
                  </Col>
                </>
              ) : (
                <>
                  <Container>
                    <Col>
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-50 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-50 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-100 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-40 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-40 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-100 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-40 mb-3"
                      />
                      <Placeholder
                        size="lg"
                        bg="secondary"
                        as="Row"
                        className="w-40 mb-3"
                      />
                    </Col>
                  </Container>
                </>
              )}
            </Container>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SingleEvent;
