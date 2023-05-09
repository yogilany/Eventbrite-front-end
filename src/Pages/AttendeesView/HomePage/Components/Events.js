import React, { useEffect, useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { getEvents } from "../../../../services/services";
import { CategoriesTaps } from "./Categories";
import CategoriesCards from "./CategoriesCards";
import EventCard from "./EventCard";
import Hr from "../../../../Components/Elements/Hr";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * @author Yousef Gilany
 * @description This is the Events section of the HomePage.
 * It shows the events on a specific city depending on the user's location.
 * It can be changed to show events on another city. It shows 8 events at a time.
 * @returns {React.FC}
 *
 * @todo Get data from API and show it.
 * @todo Styling headings
 */
const Events = ({location}) => {
  const [events, setEvents] = useState([]);
  const [moreEvents, setMoreEvents] = useState([]);

  const [category, setCategory] = useState("All");
  const [isCategoriesShown, setIsCategoriesShown] = useState(true);
  const [loading, setLoading] = useState(false);




  var cards = [];

  for (var i = 1; i <= 8; i++) {
    cards.push(i);
  }

  // async function fetchEvents() {
  //   const response = await getEvents({ category: category });
  //   const filteredEvents = response.filter((event) => {
  //     if (category != "All") {
  //       setIsCategoriesShown(false);
  //       return event.eventCategory == category;
  //     } else {
  //       setIsCategoriesShown(true);

  //       return response;
  //     }
  //   });
  //   // console.log("filteredEvents: ", filteredEvents);
  //   setEvents(filteredEvents.slice(0, 8));
  //   setMoreEvents(filteredEvents.slice(8, 24));
  // }

  useEffect(() => {
    setLoading(true);
    // fetchEvents();
    setLoading(false);
  }, []);

  useEffect(() => {
    // console.log("events: ", events);
  }, [events]);

  useEffect(() => {
    // console.log("category: ", category);
    // fetchEvents();
  }, [category]);

  return (
    <>
      <CategoriesTaps
        categorySelector={setCategory}
        location={location}
        id="categoriesTaps"
      />
      {/* {isCategoriesShown ? (
      ): null} */}
      <CategoriesCards location={location} id="categoriesCards"  />

      {events.length != 0 ? (
        <Container className=" pl-5 pr-5 mb-5" id="eventsByLocationSection">
          <h3 className="heading3">Events in {location}</h3>

          <Row className="justify-content-md-right">
            {events
              ? events.map((event, index) => (
                <EventCard
                  key={index}
                  eventTitle={event.eventName}
                  eventDate={event.eventDate}
                  eventTime={event.eventTime}
                  eventLocation={event.eventLocation}
                  eventPrice={event.eventPrice}
                  eventOrganizer={event.eventOrganizer}
                  organizerFollowers={event.organizerFollowers}
                />
              ))
              : "Loading..."}
          </Row>
        </Container>
      ) : (
        <Container className="pt-5">
          <Row className="justify-content-md-center">
          <Col md={12} className="flex flex-col items-center pb-20">
              <MdCalendarMonth size={50} color="#39364f" />
              <h3 className="heading3 mb-0">No events in your location</h3>
              <h6 className="heading6">Try another location</h6>
            </Col>
          </Row>
        </Container>
      )}
      {events.length != 0 ? (
        <>
          <Hr />
          <Container className=" pl-5 pr-5 mb-5 mt-5" id="moreEventsSection">
            <Row>
              <Col>
                <h3 className="heading3">More Events</h3>
              </Col>
            </Row>

            <Row className="justify-content-md-right">
              {moreEvents
                ? moreEvents.map((event2, index) => (
                  <EventCard
                    key={index}
                    eventTitle={event2.eventName}
                    eventDate={event2.eventDate}
                    eventTime={event2.eventTime}
                    eventLocation={event2.eventLocation}
                    eventPrice={event2.eventPrice}
                    eventOrganizer={event2.eventOrganizer}
                    organizerFollowers={event2.organizerFollowers}
                  />
                ))
                : "Loading..."}
            </Row>
            <Row className="justify-content-md-center">
              <Col md={4}>
                <Link to="/all-events">
                  <button className="darkOutlineBtn" id="seeMoreEventsBtn">
                    See More
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Events;
