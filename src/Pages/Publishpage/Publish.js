import React from "react";
import "./Publish.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillAndroid, AiFillBulb } from "react-icons/ai";
import Radpub from "./Radpub";
import Headerpub from "./Headerpub";
import Tipsbox from "./Tipsbox";
import DateTime from "./DateTime";
import Sidebar from "../../Pages/CreatorsView/Sidebar/Sidebar";
import { TfiTicket } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";
import Containerpub from "./Containerpub";
const Publish = () => {
  const LoginColumnStyle = {
    margin: "4rem 0 0 12rem",
  };
  return (
    <div>
      {/* <Headerpub /> */}
      <Sidebar />

      <div style={{ marginLeft: 450, marginTop: 20 }}>
        <h1 className="pubhead">Publish Your Event</h1>
        <Containerpub />
        <div style={{ marginTop: 45 }}>
          <Row>
            <Col md="5">
              <Radpub />
            </Col>
            <Col md="7">
              <div style={{ marginLeft: 25 }}>
                <Tipsbox />
              </div>
            </Col>
          </Row>
          <Row>
            <DateTime />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Publish;
