import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdPersonOutline } from "react-icons/md";
import EventCard from "./EventCard";

/**
 * @author Yousef Gilany
 * @description This is the second Events section of the HomePage.
 * It shows the events on a specific city depending on the user's location.
 * It can be changed to show events on another city. It shows 16 events at a time and button to navigate to the events page to see more.
 * @returns {React.FC}
 *
 * @todo Get data from API and show it.
 */

const MoreEvents = () => {
  var cards = [];

  for (var i = 1; i <= 16; i++) {
    cards.push(i);
  }

  return (
    <Container className=" pl-5 pr-5 mb-5 mt-5">
      <Row>
        <Col>
          <h3 className="heading3">More Events</h3>
        </Col>
      </Row>

      <Row className="justify-content-md-right">
        {cards.map((card, index) => (
          <EventCard index={index} key={index} />
        ))}
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <button className="darkOutlineBtn">See More</button>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreEvents;
