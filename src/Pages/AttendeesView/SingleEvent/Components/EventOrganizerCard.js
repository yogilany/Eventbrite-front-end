import { Col, Row, Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Avatar } from "@mui/material";
export const EventOrganizerCard = (props) => {
  const ContainerCardStyle = {
    backgroundColor: "#f8f7fa",
    borderRadius: "2vmin",
  };

  const AvatarStyle = {
    border: "1px solid #eeedf2",
  };

  return (
    <Container fluid className="p-3" style={ContainerCardStyle}>
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
            <div>
              <h5>
                By <strong>{props.name}</strong>{" "}
              </h5>
              <h6>
                <em>{props.follower_count} Followers</em>
              </h6>
            </div>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <Button size="md" variant="primary">
            Follow
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventOrganizerCard;
