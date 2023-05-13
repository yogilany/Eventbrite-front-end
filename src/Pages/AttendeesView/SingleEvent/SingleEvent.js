import React from "react";
import { Container, Row, Col, Stack, Placeholder } from "react-bootstrap/";
import EventImage from "./Components/EventImage.js";
import EventOrganizerCard from "./Components/EventOrganizerCard";
import EventLocation from "./Components/EventLocation.js";
import EventAbout from "./Components/EventAbout";
import { EventShare } from "./Components/EventShare";
import EventAboutOrganizer from "./Components/EventAboutOrganizer";
import { EventTicketCard } from "./Components/EventTicketCard";
import "./SingleEvent.scss";
import Header from "../../../Components/header/Header";
import Footer from "../../../Components/footer/Footer";
import { useParams } from "react-router";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import { useEffect } from "react";
import { useState } from "react";
import LikeButton from "src/Components/LikeButton/LikeButton.js";
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
  }, [event?.date_and_time]);

  return (
    <>
      <Header />
      <div style={{ display: "flow" }}>
        <EventImage img_url={event?.image_link} />
        <Container className=" mx-5">
          <Row className="">
            <Col md={8} className="pl-24">
              {event ? (
                <>
                  <Col>
                    <Col>
                      <h3 className="event-date-text">{eventDate}</h3>
                    </Col>
                    <Row className="mb-5">
                      <Stack gap={3}>
                        <div>
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
            </Col>
            <Col>
              <div className="flex flex-row justify-end m-2">
                <button
                  type="button"
                  class="transition text-gray-600 bg-gray-0 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  "
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    ></path>
                  </svg>
                  <span class="sr-only">Icon description</span>
                </button>
                <LikeButton id={event?.id} />
              </div>
              {event ? (
                <EventTicketCard
                  img_url={event ? event.image_link : null}
                  event={event}
                />
              ) : null}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SingleEvent;
