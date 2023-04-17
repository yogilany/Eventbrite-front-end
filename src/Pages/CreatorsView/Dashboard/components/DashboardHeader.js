import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TicketsCard from "./TicketsCard";
import ViewsCard from "./ViewsCard";
import Recommendations from "./Recommendations";
const DashboardHeader = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <TicketsCard />
        </Col>
        <Col>
          <ViewsCard />
        </Col>
        <Col>
          <Recommendations />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardHeader;
