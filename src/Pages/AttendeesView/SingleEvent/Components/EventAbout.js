import React from "react";
import { Stack } from "react-bootstrap/";
import * as MUIcons from "@mui/icons-material";
import "../SingleEvent.scss";
import "date-fns";
import { intervalToDuration } from "date-fns";
export const EventAbout = ({ description, startDate, endDate }) => {
  const MainHeaderStyle = {
    color: "#1e0a3c",
  };
  const AboutParagraphStyle = {
    color: "#6f7287",
    fontSize: "16px",
  };

  const eventDuration = intervalToDuration({
    start: new Date(startDate),
    end: new Date(endDate),
  });

  const days = eventDuration.days;
  const hours = eventDuration.hours;
  const minutes = eventDuration.minutes;
  const eventDurationString =
    (days !== 0 ? `${days} day` : "") +
    (hours !== 0 ? `${hours} hours` : "") +
    (minutes !== 0 ? `${minutes} minutes` : "");

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
          <strong>
            {eventDuration.days} days {eventDuration.hours} hours
          </strong>
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
      <p style={AboutParagraphStyle}>{description}</p>
    </Stack>
  );
};
export default EventAbout;
