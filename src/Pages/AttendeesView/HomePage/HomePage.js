import { Row, Col, Container } from "react-bootstrap";
import Hr from "../../../components/Elements/Hr";
import { Categories } from "./Components/Categories";
import Events from "./Components/Events";
import Hero from "./Components/Hero";
import Header from "../../../components/header/Header";
import "./HomePage.scss";
import { motion } from "framer-motion";
import Footer from "../../../components/footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Hero />
            {/* <Categories /> */}
            <Events />
            {/* <MoreEvents /> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
