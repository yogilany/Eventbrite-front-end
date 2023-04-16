import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * @author Yousef Gilany
 * @description This is the Search modal to search for events.
 * @returns {React.FC}
 * @todo create the search input component.
 * @todo create the search results component.
 * @todo create the search filters component.
 * @todo create the advertised collection component.
 *
 */
const SearchPage = ({ toggle }) => {
  const navigate = useNavigate();

  return (
    <Container fluid className="search-page p-5">
      <Row className="p-5">
        <Col className="p-5">
          <h1
            style={{
              fontSize: "90px",
              fontWeight: "800",
              color: "#39364f",
              fontFamily: "Neue Plak Black",
            }}
          >
            Search Page
          </h1>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "500",
              color: "#39364f",
              fontFamily: "Neue Plak",
            }}
          >
            Under Construction
          </h1>
          {/* <Link to="/"> */}
          <button className="primaryBtn" onClick={() => toggle(false)}>
            Back
          </button>
          {/* </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
