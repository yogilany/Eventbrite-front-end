import { Button, Col, Container, Row } from "react-bootstrap";
import slogan from "../../../../assets/slogan.svg";
export const Header = () => {
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
