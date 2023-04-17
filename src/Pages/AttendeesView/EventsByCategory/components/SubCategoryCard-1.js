import React from "react";
import { Col, Row, Container } from "react-bootstrap";
const SubCategoryCard = ({ testimage, name }) => {
  return (
    <Col
      md="auto"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: "150px",
      }}
    >
      <Row>
        <Col>
          <img
            alt="Remy Sharp"
            src={testimage}
            width="130px"
            height="130px"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            className="heading6"
            style={{
              color: "#39364f",
              //   fontWeight: "bold",
              //   fontSize: "0.9rem",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {name}
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default SubCategoryCard;
