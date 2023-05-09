import React from "react";
import { Stack } from "react-bootstrap/";
import * as MUIcons from "@mui/icons-material";
import "../SingleEvent.scss";
export const EventAbout = ({ summary }) => {
  const MainHeaderStyle = {
    color: "#1e0a3c",
  };
  const AboutParagraphStyle = {
    color: "#6f7287",
    fontSize: "16px",
  };
  return (
    <Stack gap={2} style={{ maxWidth: "50vw" }}>
      <h3 className="header-text">About this event</h3>
      <Stack className="mb-3" direction="horizontal" gap={5}>
        <div>
          <MUIcons.AccessTime
            style={{
              color: "#0124e9",
              border: "1px #f8f7fa solid",
              borderRadius: "10%",
              backgroundColor: "#f8f7fa",
              padding: "0.2rem",
            }}
            sx={{ fontSize: 26 }}
          />
          <strong>1 day 12 hours</strong>
        </div>
        <div>
          <MUIcons.WifiRounded
            style={{
              color: "#0124e9",
              border: "1px #f8f7fa solid",
              borderRadius: "10%",
              backgroundColor: "#f8f7fa",
              padding: "0.2rem",
            }}
            sx={{ fontSize: 26 }}
          />
          <strong>Mobile eTicket</strong>
        </div>
      </Stack>
      <p style={AboutParagraphStyle}>{summary}</p>
    </Stack>
  );
};
export default EventAbout;
