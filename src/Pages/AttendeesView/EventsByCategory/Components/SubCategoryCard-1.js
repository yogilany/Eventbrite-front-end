import React from "react";
import { Col, Row } from "react-bootstrap";


/**
 * @author Anas Sherif
 * @param {}
 * @description This is the SubCategoryCard component of the EventsByCategory page.
 * @returns {JSX.Element}
 */
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
          className="w-32 h-32"
            alt="Remy Sharp"
            src={testimage}
         
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
