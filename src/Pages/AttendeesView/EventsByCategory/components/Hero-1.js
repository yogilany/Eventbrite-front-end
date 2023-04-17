import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MusicBack from "../../../../assets/cat1.png";
import { Padding } from "@mui/icons-material";
const Hero = ({ category, location }) => {
  const HeroStyle = [
    { background: "#0B4F60", color: "#FFDC00", subColor: "#8FF2F7" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
    { background: "rgb(1, 36, 233)", color: "rgb(247, 241, 84);" },
  ];
  return (
    <Container
      fluid
      className=""
      style={{ backgroundColor: `${HeroStyle[1].background}`, height: "300px" }}
    >
      <Row>
        <Col className="p-5">
          <h1
            className="heading1 mt-4 ml-5 mb-0"
            style={{ color: `${HeroStyle[0].color}` }}
          >
            {category} Events
          </h1>
          <h3
            style={{
              color: `${HeroStyle[0].subColor}`,
              fontSize: "1.125rem",
              fontWeight: "bold",
              margin: "0",
              Padding: "0",
            }}
          >
            In {location}
          </h3>
          <h3
            className="ml-5"
            style={{ color: `${HeroStyle[0].subColor}`, fontSize: "16px" }}
          >
            Discover the best {category} events in your area and online
          </h3>
        </Col>
        <Col md="auto">
          <div>
            <img
              alt="category-background"
              src={MusicBack}
              height="300px"
              width="450px"
              style={{ objectFit: "cover", marginRight: "100px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;