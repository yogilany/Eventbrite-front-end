import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdPersonOutline } from "react-icons/md";
import Hr from "../../../../components/Elements/Hr";
const Events = () => {
  var cards = [];

  for (var i = 1; i <= 8; i++) {
    cards.push(i);
  }

  return (
    <Container className=" pl-5 pr-5 mb-5">
      <h3 className="heading3">Events in Cairo</h3>

      <Row className="justify-content-md-right">
        {cards.map((card, index) => (
          <Col xl={3} lg={4} md={4} sm={6} key={index}>
            <div className="card-container">
              <a href="google.com">
                <img
                  variant="top"
                  width="100%"
                  height="150px"
                  alt="desc"
                  style={{ objectFit: "cover" }}
                  src="https://images.pexels.com/photos/11856438/pexels-photo-11856438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </a>
              <div className="p-3">
                <a href="google.com">
                  <h1 className="card-title">The Design Show Egypt</h1>
                </a>
                <h3 className="card-date">Thu, Jun 1, 11:00 AM</h3>
                <h3 className="card-text">
                  Cairo International Convention Centre
                </h3>
                <h3 className="card-text">Free</h3>
                <div>
                  <h3 className="card-caption"> Hany Mahmoud</h3>
                  <h3 className="card-caption">
                    {" "}
                    <MdPersonOutline /> 1000 Followers
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
