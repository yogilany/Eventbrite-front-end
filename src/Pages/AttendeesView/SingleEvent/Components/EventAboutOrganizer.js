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
const EventAboutOrganizer = (props) => {
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const { data: isUserFollowed, isError: isError } = useIsUserFollowedQuery(
    props.organizerId
  );
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
  const followBtnHandler = () => {
    if (!isError) {
      unfollowUser(props.organizerId);
    } else {
      followUser(props.organizerId);
    }
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
              <WhiteButton
                style={{
                  fontSize: "16px",
                  borderRadius: "1vmin",
                  padding: "2% 4%",
                  backgroundColor: `${isError === false ? "#4161df" : "white"}`,
                  color: `${isError === false ? "white" : "#4161df"}`,
                }}
                onClick={followBtnHandler}
              >
                {isError === false ? "Following" : "Follow"}
              </WhiteButton>
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
