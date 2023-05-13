import React from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { Avatar } from "@mui/material";
import * as HIIcons from "react-icons/hi";
import "../SingleEvent.scss";
import WhiteButton from "src/Components/Buttons/WhiteButton";
import { useGetUserQuery } from "src/features/api/userApi";
import FollowButton from "src/Components/FollowButton/FollowButton";
import { Link } from "react-router-dom";
const EventAboutOrganizer = (props) => {
  const { data: organizerData } = useGetUserQuery(props.organizerId);

  const AvatarStyle = {
    border: "1px solid #eeedf2",
    width: "5rem",
    height: "5rem",
  };

  const ContainerStyle = {
    maxWidth: "50vw",
    maxHeight: "70vh",
    border: "1px solid #eeedf2",
    boxShadow: "1px 2px 2px 3px rgba(0,0,0.3,0.1)",
  };

  return (
    <>
      <Row>
        <h3 className="header-text">About the organizer</h3>
      </Row>
      <Container className="p-5 ml-3" style={ContainerStyle}>
        <Col>
          <Row className="d-flex g-0 justify-content-center mb-4">
            {organizerData?.avatar_url ? (
              <Avatar
                alt="Organizer Avatar"
                src={organizerData?.avatar_url}
                style={AvatarStyle}
              />
            ) : null}
          </Row>
          <Row className="d-flex justify-content-center">
            Organized by
            <Button
              variant="link"
              style={{
                fontWeight: "700",
                fontSize: "18px",
                textDecoration: "none",
                color: "#1e0a3c",
              }}
            >
              <Link to={`/organizer/${organizerData?.id}`}>
                {organizerData?.firstname + " " + organizerData?.lastname}
              </Link>
            </Button>
          </Row>

          <Row className="d-flex justify-content-center">
            <p style={{ textAlign: "center" }}>
              <strong style={{ fontSize: "1.25rem" }}>
                {props.follower_count}
              </strong>
              <br />
              <p style={{ color: "#6f7287", fontSize: "0.8rem" }}>Followers</p>
            </p>
          </Row>

          <Row className="d-flex justify-content-center">
            <Stack
              direction="horizontal"
              gap={4}
              className="d-flex justify-content-center"
            >
              <WhiteButton
                style={{
                  fontSize: "16px",
                  borderRadius: "1vmin",
                  padding: "2% 4%",
                  color: "#4161df",
                }}
              >
                Contact
              </WhiteButton>
              <FollowButton id={props?.organizerId} />
            </Stack>
          </Row>

          <Row className="d-flex justify-content-center pt-5">
            <div className="d-flex justify-content-center pt-5">
              <Link to={`/organizer/${props?.organizerId}`}>
                <HIIcons.HiGlobeAlt
                  style={{
                    color: "#3659e3",
                    border: "1px #f8f7fa solid",
                    borderRadius: "10%",
                    backgroundColor: "#f8f7fa",
                    padding: "0.2rem",
                  }}
                  size="2em"
                />
              </Link>
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default EventAboutOrganizer;
