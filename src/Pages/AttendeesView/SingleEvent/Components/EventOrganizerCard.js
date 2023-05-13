import { Col, Row, Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
import BlueButton from "src/Components/Buttons/BlueButton";
import FollowButton from "src/Components/FollowButton/FollowButton";
import { useGetUserQuery } from "src/features/api/userApi";
import { Link } from "react-router-dom";
export const EventOrganizerCard = (props) => {
  const { data: organizerData } = useGetUserQuery(props.organizerId);

  const ContainerCardStyle = {
    backgroundColor: "#f8f7fa",
    borderRadius: "2vmin",
  };

  const AvatarStyle = {
    border: "1px solid #eeedf2",
  };
  return (
    <Container fluid className="p-4" style={ContainerCardStyle}>
      <Row>
        <Col>
          <Stack direction="horizontal" gap={3}>
            {organizerData?.avatar_url ? (
              <Avatar
                alt="Organizer Avatar"
                src={organizerData?.avatar_url}
                style={AvatarStyle}
              />
            ) : null}

            <div className="organizer-info-text">
              By{" "}
              <strong className="organizer-name-em">
                {" "}
                <Link to={`/organizer/${organizerData?.id}`}>
                  {organizerData?.firstname + " " + organizerData?.lastname}
                </Link>
              </strong>{" "}
              <br></br>
              <p>{props.follower_count} followers</p>
            </div>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <FollowButton id={props?.organizerId} />
        </Col>
      </Row>
    </Container>
  );
};

export default EventOrganizerCard;
