import { Button, Col, Container, Row } from "react-bootstrap";
import slogan from "../../../../assets/slogan.svg";
import fullCover from "../../../../assets/adel-full-cover.png";
import smallCover from "../../../../assets/adel-small-cover.png";

import { useState, useEffect } from "react";

/**
 * @author Yousef Gilany
 * @description This is the Hero component of the HomePage. It shows a background picture and a slogan with a button to find events.
 * @returns {React.FC}
 * @todo Make the background picture responsive. *
 */
const Hero = ({ screenSize }) => {
  return (
    <Container className="p-0" fluid id="heroContainer">
      <Col>
        <Row>
          {screenSize.width > 768 ? (
            <img
              src={fullCover}
              width="100%"
              alt="slogan"
              // style={{ marginTop: "50%" }}
            />
          ) : (
            <img
              src={smallCover}
              width="100%"
              alt="slogan"
              // style={{ marginTop: "50%" }}
            />
          )}
        </Row>
        <Row style={{ position: "relative", left: "100px", bottom: "75px" }}>
          <Col>
            <button className="primaryBtn" id="nextEventBtn" sty>
              Find your next event
            </button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Hero;
