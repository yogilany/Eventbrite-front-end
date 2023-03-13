import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleMap from "./Map";
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export const AllEvents = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          {windowSize.innerWidth < 800 ? null : (
            <Col
              md={3}
              style={{
                backgroundColor: "red",
                height: "300px",
                width: "310px",
              }}
            ></Col>
          )}
          <Col
            // md={6}
            style={{ backgroundColor: "blue", height: "300px" }}
          ></Col>
          {windowSize.innerWidth < 1200 ? null : (
            <Col
              style={{
                backgroundColor: "green",
                height: "300px",
                maxWidth: "550px",
              }}
            >
              <SimpleMap />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};
