import { Container, Row, Col } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <>
      <Container FLUID className="error-container">
        <Row className="justify-content-md-center m-5">
          <Col>
            <Row>
              <Col>
                <ErrorOutlineIcon
                  className="large-icon"
                  sx={{ fontSize: 80, color: "#faea11" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <parseFloat className="heading1">
                  Whoops, the page or event you are looking for was not found.
                </parseFloat>
                <p className="paragraph">
                  If you feel this message is in error,{" "}
                  <a className="link" href="gpoogle.com">
                    please let us know
                  </a>
                  .
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
