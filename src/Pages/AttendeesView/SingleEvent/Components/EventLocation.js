import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import * as MUIcons from "@mui/icons-material";
import "../SingleEvent.scss";
export const EventLocation = ({ location, date_and_time }) => {
  return (
    <Container>
      <h3 className="header-text">When and where</h3>
      <Row>
        <Col md={1}>
          <MUIcons.CalendarToday
            style={{
              color: "#0124e9",
              border: "1px #f8f7fa solid",
              borderRadius: "10%",
              backgroundColor: "#f8f7fa",
              padding: "0.2rem",
            }}
            sx={{ fontSize: 36 }}
          />
        </Col>
        <Col md={4} className="p-0 m-0">
          <h6 className="sub-header-text">Date and time</h6>
          <p style={{ color: "#6f7287", fontSize: "small" }}>
            {new Date(date_and_time.start_date_time).toLocaleString("default", {
              month: "long",
            }) +
              " " +
              new Date(date_and_time.start_date_time).getDate() +
              " • " +
              new Date(date_and_time.start_date_time).toLocaleTimeString(
                navigator.language,
                { hour: "2-digit", minute: "2-digit" }
              ) +
              " - " +
              new Date(date_and_time.end_date_time).toLocaleString("default", {
                month: "long",
              }) +
              " " +
              new Date(date_and_time.end_date_time).getDate() +
              " • " +
              new Date(date_and_time.end_date_time).toLocaleTimeString(
                navigator.language,
                { hour: "2-digit", minute: "2-digit" }
              )}
            <br></br>
          </p>
        </Col>
        <Col
          md={1}
          className="pr-0"
          style={{ borderLeft: "1px solid #dbdae3" }}
        >
          <MUIcons.LocationOn
            style={{
              color: "#0124e9",
              border: "1px #f8f7fa solid",
              borderRadius: "10%",
              backgroundColor: "#f8f7fa",
              padding: "0.2rem",
            }}
            sx={{ fontSize: 36 }}
          />
        </Col>
        <Col md={4}>
          <h6 className="sub-header-text">Location</h6>
          <p style={{ color: "#6f7287", fontSize: "small" }}>{location.city}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EventLocation;
