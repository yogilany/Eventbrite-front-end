import { Row, Col, Container } from "react-bootstrap";
import Hr from "../../../components/Elements/Hr";
import { Categories } from "./Components/Categories";
import Events from "./Components/Events";
import { Hero } from "./Components/Header";
import Header from "../../../components/header/Header";
import MoreEvents from "./Components/MoreEvents";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Hero />
            <Categories />
            <Events />
            <Hr />
            <MoreEvents />
          </Col>
        </Row>
      </Container>
    </>
  );
};
