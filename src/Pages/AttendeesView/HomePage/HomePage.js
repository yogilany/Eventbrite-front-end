import { Row, Col, Container } from "react-bootstrap";
import Hr from "../../../components/Elements/Hr";
import { Categories } from "./Components/Categories";
import Events from "./Components/Events";
import Hero from "./Components/Hero";
import Header from "../../../components/header/Header";
import "./HomePage.scss";
import { motion } from "framer-motion";
import Footer from "../../../components/footer/Footer";
import { selectCurrentUser } from "../../../features/authSlice";
/**
 * @author Yousef Gilany
 * @description This is the Main page of the application that contains the Hero , Categories , Events and More Events Sections.
 * It is the first page that the user sees when he enters the application.
 * @returns {JSX.Element}
 * @todo make the page more responsive .
 */

export const HomePage = () => {
  console.log("USERR", window.User);
  console.log(selectCurrentUser)
  return (
    <>
      <Header />
      <Container fluid id="homePageContainer">
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
