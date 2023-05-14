import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { Button, InputAdornment, TextField } from "@mui/material";

const URLBox = ({ event }) => {
  const [editURL, setEditURL] = useState(false);
  const [URL, setURL] = useState(
    event ? `https://www.eventbrite.com/event/${event.id}` : null
  );

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={8}>
          {" "}
          <h3 className="heading3 ">Share</h3>
          {!editURL ? (
            <Row>
              <Col>
                <h5 className="heading6 p-0">Event URL</h5>
                <h5 className="heading6 m-0">{URL} </h5>
              </Col>
              <Col md="auto">
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    navigator.clipboard.writeText(URL);
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => setEditURL(true)}
                >
                  <EditIcon />
                </IconButton>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <TextField
                  label="Event URL"
                  id="outlined-start-adornment"
                  data-testid="event-url"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        .eventbrite.com
                      </InputAdornment>
                    ),
                  }}
                />
              </Col>
              <Col md="auto">
                <Button size="small" onClick={() => setEditURL(false)}>
                  Save
                </Button>
                <Button size="small" onClick={() => setEditURL(false)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          )}
          <hr />
        </Col>
        <Col md={4}>
          {/* <h3 className="heading3 ">Share on</h3> */}
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default URLBox;
