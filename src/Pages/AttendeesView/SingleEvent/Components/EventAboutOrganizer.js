import React from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { Avatar, Link } from "@mui/material";
import * as HIIcons from "react-icons/hi";
import "../SingleEvent.scss";
import WhiteButton from "src/Components/Buttons/WhiteButton";
import {
  useFollowUserMutation,
  useGetUserQuery,
  useIsUserFollowedQuery,
  useUnfollowUserMutation,
} from "src/features/api/userApi";
import FollowButton from "src/Components/FollowButton/FollowButton";
const EventAboutOrganizer = (props) => {
  const { data: organizerData } = useGetUserQuery(props.organizerId);

  const AvatarStyle = {
    border: "1px solid #eeedf2",
    width: "5rem",
    height: "5rem",
  };
  const MainHeaderStyle = {
    color: "#1e0a3c",
  };
  const ContainerStyle = {
    maxWidth: "50vw",
    maxHeight: "70vh",
    boxShadow: "0 2px 2px 2px rgba(0,0,0.3,0.1)",
  };

  return (
    <>
      <h3 className="header-text">About the organizer</h3>
      <Container className="p-5 m-0 d-flex" style={ContainerStyle}>
        <Col>
          <Row className="d-flex justify-content-center mb-4">
            <Avatar
              alt="Organizer Avatar"
              src={organizerData?.avatar_url}
              style={AvatarStyle}
            />
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
              {organizerData?.firstname + " " + organizerData?.lastname}
            </Button>
          </Row>

          <Row className="d-flexjustify-content-center">
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
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default EventAboutOrganizer;
