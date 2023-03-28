import { Button, Col, Container, Row } from "react-bootstrap";
import slogan from "../../../../assets/slogan.svg";

/**
 * @author Yousef Gilany
 * @description This is the Hero component of the HomePage. It shows a background picture and a slogan with a button to find events.
 * @returns {React.FC}
 * @todo Make the background picture responsive. *
 */
const Hero = () => {
  return (
    <Container className="mb-5 p-0" fluid>
      <div className="header-img">
        <Container className="p-6">
          <Col md={2}>
            <Row>
              <Col>
                <img
                  src={slogan}
                  width="500px"
                  alt="slogan"
                  style={{ marginTop: "50%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="primaryBtn">Find your next event</button>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </Container>
  );
};

export default Hero;
