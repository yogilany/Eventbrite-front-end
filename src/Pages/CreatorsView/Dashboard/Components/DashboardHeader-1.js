import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TicketsCard from "./TicketsCard-1";
import ViewsCard from "./ViewsCard-1";
import Recommendations from "./Recommendations-1";
const DashboardHeader = ({tickets, sold, total}) => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <TicketsCard  tickets={tickets} sold={sold} total={total} />
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
