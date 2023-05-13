import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import "../../Pages/AttendeesView/Login/Login.scss";
import "./VerificationEmailModal.scss";

const VerificationEmailModal = (props) => {
  return (
    <Modal
      {...props}
      data-testid="VerificationEmailModal"
      id="VerificationEmailModal"
      style={{ borderRadius: "0" }}
      size="lg"
      centered
      autoFocus
      animation
      backdropClassName="modal-backdrop-color"
    >
      <Modal.Header closeButton style={{ border: "none" }} />
      <Modal.Body>
        <Container
          fluid
          className="text-center justify-content-center d-flex pb-5 pt-5 "
        >
          <Col md={2}></Col>
          <Col md={8}>
            <Row className="mb-3">
              <Col className="g-0 p-0" md={5}></Col>
              <Col className="g-0 p-0" md={2}>
                <div
                  id="circular-icon"
                  style={{
                    width: "72px",
                    height: "72px",
                    backgroundColor: "#eeedf2",
                    margin: "0",
                  }}
                >
                  <GrIcons.GrMailOption size={40} />
                </div>
              </Col>
              <Col className="g-0 p-0" md={5}></Col>
            </Row>
            <Row>
              <h2 className="verify-modal-header">
                Check your email to verify <br></br>your account
              </h2>
            </Row>
            <Row>
              <span className="span-text-format">
                {"We sent a link to "}
                <strong>{props.email}</strong>
                {" to verify your account."}
              </span>
            </Row>
            <Row>
              <span style={{ color: "#6f7287", display: "block" }}>
                <p>
                  <HiIcons.HiOutlineClock
                    size={20}
                    style={{
                      marginRight: "0.3rem",
                      display: "inline",
                      color: "#6f7287",
                    }}
                  />
                  {"For your security, the link expires in 15 minutes"}
                </p>
              </span>
            </Row>
          </Col>
          <Col md={2}></Col>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default VerificationEmailModal;
