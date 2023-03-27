import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getUsers } from "../../../../services/users";

import EventCard from "./EventCard";

const Events = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  var cards = [];

  for (var i = 1; i <= 8; i++) {
    cards.push(i);
  }

  useEffect(() => {
    const PASSWORD = "123456";

    getUsers({ password: PASSWORD, email: "Sincere@aprilhhh.biz" })
      .then((response) => console.log("response: ", response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className=" pl-5 pr-5 mb-5">
      <h3 className="heading3">Events in Cairo</h3>

      <Row className="justify-content-md-right">
        {cards.map((card, index) => (
          <EventCard index={index} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
