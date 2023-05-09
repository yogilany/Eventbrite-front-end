import { Col, Row, Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
import BlueButton from "src/Components/Buttons/BlueButton";
export const EventOrganizerCard = (props) => {
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
            {/* <div style={{
                            overflow: "hidden",
                            borderRadius: "100%",
                            backgroundColor:"#f8f7fa",
                            border: "1px solid #eeedf2"
                        }}>
                        </div> */}
            <Avatar
              alt="Organizer Avatar"
              src={props.avatar}
              style={AvatarStyle}
            />
            <div className="organizer-info-text">
              By <strong className="organizer-name-em">{props.name}</strong>{" "}
              <br></br>
              <p>{props.follower_count} followers</p>
            </div>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <BlueButton
            style={{
              width: "50%",
              color: `${props.isOrganizerFollowed ? "white" : ""}`,
            }}
          >
            Follow
          </BlueButton>
        </Col>
      </Row>
    </Container>
  );
};

export default EventOrganizerCard;
