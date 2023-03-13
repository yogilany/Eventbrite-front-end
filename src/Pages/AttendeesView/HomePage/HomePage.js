import { Row, Col, Container } from "react-bootstrap";
import { Events } from "./Components/Events";
import { Header } from "./Components/Header";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Header />
          <Events />
        </Col>
      </Row>
    </Container>
  );
};
