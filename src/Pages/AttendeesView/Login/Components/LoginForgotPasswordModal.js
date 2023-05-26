import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import "../Login.scss";
import "./LoginForgotPasswordModal.scss";

/**
 * Horizontal chip with the word 'or' in a pill and 2 lines on both sides of the pill
 * @date 3/29/2023 - 2:52:24 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
const LoginForgotPasswordModal = (props) => {
  return (
    <Modal
      {...props}
      data-testid="LoginForgetPasswordModal"
      id="LoginForgetPasswordModal"
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
                Check your email to update <br></br>your password
              </h2>
            </Row>
            <Row>
              <span className="span-text-format">
                {"We sent a link to "}
                <strong>{props.email}</strong>
                {" to update your password."}
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

export default LoginForgotPasswordModal;
