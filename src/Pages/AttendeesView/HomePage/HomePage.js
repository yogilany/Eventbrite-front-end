import { Row, Col, Container } from "react-bootstrap";
import Hr from "../../../components/Elements/Hr";
import { Categories } from "./Components/Categories";
import Events from "./Components/Events";
import { Header } from "./Components/Header";
import MoreEvents from "./Components/MoreEvents";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Header />
          <Categories />
          <Events />
          <Hr />
          <MoreEvents />
        </Col>
      </Row>
    </Container>
  );
};
