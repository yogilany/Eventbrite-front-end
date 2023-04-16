import { Row, Col, Container } from "react-bootstrap";
import Hr from "../../../components/Elements/Hr";
import { Categories } from "./Components/Categories";
import Events from "./Components/Events";
import Hero from "./Components/Hero";
import Header from "../../../components/header/Header";
import "./HomePage.scss";
import { motion } from "framer-motion";
import Footer from "../../../components/footer/Footer";
import { useState, useEffect } from "react";

/**
 * @author Yousef Gilany
 * @description This is the Main page of the application that contains the Hero , Categories , Events and More Events Sections.
 * It is the first page that the user sees when he enters the application.
 * @returns {JSX.Element}
 * @todo make the page more responsive .
 */

export const HomePage = () => {
  console.log("USERR", window.User);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
      console.log(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <Header screenSize={screenSize} />
      <Container fluid id="homePageContainer">
        <Row>
          <Col className="p-0">
            <Hero screenSize={screenSize} />
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
